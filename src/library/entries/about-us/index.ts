import type { LibraryEntry } from '../../types'
import { aboutUs1Variant } from './variant-1'
import { aboutUs2Variant } from './variant-2'
import { aboutUs3Variant } from './variant-3'

export const aboutUsEntry: LibraryEntry = {
    id: 'about-us',
    label: 'About Us',
    icon: '👥',
    section: 'Components',
    category: 'components',
    title: 'About Us',
    subtitle: 'About Us 1 and 2 — each with preview and copyable code',
    description: 'Approved about us layouts. About Us 1 and 2 with preview and copyable code.',
    tags: ['about-us', 'tailwind'],
    variants: [aboutUs1Variant, aboutUs2Variant, aboutUs3Variant],
}