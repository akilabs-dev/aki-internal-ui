/** Figma preview frame — Fill ~1191px, dashed border, muted canvas */
export const sheetFrameMaxWidthPx = 1191

export const sheetFrameMinHeightPx = 400

export const sheetFrameClass =
  'relative mx-auto flex w-full flex-col items-start gap-4 overflow-hidden rounded-xl border border-dashed border-[#E5E5E5] bg-muted/40 p-5'

export function sheetFrameStyle(): { maxWidth: string; minHeight: string } {
  return {
    maxWidth: `${sheetFrameMaxWidthPx}px`,
    minHeight: `${sheetFrameMinHeightPx}px`,
  }
}

export const sheetTriggerLabel = 'Open'

export const sheetTitle = 'Edit profile'

export const sheetDescription =
  'Make changes to your profile here. Click save when you\'re done.'

export const sheetNameLabel = 'Name'

export const sheetNameId = 'sheet-demo-name'

export const sheetNameDefault = 'Pedro Duarte'

export const sheetUsernameLabel = 'Username'

export const sheetUsernameId = 'sheet-demo-username'

export const sheetUsernameDefault = '@peduarte'

export const sheetSaveLabel = 'Save changes'

export const sheetCloseLabel = 'Close'

export const sheetFormClass = 'grid flex-1 auto-rows-min gap-6 px-4'

export const sheetFieldGroupClass = 'grid gap-3'

/** Shared Tailwind — mirror @/components/ui/sheet + button + input + label */
const buttonBase =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

export const sheetTriggerButtonClass =
  `${buttonBase} border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2`

export const sheetPrimaryButtonClass =
  `${buttonBase} bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2`

export const sheetOutlineButtonClass =
  `${buttonBase} border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2`

export const sheetOverlayClass =
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80'

export const sheetContentClass =
  'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm'

export const sheetHeaderClass = 'flex flex-col gap-1.5 p-4'

export const sheetTitleClass = 'text-foreground font-semibold'

export const sheetDescriptionClass = 'text-muted-foreground text-sm'

export const sheetFooterClass = 'mt-auto flex flex-col gap-2 p-4'

export const sheetLabelClass =
  'flex items-center gap-2 text-sm leading-none font-medium select-none'

export const sheetInputClass =
  'border-input placeholder:text-muted-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

export const sheetCloseIconButtonClass =
  'ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none'

export const sheetCloseIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`
