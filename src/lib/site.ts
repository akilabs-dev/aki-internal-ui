export const SITE_NAME = 'Japanese Style'

export function formatPageTitle(pageTitle: string, eyebrow?: string): string {
  if (eyebrow && eyebrow !== 'Docs') {
    return `${pageTitle} · ${eyebrow} · ${SITE_NAME}`
  }
  return `${pageTitle} · ${SITE_NAME}`
}
