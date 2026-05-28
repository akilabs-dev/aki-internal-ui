
export function extractTemplateFromVueSfc(source: string): string {
  const match = source.match(/<template[^>]*>([\s\S]*?)<\/template>/i)
  return match?.[1]?.trim() ?? ''
}
