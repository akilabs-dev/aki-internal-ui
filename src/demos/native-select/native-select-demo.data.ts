/** Figma main frame — vertical stack */
export const nativeSelectFrameMaxWidthPx = 562

export const nativeSelectFrameClass =
  'mx-auto flex w-full flex-col rounded-3xl border border-[#E5E5E5] bg-white p-14'

export function nativeSelectFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${nativeSelectFrameMaxWidthPx}px` }
}

export const nativeSelectRowClass = 'flex w-full items-center justify-center py-10 first:pt-0 last:pb-0'

/** Horizontal rule between native select rows (Figma) */
export const nativeSelectSeparatorClass = 'shrink-0 h-px w-full bg-[#E5E5E5]'

export const nativeSelectSeparatorHtml =
  `<div data-slot="separator" class="${nativeSelectSeparatorClass}" role="none"></div>`

export const nativeSelectDefaults = {
  status: 'todo',
  department: '',
} as const

export const statusOptions = [
  { value: '', label: 'Select status' },
  { value: 'todo', label: 'Todo' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
  { value: 'cancelled', label: 'Cancelled' },
] as const

export const priorityOptions = [
  { value: '', label: 'Select priority' },
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'critical', label: 'Critical' },
] as const

export const roleOptions = [
  { value: '', label: 'Select role' },
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
  { value: 'guest', label: 'Guest' },
] as const

export const departmentGroups = [
  {
    label: 'Engineering',
    options: [
      { value: 'frontend', label: 'Frontend' },
      { value: 'backend', label: 'Backend' },
      { value: 'devops', label: 'DevOps' },
    ],
  },
  {
    label: 'Sales',
    options: [
      { value: 'sales-rep', label: 'Sales Rep' },
      { value: 'account-manager', label: 'Account Manager' },
      { value: 'sales-director', label: 'Sales Director' },
    ],
  },
  {
    label: 'Operations',
    options: [
      { value: 'support', label: 'Customer Support' },
      { value: 'product-manager', label: 'Product Manager' },
      { value: 'ops-manager', label: 'Operations Manager' },
    ],
  },
] as const
