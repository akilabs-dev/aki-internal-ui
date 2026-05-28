export function formatHtml(html: string): string {
  if (!html.trim()) return ''

  const withBreaks = html.replace(/>\s*</g, '>\n<')
  const lines = withBreaks.split('\n')
  let depth = 0

  return lines
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
      ) {
        depth += 1
      }

      return indented
    })
    .filter(Boolean)
    .join('\n')
}
