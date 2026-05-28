import { createHighlighterCore, type HighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'
import { bundledLanguages } from 'shiki/langs'
import { bundledThemes } from 'shiki/themes'

let highlighterPromise: Promise<HighlighterCore> | null = null

export function getHighlighter() {
  highlighterPromise ??= createHighlighterCore({
    themes: [bundledThemes['dark-plus']],
    langs: [bundledLanguages.vue, bundledLanguages.html, bundledLanguages.css],
    engine: createOnigurumaEngine(() => import('shiki/wasm')),
  })
  return highlighterPromise
}

export async function highlightCode(code: string, lang: 'vue' | 'html' | 'css') {
  const highlighter = await getHighlighter()
  return highlighter.codeToHtml(code, {
    lang,
    theme: 'dark-plus',
  })
}

function escapeAttribute(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function extractCodeInnerHtml(shikiHtml: string) {
  const start = shikiHtml.indexOf('<code>')
  const end = shikiHtml.lastIndexOf('</code>')
  if (start === -1 || end === -1 || end <= start) return ''
  return shikiHtml.slice(start + '<code>'.length, end)
}

/**
 * Render highlighted code with a VS Code-like line-number gutter.
 *
 * Returns a HTML string suitable for v-html.
 */
export async function highlightCodeWithLineNumbers(
  code: string,
  lang: 'vue' | 'html' | 'css',
  folds?: Array<{ from: number; to: number }>,
) {
  const shikiHtml = await highlightCode(code, lang)
  const inner = extractCodeInnerHtml(shikiHtml)

  // Shiki uses `\n` line breaks in the <code> content.
  const lines = inner.split('\n')
  const lastIndex = lines.length - 1
  const normalized = lastIndex >= 0 && lines[lastIndex] === '' ? lines.slice(0, -1) : lines

  const foldByFrom = new Map<number, number>()
  for (const f of folds ?? []) {
    if (f.to <= f.from) continue
    const existing = foldByFrom.get(f.from)
    if (!existing || f.to > existing) foldByFrom.set(f.from, f.to)
  }

  const rows = normalized
    .map((lineHtml, i) => {
      const lineNumber = i + 1
      const aria = escapeAttribute(`Line ${lineNumber}`)
      const foldTo = foldByFrom.get(lineNumber)
      const foldBtn = foldTo
        ? `<button class="code-ln__fold" type="button" data-fold-from="${lineNumber}" data-fold-to="${foldTo}" aria-label="Toggle fold" title="Toggle fold">▾</button>`
        : `<span class="code-ln__fold-spacer" aria-hidden="true"></span>`
      return `<span class="code-ln__row" data-ln="${lineNumber}"><span class="code-ln__gutter" aria-label="${aria}">${foldBtn}${lineNumber}</span><span class="code-ln__code">${lineHtml || '&nbsp;'}</span></span>`
    })
    .join('')

  // Keep the same wrapper class so our existing shiki CSS applies.
  return `<pre class="shiki shiki--line-numbers" tabindex="0"><code>${rows}</code></pre>`
}
