import type { LibraryVariant } from '../../types'
import Skeleton4 from '../../../components/previews/skeleton/skeleton-4.vue'
import Skeleton4Source from '../../../components/previews/skeleton/skeleton-4.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const skeleton4Variant: LibraryVariant = {
  id: 'skeleton-4',
  label: 'Skeleton 4',
  description: 'Dark-mode friendly grid of card skeleton placeholders.',
  codeLocation: 'src/components/previews/skeleton/skeleton-4.vue',
  preview: Skeleton4,
  code: codeFromVuePreview({
    vueSource: Skeleton4Source,
    vueUsageImport: '@/components/previews/skeleton/skeleton-4.vue',
    vueUsageName: 'Skeleton4',
  }),
}
