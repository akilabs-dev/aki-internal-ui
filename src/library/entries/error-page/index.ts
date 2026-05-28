import type { LibraryEntry } from '../../types'
import { error404Variant } from './404-error-page'
import { error404Variant2 } from './404-error-page-2'
import { error404Variant3 } from './404-error-page-3'
import { error404Variant4 } from './404-error-page-4'

export const errorPageEntry: LibraryEntry = {
  id: 'error-page',
  label: 'Error Page',
  icon: '⚠️',
  section: 'Components',
  category: 'components',
  title: 'Error Page',
  subtitle: '404 layouts — preview and copyable code',
  description:
    '404 error pages: full-screen layouts, dual CTAs, background image, and animated gradient card.',
  tags: ['404', 'error', 'tailwind', 'page'],
  variants: [error404Variant, error404Variant2, error404Variant3, error404Variant4],
}

export { error404Variant, error404Variant2, error404Variant3, error404Variant4 }
