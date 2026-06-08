import {
  dialogProfileCancelLabel,
  dialogProfileDescription,
  dialogProfileNameDefault,
  dialogProfileNameLabel,
  dialogProfileSaveLabel,
  dialogProfileTitle,
  dialogProfileUsernameDefault,
  dialogProfileUsernameLabel,
} from '@/demos/dialog/dialog-demo.data'

/** Figma frame — two stacked drawer previews */
export const drawerFrameMaxWidthPx = 640
export const drawerFrameClass =
  'flex w-full flex-col gap-4 rounded-xl border border-border p-5'

export function drawerFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${drawerFrameMaxWidthPx}px` }
}

export const drawerSectionClass =
  'relative flex min-h-[320px] flex-col items-start gap-3 rounded-lg bg-muted/40 p-4'

export const moveGoalTriggerLabel = 'Open Drawer'
export const moveGoalTitle = 'Move Goal'
export const moveGoalDescription = 'Set your daily activity goal.'
export const moveGoalUnitLabel = 'Calories/day'
export const moveGoalSubmitLabel = 'Submit'
export const moveGoalCancelLabel = 'Cancel'
export const moveGoalMin = 200
export const moveGoalMax = 400
export const moveGoalStep = 10
export const moveGoalDefault = 350

export const moveGoalChartData = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
] as const

export const profileTriggerLabel = 'Open Drawer'
export const profileContentClass = 'sm:max-w-md'

export {
  dialogProfileTitle as profileTitle,
  dialogProfileDescription as profileDescription,
  dialogProfileNameLabel as profileNameLabel,
  dialogProfileNameDefault as profileNameDefault,
  dialogProfileUsernameLabel as profileUsernameLabel,
  dialogProfileUsernameDefault as profileUsernameDefault,
  dialogProfileSaveLabel as profileSaveLabel,
  dialogProfileCancelLabel as profileCancelLabel,
}
