import type { LibraryEntry } from '../../types'
import { dashboard1Variant } from './dashboard1'
import { dashboard2Variant } from './dashboard2'

export const dashboardEntry: LibraryEntry = {
  id: 'dashboard',
  label: 'Dashboard',
  icon: '📊',
  section: 'Components',
  category: 'components',
  title: 'Dashboard',
  subtitle: 'Dashboard 1 and 2 — each with preview and copyable code',
  description:
    'Approved admin layouts. Dashboard 1 (Daystar), Dashboard 2 (Admin Pro with submenus).',
  tags: ['dashboard', 'tailwind'],
  variants: [dashboard1Variant, dashboard2Variant],
}

export { dashboard1Variant, dashboard2Variant }
