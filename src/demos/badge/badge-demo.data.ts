import type { BadgeVariants } from '@/components/ui/badge'
import { BadgeCheckIcon } from '@lucide/vue'
import type { Component } from 'vue'

export type BadgeDemoItem = {
  id: string
  label: string
  variant?: BadgeVariants['variant']
  class?: string
  icon?: Component
}

export const badgeVariantItems: BadgeDemoItem[] = [
  { id: 'default', label: 'Badge' },
  { id: 'secondary', label: 'Secondary', variant: 'secondary' },
  { id: 'destructive', label: 'Destructive', variant: 'destructive' },
  { id: 'outline', label: 'Outline', variant: 'outline' },
]

export const badgeSpecialItems: BadgeDemoItem[] = [
  {
    id: 'verified',
    label: 'Verified',
    variant: 'secondary',
    class: 'bg-blue-500 text-white dark:bg-blue-600',
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
