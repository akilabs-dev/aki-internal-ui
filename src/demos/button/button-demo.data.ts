import type { ButtonVariants } from '@/components/ui/button'

/** Figma frame (grid container) */
export const buttonFrameWidthPx = 410
export const buttonFramePaddingPx = 30
export const buttonFrameBorderColor = '#E5E5E5'
export const buttonGridColumns = 2
/** Row + column gap (Figma 16px) */
export const buttonGridGapPx = 16
/** Gap between text + icon in one size row cell */
export const buttonRowPairGapPx = 8

/** Inner padding for grid cells */
export const buttonCellPaddingPx = 8

export type ButtonDemoRowKind =
  | 'size-pair'
  | 'label'
  | 'destructive'
  | 'link'
  | 'chevron-icon'
  | 'new-branch'
  | 'rounded'
  | 'spinner'
  | 'button-group'

export type ButtonDemoRow = {
  id: string
  kind: ButtonDemoRowKind
  label?: string
  variant?: NonNullable<ButtonVariants['variant']>
  textSize?: NonNullable<ButtonVariants['size']>
  iconSize?: NonNullable<ButtonVariants['size']>
}

export const buttonDemoRows: ButtonDemoRow[] = [
  {
    id: 'small',
    kind: 'size-pair',
    label: 'Small',
    variant: 'outline',
    textSize: 'sm',
    iconSize: 'icon-sm',
  },
  {
    id: 'default-size',
    kind: 'size-pair',
    label: 'Default',
    variant: 'outline',
    textSize: 'default',
    iconSize: 'icon',
  },
  {
    id: 'large',
    kind: 'size-pair',
    label: 'Large',
    variant: 'outline',
    textSize: 'lg',
    iconSize: 'icon-lg',
  },
  {
    id: 'primary',
    kind: 'label',
    label: 'Button',
    variant: 'default',
    textSize: 'default',
  },
  {
    id: 'outline',
    kind: 'label',
    label: 'Outline',
    variant: 'outline',
    textSize: 'default',
  },
  {
    id: 'secondary',
    kind: 'label',
    label: 'Secondary',
    variant: 'secondary',
    textSize: 'default',
  },
  {
    id: 'ghost',
    kind: 'label',
    label: 'Ghost',
    variant: 'ghost',
    textSize: 'default',
  },
  { id: 'destructive', kind: 'destructive' },
  { id: 'link', kind: 'link' },
  { id: 'chevron-icon', kind: 'chevron-icon' },
  { id: 'new-branch', kind: 'new-branch' },
  { id: 'rounded', kind: 'rounded' },
  { id: 'spinner', kind: 'spinner' },
  { id: 'button-group', kind: 'button-group' },
]

export const buttonGridRows = buttonDemoRows.length
export const buttonGridCellCount = buttonGridRows * buttonGridColumns

export function buttonFrameStyle() {
  return {
    maxWidth: `${buttonFrameWidthPx}px`,
    padding: `${buttonFramePaddingPx}px`,
    gap: `${buttonGridGapPx}px`,
    borderColor: buttonFrameBorderColor,
  }
}

export function buttonCellStyle() {
  return {
    padding: `${buttonCellPaddingPx}px`,
  }
}
