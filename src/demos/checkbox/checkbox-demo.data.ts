/** Figma main frame — vertical stack */
export const checkboxFrameMaxWidthPx = 593
export const checkboxFrameClass =
  'flex w-full flex-col rounded-3xl border border-border bg-background p-14 gap-y-10'

export function checkboxFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${checkboxFrameMaxWidthPx}px` }
}

/** Horizontal rule between checkbox sections (Figma) */
export const checkboxDemoSeparatorClass =
  'bg-border shrink-0 h-px w-full'

export const checkboxDemoSeparatorHtml = `<div data-slot="separator" class="${checkboxDemoSeparatorClass}" role="none"></div>`

/** Card container — unchecked */
export const checkboxCardLabelBaseClass =
  'hover:bg-accent/50 flex items-start gap-3 rounded-lg border border-border bg-background p-3 cursor-pointer transition-colors'

/** Card container — checked (black border + muted fill) */
export const checkboxCardLabelCheckedClass = 'border-foreground bg-muted'

/** Card checkbox — circular, black when checked */
export const checkboxCardControlClass =
  'rounded-full data-[state=checked]:border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background'

/** Dashed group around card examples (Vue + HTML) */
export const checkboxCardGroupClass =
  'flex flex-col gap-4 border border-dashed border-gray-300 rounded-lg p-6'

export type CheckboxDemoRow =
  | {
      kind: 'simple'
      id: string
      label: string
      defaultChecked?: boolean
    }
  | {
      kind: 'description'
      id: string
      label: string
      description: string
      defaultChecked?: boolean
    }
  | {
      kind: 'disabled'
      id: string
      label: string
    }
  | {
      kind: 'card'
      id: string
      title: string
      description: string
      defaultChecked?: boolean
    }

export const checkboxDemoRows: CheckboxDemoRow[] = [
  {
    kind: 'simple',
    id: 'terms',
    label: 'Accept terms and conditions',
    defaultChecked: false,
  },
  {
    kind: 'description',
    id: 'terms-2',
    label: 'Accept terms and conditions',
    description:
      'By clicking this checkbox, you agree to the terms and conditions.',
    defaultChecked: false,
  },
  {
    kind: 'disabled',
    id: 'toggle',
    label: 'Enable notifications',
  },
  {
    kind: 'card',
    id: 'toggle-2',
    title: 'Enable notifications',
    description:
      'You can enable or disable notifications at any time.',
    defaultChecked: false,
  },
  {
    kind: 'card',
    id: 'toggle-3',
    title: 'Enable notifications',
    description:
      'You can enable or disable notifications at any time.',
    defaultChecked: true,
  },
]

/** Alpine state keys (camelCase) mapped from checkbox ids */
export const checkboxAlpineStateKeys = {
  terms: 'terms',
  'terms-2': 'terms2',
  'toggle-2': 'toggle2',
  'toggle-3': 'toggle3',
} as const

export type CheckboxAlpineStateKey =
  (typeof checkboxAlpineStateKeys)[keyof typeof checkboxAlpineStateKeys]

export function getCheckboxAlpineKey(id: string): CheckboxAlpineStateKey | null {
  return (checkboxAlpineStateKeys as Record<string, CheckboxAlpineStateKey>)[id] ?? null
}

export function getDefaultCheckboxState(): Record<CheckboxAlpineStateKey, boolean> {
  const state = {} as Record<CheckboxAlpineStateKey, boolean>
  for (const row of checkboxDemoRows) {
    if (row.kind === 'disabled') continue
    const key = getCheckboxAlpineKey(row.id)
    if (!key) continue
    state[key] = row.defaultChecked ?? false
  }
  return state
}
