import { getEntryById } from './registry'

/** Query param: ?id=card → opens Card in the library */
export const LIBRARY_PAGE_QUERY = 'id'

export function isValidLibraryPageId(id: string): boolean {
  return Boolean(getEntryById(id.trim()))
}

export function readLibraryPageIdFromUrl(): string | null {
  if (typeof window === 'undefined') return null
  const raw = new URLSearchParams(window.location.search).get(LIBRARY_PAGE_QUERY)?.trim()
  if (!raw || !isValidLibraryPageId(raw)) return null
  return raw
}

export function setLibraryPageIdInUrl(id: string, replace = false): void {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  url.searchParams.set(LIBRARY_PAGE_QUERY, id)
  const method = replace ? 'replaceState' : 'pushState'
  window.history[method]({ libraryPageId: id }, '', url)
}

/** Full URL for html.to.design Web tab (dev server must be running). */
export function buildLibraryPageUrl(id: string, origin = window.location.origin): string {
  const url = new URL(origin)
  url.searchParams.set(LIBRARY_PAGE_QUERY, libraryMenuPageId(id))
  return url.toString()
}

/** Menu URL uses parent id: card--card1 → card */
export function libraryMenuPageId(entryOrVariantId: string): string {
  const id = entryOrVariantId.trim()
  if (id.includes('--')) return id.split('--')[0] ?? id
  return id
}
