const WHITESPACE_SENSITIVE_EMPTY_TAGS =
  /<(textarea|pre|script|style)(\s[^>]*)?>\s*<\/\1>/gi

export function formatHtml(html: string): string {
  if (!html.trim()) return ''

  const preserved: string[] = []
  const protectedHtml = html.replace(WHITESPACE_SENSITIVE_EMPTY_TAGS, (match) => {
    const collapsed = match.replace(/>\s+</, '><')
    const token = `__FORMAT_HTML_PRESERVED_${preserved.length}__`
    preserved.push(collapsed)
    return token
  })

  const withBreaks = protectedHtml.replace(/>\s*</g, '>\n<')
  const lines = withBreaks.split('\n')
  let depth = 0

  let result = lines
    .map((line) => {
      const trimmed = line.trim()
      if (!trimmed) return ''

      if (trimmed.startsWith('</')) {
        depth = Math.max(0, depth - 1)
      }

      const indented = `${'  '.repeat(depth)}${trimmed}`

      if (
        trimmed.startsWith('<')
        && !trimmed.startsWith('</')
        && !trimmed.endsWith('/>')
        && !trimmed.includes('</')
        && !trimmed.startsWith('<!')
        && !trimmed.startsWith('__FORMAT_HTML_PRESERVED_')
      ) {
        depth += 1
      }

      return indented
    })
    .filter(Boolean)
    .join('\n')

  preserved.forEach((value, index) => {
    result = result.replace(`__FORMAT_HTML_PRESERVED_${index}__`, value)
  })

  return result
}
