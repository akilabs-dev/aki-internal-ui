import type { Component } from 'vue'
import {
  ArchiveIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  Trash2Icon,
} from '@lucide/vue'

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
