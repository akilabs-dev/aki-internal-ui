import type { LibraryEntry } from '../../types'
import { skeleton3Variant } from './variant-3'
import { skeleton4Variant } from './variant-4'

export const skeletonEntry: LibraryEntry = {
  id: 'skeleton',
  label: 'Skeleton',
  icon: '💀',
  section: 'Components',
  category: 'components',
  title: 'Skeleton',
  subtitle: 'Skeleton loading placeholders — preview and copyable code',
  description: 'Pulse skeleton cards for loading states.',
  tags: ['skeleton', 'tailwind', 'loading'],
  variants: [skeleton3Variant, skeleton4Variant],
}

export { skeleton3Variant, skeleton4Variant }
