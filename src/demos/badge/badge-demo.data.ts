import type { BadgeVariants } from '@/components/ui/badge'
import { BadgeCheckIcon } from '@lucide/vue'
import type { Component } from 'vue'

export const badgeGridWidthPx = 396
export const badgeGridGapPx = 16

export type BadgeDemoItem = {
  id: string
  label: string
  variant?: BadgeVariants['variant']
  class?: string
  icon?: Component
}

/** Figma grid order: row 1 then row 2 (2×4) */
export const badgeDemoItems: BadgeDemoItem[] = [
  { id: 'default', label: 'Badge' },
  { id: 'secondary', label: 'Secondary', variant: 'secondary' },
  { id: 'destructive', label: 'Destructive', variant: 'destructive' },
  { id: 'outline', label: 'Outline', variant: 'outline' },
  {
    id: 'verified',
    label: 'Verified',
    icon: BadgeCheckIcon,
  },
  {
    id: 'count-default',
    label: '8',
    class: 'h-5 min-w-5 rounded-full px-1 font-mono tabular-nums',
  },
  {
    id: 'count-destructive',
    label: '99',
    variant: 'destructive',
    class: 'h-5 min-w-5 rounded-full px-1 font-mono tabular-nums',
  },
  {
    id: 'count-outline',
    label: '20+',
    variant: 'outline',
    class: 'h-5 min-w-5 rounded-full px-1 font-mono tabular-nums',
  },
]
