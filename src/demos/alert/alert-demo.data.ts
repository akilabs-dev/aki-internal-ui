import type { AlertVariants } from '@/components/ui/alert'
import { Terminal } from '@lucide/vue'
import type { Component } from 'vue'

export type AlertDemoItem = {
  id: string
  title: string
  description: string
  variant?: AlertVariants['variant']
  icon?: Component
}

export const alertDemoItems: AlertDemoItem[] = [
  {
    id: 'heads-up',
    title: 'Heads up!',
    description: 'You can add components and view both the Vue source and rendered HTML.',
    variant: 'default',
    icon: Terminal,
  },
  {
    id: 'destructive',
    title: 'Something went wrong',
    description: 'This is a destructive alert style.',
    variant: 'destructive',
  },
]

