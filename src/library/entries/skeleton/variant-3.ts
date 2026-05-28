import type { LibraryVariant } from '../../types'
import Skeleton3 from '../../../components/previews/skeleton/skeleton-3.vue'
import Skeleton3Source from '../../../components/previews/skeleton/skeleton-3.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const skeleton3Variant: LibraryVariant = {
  id: 'skeleton-1',
  label: 'Skeleton 1',
  description: 'Page layout skeleton with header bar and content lines.',
  codeLocation: 'src/components/previews/skeleton/skeleton-3.vue',
  preview: Skeleton3,
  code: codeFromVuePreview({
    vueSource: Skeleton3Source,
    vueUsageImport: '@/components/previews/skeleton/skeleton-3.vue',
    vueUsageName: 'Skeleton3',
  }),
}
