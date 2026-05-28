import type { LibraryCode, LibraryEntry, LibraryVariant } from './types'
import { defaultScreenshotPath } from './screenshots'

export type LibraryEntryWithCode = LibraryEntry & { code: LibraryCode }

export function hasVariants(entry: LibraryEntry): boolean {
  return (entry.variants?.length ?? 0) > 0
}

export function asEntryWithCode(entry: LibraryEntry): LibraryEntryWithCode | null {
  if (!entry.code) return null

  const withScreenshot: LibraryEntryWithCode = {
    ...(entry as LibraryEntry & { code: LibraryCode }),
    screenshot: entry.screenshot ?? defaultScreenshotPath(entry.id),
  }
  return withScreenshot
}

/** Build a LibraryViewer-ready entry for one variant */
export function entryFromVariant(
  parent: LibraryEntry,
  variant: LibraryVariant,
): LibraryEntryWithCode {
  return {
    ...parent,
    id: `${parent.id}--${variant.id}`,
    title: variant.label,
    subtitle: variant.description ?? parent.subtitle,
    description: variant.description ?? parent.description,
    codeLocation: variant.codeLocation ?? parent.codeLocation,
    code: variant.code,
    preview: variant.preview,
    screenshot:
      variant.screenshot ?? parent.screenshot ?? defaultScreenshotPath(parent.id, variant.id),
    figmaUrl: variant.figmaUrl ?? parent.figmaUrl,
    previewLayout: variant.previewLayout ?? parent.previewLayout,
    variants: undefined,
  }
}
