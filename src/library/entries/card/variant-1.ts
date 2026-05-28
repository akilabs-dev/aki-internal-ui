import type { LibraryVariant } from '../../types'
import Card1 from '../../../components/previews/card/Card1.vue'
import Card1Source from '../../../components/previews/card/Card1.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const card1Variant: LibraryVariant = {
  id: 'card1',
  label: 'Card',
  description: 'Image card with title, body text, and hashtag tags (Tailwind UI pattern).',
  codeLocation: 'src/components/previews/card/Card1.vue',
  preview: Card1,
  code: codeFromVuePreview({
    vueSource: Card1Source,
    vueUsageImport: '@/components/previews/card/Card1.vue',
    vueUsageName: 'Card1',
  }),
}
