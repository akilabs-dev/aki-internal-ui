/** Figma frame — stacked dropdown menu previews */
export const dropdownMenuFrameMaxWidthPx = 640
export const dropdownMenuFrameClass =
  'flex w-full flex-col gap-4 rounded-xl border border-border p-5'

export function dropdownMenuFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${dropdownMenuFrameMaxWidthPx}px` }
}

export const dropdownMenuSectionClass =
  'relative flex min-h-[280px] flex-col items-start gap-3 overflow-visible rounded-lg bg-muted/40 p-4'

export const dropdownMenuContentClass = 'w-56'

export const dropdownMenuTriggerLabel = 'Open'

export const accountMenuLabel = 'My Account'
export const accountMenuItems = {
  profile: { label: 'Profile', shortcut: '⇧⌘P' },
  billing: { label: 'Billing', shortcut: '⌘B' },
  settings: { label: 'Settings', shortcut: '⌘S' },
  keyboardShortcuts: { label: 'Keyboard shortcuts', shortcut: '⌘K' },
  team: { label: 'Team' },
  inviteUsers: { label: 'Invite users' },
  newTeam: { label: 'New Team', shortcut: '⌘+T' },
  github: { label: 'GitHub' },
  support: { label: 'Support' },
  api: { label: 'API' },
  logOut: { label: 'Log out', shortcut: '⇧⌘Q' },
} as const

export const inviteSubmenuItems = ['Email', 'Message', 'More...'] as const

export const appearanceMenuLabel = 'Appearance'
export const appearanceMenuItems = {
  statusBar: { label: 'Status Bar', defaultChecked: true },
  activityBar: { label: 'Activity Bar', defaultChecked: false },
  panel: { label: 'Panel', defaultChecked: false },
} as const

export const positionMenuLabel = 'Panel Position'
export const positionMenuOptions = [
  { value: 'top', label: 'Top' },
  { value: 'bottom', label: 'Bottom' },
  { value: 'right', label: 'Right' },
] as const

export const positionMenuDefault = 'bottom'
