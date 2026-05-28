import { createHighlighterCore, type HighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'
import langHtml from 'shiki/langs/html'
import langVue from 'shiki/langs/vue'
import themeDarkPlus from 'shiki/themes/dark-plus'

let highlighterPromise: Promise<HighlighterCore> | null = null

export function getHighlighter() {
  highlighterPromise ??= createHighlighterCore({
    themes: [themeDarkPlus],
    langs: [langVue, langHtml],
    engine: createOnigurumaEngine(() => import('shiki/wasm')),
  })
  return highlighterPromise
}

export async function highlightCode(code: string, lang: 'vue' | 'html') {
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
  lang: 'vue' | 'html',
) {
  const shikiHtml = await highlightCode(code, lang)
  const inner = extractCodeInnerHtml(shikiHtml)

  // Shiki uses `\n` line breaks in the <code> content.
  const lines = inner.split('\n')
  const lastIndex = lines.length - 1
  const normalized = lastIndex >= 0 && lines[lastIndex] === '' ? lines.slice(0, -1) : lines

  const rows = normalized
    .map((lineHtml, i) => {
      const lineNumber = i + 1
      const aria = escapeAttribute(`Line ${lineNumber}`)
      return `<span class="code-ln__row"><span class="code-ln__gutter" aria-label="${aria}">${lineNumber}</span><span class="code-ln__code">${lineHtml || '&nbsp;'}</span></span>`
    })
    .join('')

  // Keep the same wrapper class so our existing shiki CSS applies.
  return `<pre class="shiki shiki--line-numbers" tabindex="0"><code>${rows}</code></pre>`
}
