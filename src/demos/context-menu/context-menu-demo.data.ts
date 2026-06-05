/** Frame — two stacked triggers, no outer card border (matches Figma preview) */
export const contextMenuFrameMaxWidthPx = 320
export const contextMenuFrameClass = 'flex w-full flex-col gap-4 overflow-visible'
export const contextMenuBookmarksLabel = 'Show Bookmarks Bar'
export function contextMenuFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${contextMenuFrameMaxWidthPx}px` }
}

export const contextMenuTriggerClass =
  'flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'

export const contextMenuContentClass = 'w-52'
export const contextMenuSubContentClass = 'w-44'

export const contextMenuContentBaseClass =
  'bg-popover text-popover-foreground z-50 max-h-[var(--reka-context-menu-content-available-height)] min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md'

export type ContextMenuDemoState = {
  showBookmarks: boolean
  showFullUrls: boolean
  person: 'pedro' | 'colm'
}

export const contextMenuDefaults: ContextMenuDemoState = {
  showBookmarks: true,
  showFullUrls: false,
  person: 'pedro',
}

