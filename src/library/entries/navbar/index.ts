import type { LibraryEntry } from '../../types'
import { navbar1Variant } from './variant-1'
import { navbar2Variant } from './variant-2'

export const navbarEntry: LibraryEntry = {
  id: 'navbar',
  label: 'Navbar',
  icon: '▤',
  section: 'Components',
  category: 'components',
  title: 'Navbar',
  subtitle: 'Navbar 1 and Navbar 2 — each with preview and copyable code',
  description:
    'Approved navigation patterns. Add more variants in entries/navbar/variant-3.ts and register here.',
  tags: ['navigation', 'header', 'tailwind'],
  variants: [navbar1Variant, navbar2Variant],
}

export { navbar1Variant, navbar2Variant }
