import type { LibraryVariant } from '../../types'
import Card3 from '../../../components/previews/card/Card3.vue'
import Card3Source from '../../../components/previews/card/Card3.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const card3Variant: LibraryVariant = {
  id: 'card3',
  label: 'Card 3',
  description: 'Product grid cards with image overlay and add to cart.',
  codeLocation: 'src/components/previews/card/Card3.vue',
  preview: Card3,
  code: codeFromVuePreview({
    vueSource: Card3Source,
    vueUsageImport: '@/components/previews/card/Card3.vue',
    vueUsageName: 'Card3',
  }),
}
