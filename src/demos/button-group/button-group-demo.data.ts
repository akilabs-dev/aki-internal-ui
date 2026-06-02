import type { ButtonVariants } from '@/components/ui/button'
import type { Component } from 'vue'
import {
  ArchiveIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  Trash2Icon,
} from '@lucide/vue'

/** Figma main frame */
export const buttonGroupFrameWidthPx = 648
export const buttonGroupFrameBorderColor = '#E5E5E5'
/** Vertical stack gap inside main frame (Figma 10px) */
export const buttonGroupMainGapPx = 10
/** Main frame vertical padding (Figma py-2) */
export const buttonGroupMainPaddingYPx = 8
/** Inner dashed area — size rows (Figma p-14) */
export const buttonGroupInnerFramePaddingPx = 56
/** Gap between Small / Default / Large rows (Figma gap-8) */
export const buttonGroupSizeRowsGapPx = 32

export type ButtonGroupSizeRow = {
  id: string
  textSize: NonNullable<ButtonVariants['size']>
  iconSize: NonNullable<ButtonVariants['size']>
  labels: [string, string, string]
}

export const buttonGroupSizeRows: ButtonGroupSizeRow[] = [
  {
    id: 'sm',
    textSize: 'sm',
    iconSize: 'icon-sm',
    labels: ['Small', 'Button', 'Group'],
  },
  {
    id: 'default',
    textSize: 'default',
    iconSize: 'icon',
    labels: ['Default', 'Button', 'Group'],
  },
  {
    id: 'lg',
    textSize: 'lg',
    iconSize: 'icon-lg',
    labels: ['Large', 'Button', 'Group'],
  },
]

export const buttonGroupPaginationLabels = ['1', '2', '3', '4', '5'] as const

export function buttonGroupMainFrameStyle() {
  return {
    maxWidth: `${buttonGroupFrameWidthPx}px`,
    gap: `${buttonGroupMainGapPx}px`,
    paddingTop: `${buttonGroupMainPaddingYPx}px`,
    paddingBottom: `${buttonGroupMainPaddingYPx}px`,
  }
}

export function buttonGroupInnerFrameStyle() {
  return {
    padding: `${buttonGroupInnerFramePaddingPx}px`,
    borderColor: buttonGroupFrameBorderColor,
  }
}

export const buttonGroupActionLabels = ['Archive', 'Report'] as const

export const buttonGroupSnoozeLabel = 'Snooze'

export type ButtonGroupMenuItem = {
  id: string
  label: string
  icon: Component
  variant?: 'default' | 'destructive'
}

export const buttonGroupMoreMenuPrimary: ButtonGroupMenuItem[] = [
  { id: 'read', label: 'Mark as Read', icon: MailCheckIcon },
  { id: 'archive', label: 'Archive', icon: ArchiveIcon },
]

export const buttonGroupMoreMenuSecondary: ButtonGroupMenuItem[] = [
  { id: 'snooze', label: 'Snooze', icon: ClockIcon },
  { id: 'calendar', label: 'Add to Calendar', icon: CalendarPlusIcon },
  { id: 'list', label: 'Add to List', icon: ListFilterPlusIcon },
]

export const buttonGroupLabelOptions = [
  { value: 'personal', label: 'Personal' },
  { value: 'work', label: 'Work' },
  { value: 'other', label: 'Other' },
] as const

export const buttonGroupTrashMenuItem: ButtonGroupMenuItem = {
  id: 'trash',
  label: 'Trash',
  icon: Trash2Icon,
  variant: 'destructive',
}
