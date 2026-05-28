import type { LibraryEntry } from '../../types'
import { heroSection1Variant } from './variant-1'
import { heroSection2Variant } from './variant-2'
import { heroSection3Variant } from './variant-3'

export const heroSectionEntry: LibraryEntry = {
  id: 'hero-section',
  label: 'Hero Section',
  icon: '✦',
  section: 'UI Examples',
  category: 'ui-examples',
  title: 'Hero Section',
  subtitle: 'Hero Section 1, 2, and 3 — each with preview and copyable code',
  description:
    'Approved hero layouts. Hero Section 3 uses Poppins, custom primary/secondary colors, and float animations.',
  tags: ['hero', 'landing', 'tailwind', 'cta'],
  variants: [heroSection1Variant, heroSection2Variant, heroSection3Variant],
}

export { heroSection1Variant, heroSection2Variant, heroSection3Variant }
