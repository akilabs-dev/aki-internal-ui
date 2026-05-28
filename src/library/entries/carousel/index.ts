import type { LibraryEntry } from '../../types'
import { carousel1Variant } from './variant-1'
import { carousel2Variant } from './variant-2'

export const carouselEntry: LibraryEntry = {
  id: 'carousel',
  label: 'Carousel',
  icon: '🎥',
  section: 'Components',
  category: 'components',
  title: 'Carousel',
  subtitle: 'Carousel 1 and 2 — preview and copyable code',
  description: 'Fade carousel and horizontal scroll carousel with photo slides.',
  tags: ['carousel', 'tailwind'],
  variants: [carousel1Variant, carousel2Variant],
}

export { carousel1Variant, carousel2Variant }
