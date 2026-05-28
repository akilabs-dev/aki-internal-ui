import type { LibraryEntry } from '../../types'
import { card1Variant } from './variant-1'
import { card2Variant } from './variant-2'
import { card3Variant } from './variant-3'

export const cardEntry: LibraryEntry = {
  id: 'card',
  label: 'Card',
  icon: '🗂️',
  section: 'Components',
  category: 'components',
  title: 'Card',
  subtitle: 'Image card with tags — preview and copyable code',
  description: 'Approved card layout with image, title, description, and pill tags.',
  tags: ['card', 'tailwind', 'ui'],
  variants: [card1Variant, card2Variant, card3Variant],
}

export { card1Variant, card2Variant ,card3Variant}
