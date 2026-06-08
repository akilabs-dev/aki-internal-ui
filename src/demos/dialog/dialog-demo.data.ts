/** Figma frame — two stacked dialog previews */
export const dialogFrameMaxWidthPx = 640
export const dialogFrameClass =
  'flex w-full flex-col gap-4 rounded-xl border border-border p-5'

export function dialogFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${dialogFrameMaxWidthPx}px` }
}

export const dialogSectionClass =
  'relative flex min-h-[320px] flex-col items-start gap-3 rounded-lg bg-muted/40 p-4'

export const dialogProfileContentClass = 'sm:max-w-[425px]'
export const dialogProfileTriggerLabel = 'Open Dialog'
export const dialogProfileTitle = 'Edit profile'
export const dialogProfileDescription =
  'Make changes to your profile here. Click save when you\'re done.'
export const dialogProfileNameLabel = 'Name'
export const dialogProfileNameDefault = 'Pedro Duarte'
export const dialogProfileUsernameLabel = 'Username'
export const dialogProfileUsernameDefault = '@peduarte'
export const dialogProfileCancelLabel = 'Cancel'
export const dialogProfileSaveLabel = 'Save changes'

export const dialogShareContentClass = 'sm:max-w-md'
export const dialogShareTriggerLabel = 'Share'
export const dialogShareTitle = 'Share link'
export const dialogShareDescription =
  'Anyone who has this link will be able to view this.'
export const dialogShareLink = 'https://ui.shadcn.com/docs/installation'
export const dialogShareCloseLabel = 'Close'
