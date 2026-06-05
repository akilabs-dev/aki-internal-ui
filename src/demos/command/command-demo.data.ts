/** Figma frame */
export const commandFrameMaxWidthPx = 490
export const commandFrameClass =
  'flex w-full flex-col gap-3 rounded-xl border border-border p-5'

export function commandFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${commandFrameMaxWidthPx}px` }
}

export const commandShortcutHintClass = 'text-muted-foreground text-sm'

export const commandRootClass = 'rounded-lg border shadow-md md:min-w-[450px]'

export const commandInputPlaceholder = 'Type a command or search...'
export const commandEmptyLabel = 'No results found.'
export const commandShortcutHint = 'Press ⌘ J'

export const commandSuggestionHeading = 'Suggestions'
export const commandSettingsHeading = 'Settings'

export type CommandDemoItem = {
  value: string
  label: string
  disabled?: boolean
  shortcut?: string
}

export const commandSuggestionItems: CommandDemoItem[] = [
  { value: 'calendar', label: 'Calendar' },
  { value: 'emoji', label: 'Search emoji' },
  { value: 'calculator', label: 'Calculator', disabled: true },
]

export const commandSettingsItems: CommandDemoItem[] = [
  { value: 'profile', label: 'Profile', shortcut: '⌘P' },
  { value: 'billing', label: 'Billing', shortcut: '⌘B' },
  { value: 'settings', label: 'Settings', shortcut: '⌘S' },
]
