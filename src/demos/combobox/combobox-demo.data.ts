export type ComboboxFramework = {
  value: string
  label: string
}

export const comboboxFrameworks: ComboboxFramework[] = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

export const comboboxPlaceholder = 'Select framework...'

export const comboboxSearchPlaceholder = 'Search framework...'

export const comboboxEmptyLabel = 'No framework found.'

/** Figma frame — horizontal, gap-4 */
export const comboboxFrameMaxWidthPx = 768
export const comboboxFrameClass = 'flex w-full flex-wrap gap-4'

export function comboboxFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${comboboxFrameMaxWidthPx}px` }
}

export const comboboxTriggerClass =
  'w-[200px] justify-between'

export const comboboxContentClass = 'w-[200px] p-0'

export const comboboxCommandInputClass = 'h-9'

export type ComboboxStatus = {
  value: string
  label: string
}

export const comboboxStatuses: ComboboxStatus[] = [
  { value: 'backlog', label: 'Backlog' },
  { value: 'todo', label: 'Todo' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
  { value: 'canceled', label: 'Canceled' },
]

export const comboboxStatusFieldLabel = 'Status'

export const comboboxStatusTriggerPlaceholder = 'Set status'

export const comboboxStatusSearchPlaceholder = 'Change status...'

export const comboboxStatusEmptyLabel = 'No status found.'

export const comboboxStatusTriggerClass = 'h-8 w-auto justify-start gap-1.5 px-2.5'

/** Popover + inline open panel share the same width (Figma control column) */
export const comboboxStatusContentClass = 'w-[200px] p-0'

/** Closed combobox trigger slot (#1–#2) */
export const comboboxStatusPopoverWrapClass = 'relative inline-flex shrink-0'

/** Figma #3 — open menu inline in the control slot (no portal, no trigger button) */
export const comboboxStatusOpenPanelClass =
  'bg-popover text-popover-foreground inline-flex w-[200px] shrink-0 flex-col rounded-md border shadow-md outline-hidden overflow-hidden p-0'

/** Figma status row — one line: [Status+btn] [Status+btn] [Status+menu] */
export const comboboxStatusFrameClass =
  'flex w-full flex-nowrap items-start gap-4'

export const comboboxStatusGroupClass = 'flex shrink-0 items-start gap-4'

export const comboboxStatusLabelClass =
  'pt-1.5 text-sm text-muted-foreground shrink-0'

export const comboboxStatusControlClass = 'relative inline-flex shrink-0'

/** Figma — two + Set status buttons, second with popover open */
export const comboboxStatusButtonFrameClass =
  'flex w-full flex-nowrap items-center gap-4'

/** Docs demo layout — Vue preview + HTML tab (four horizontal sections) */
export const comboboxDemoRootClass = 'space-y-4'

export const comboboxDemoSectionClass =
  'border border-slate-300 border-dashed p-3'

/** Task row + more menu (Figma) */
export const comboboxTaskFrameClass = 'flex w-full flex-col gap-4'

export const comboboxTaskRowClass =
  'flex w-full items-center justify-between gap-2'

export const comboboxTaskRowInnerClass = 'flex min-w-0 flex-1 items-center gap-2'

export const comboboxTaskBadgeLabel = 'feature'

export const comboboxTaskTitle = 'Create a new project'

export const comboboxTaskMenuLabel = 'Actions'

export type ComboboxTaskMenuItem = {
  id: string
  label: string
}

export const comboboxTaskMenuItems: ComboboxTaskMenuItem[] = [
  { id: 'assign', label: 'Assign to...' },
  { id: 'due', label: 'Set due date...' },
]

export const comboboxTaskMenuSubLabel = 'Apply label'

export const comboboxTaskMenuSubItems: ComboboxTaskMenuItem[] = [
  { id: 'documentation', label: 'Documentation' },
  { id: 'bug', label: 'Bug' },
  { id: 'feature', label: 'Feature' },
]

export const comboboxTaskMenuDeleteLabel = 'Delete'

export const comboboxTaskMenuDeleteShortcut = '⌘⌫'

export const comboboxTaskMenuContentClass = 'w-56'
