export type SelectOption = {
  value: string
  label: string
}

export type SelectGroup = {
  label: string
  options: readonly SelectOption[]
}

/** Figma frame — two rows (fruit + timezone), closed | open pairs */
export const selectFrameMaxWidthPx = 752

export const selectFrameClass =
  'mx-auto flex w-full flex-col items-center gap-6 rounded-3xl border border-[#E5E5E5] bg-white px-10 py-10'

export function selectFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${selectFrameMaxWidthPx}px` }
}

export const selectRowClass =
  'flex w-full flex-row flex-wrap items-start justify-center gap-4'

export const selectPreviewClass = 'pointer-events-none select-none'

export const selectFruitPlaceholder = 'Select a fruit'

export const selectFruitTriggerClass = 'w-[180px]'

export const selectFruitPreviewValue = 'apple'

export const fruitGroup: SelectGroup = {
  label: 'Fruits',
  options: [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'pineapple', label: 'Pineapple' },
  ],
}

export const selectTimezonePlaceholder = 'Select a timezone'

export const selectTimezoneTriggerClass = 'w-[280px]'

export const selectTimezonePreviewValue = 'est'

export const timezoneGroups: readonly SelectGroup[] = [
  {
    label: 'North America',
    options: [
      { value: 'est', label: 'Eastern Standard Time (EST)' },
      { value: 'cst', label: 'Central Standard Time (CST)' },
      { value: 'mst', label: 'Mountain Standard Time (MST)' },
      { value: 'pst', label: 'Pacific Standard Time (PST)' },
      { value: 'akst', label: 'Alaska Standard Time (AKST)' },
      { value: 'hst', label: 'Hawaii Standard Time (HST)' },
    ],
  },
  {
    label: 'Europe & Africa',
    options: [
      { value: 'gmt', label: 'Greenwich Mean Time (GMT)' },
      { value: 'cet', label: 'Central European Time (CET)' },
      { value: 'eet', label: 'Eastern European Time (EET)' },
      { value: 'west', label: 'Western European Summer Time (WEST)' },
      { value: 'cat', label: 'Central Africa Time (CAT)' },
      { value: 'eat', label: 'East Africa Time (EAT)' },
    ],
  },
  {
    label: 'Asia',
    options: [
      { value: 'msk', label: 'Moscow Time (MSK)' },
      { value: 'ist', label: 'India Standard Time (IST)' },
      { value: 'cst_china', label: 'China Standard Time (CST)' },
      { value: 'jst', label: 'Japan Standard Time (JST)' },
      { value: 'kst', label: 'Korea Standard Time (KST)' },
      { value: 'ist_indonesia', label: 'Indonesia Central Standard Time (WITA)' },
    ],
  },
  {
    label: 'Australia & Pacific',
    options: [
      { value: 'awst', label: 'Australian Western Standard Time (AWST)' },
      { value: 'acst', label: 'Australian Central Standard Time (ACST)' },
      { value: 'aest', label: 'Australian Eastern Standard Time (AEST)' },
      { value: 'nzst', label: 'New Zealand Standard Time (NZST)' },
      { value: 'fjt', label: 'Fiji Time (FJT)' },
    ],
  },
  {
    label: 'South America',
    options: [
      { value: 'art', label: 'Argentina Time (ART)' },
      { value: 'bot', label: 'Bolivia Time (BOT)' },
      { value: 'brt', label: 'Brasilia Time (BRT)' },
      { value: 'clt', label: 'Chile Standard Time (CLT)' },
    ],
  },
]

export const selectSectionSeparatorClass = 'bg-border w-full shrink-0 h-px'

/** Shared Tailwind — mirror @/components/ui/select */
export const selectTriggerClass =
  'border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*=\'text-\'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 h-9 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4'

export const selectValuePlaceholderClass = 'text-muted-foreground'

export const selectContentClass =
  'bg-popover text-popover-foreground relative z-50 max-h-96 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md data-[side=bottom]:translate-y-1'

export const selectViewportClass = 'p-1'

export const selectLabelClass = 'text-muted-foreground px-2 py-1.5 text-xs'

export const selectItemClass =
  'focus:bg-accent focus:text-accent-foreground [&_svg:not([class*=\'text-\'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4'

export const selectItemIndicatorClass = 'absolute right-2 flex size-3.5 items-center justify-center'

export const selectScrollButtonClass =
  'flex cursor-default items-center justify-center py-1'

export const selectChevronDownSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 opacity-50"><path d="m6 9 6 6 6-6"></path></svg>`

export const selectCheckSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M20 6 9 17l-5-5"></path></svg>`

export function findSelectLabel(
  groups: readonly SelectGroup[],
  value: string,
): string | undefined {
  for (const group of groups) {
    const match = group.options.find((option) => option.value === value)
    if (match) return match.label
  }
  return undefined
}

export function findFruitLabel(value: string): string | undefined {
  return fruitGroup.options.find((option) => option.value === value)?.label
}

export function findTimezoneLabel(value: string): string | undefined {
  return findSelectLabel(timezoneGroups, value)
}
