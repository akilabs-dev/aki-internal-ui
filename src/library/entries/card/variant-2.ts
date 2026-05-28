import type { LibraryVariant } from '../../types'
import Card2 from '../../../components/previews/card/Card2.vue'
import Card2Source from '../../../components/previews/card/Card2.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const card2Variant: LibraryVariant = {
  id: 'card2',
  label: 'Card 2',
  description: 'Card with hover effect and icon.',
  codeLocation: 'src/components/previews/card/Card2.vue',
  preview: Card2,
  code: codeFromVuePreview({
    vueSource: Card2Source,
    vueUsageImport: '@/components/previews/card/Card2.vue',
    vueUsageName: 'Card2',
  }),
}
