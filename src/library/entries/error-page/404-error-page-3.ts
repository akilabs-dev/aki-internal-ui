import type { LibraryVariant } from '../../types'
import Error4043 from '../../../components/previews/error-page/Error404-3.vue'
import Error4043Source from '../../../components/previews/error-page/Error404-3.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const error404Variant3: LibraryVariant = {
  id: 'error404-3',
  label: '404 Error Page 3',
  description: 'Full-screen nature background with frosted card and indigo CTA.',
  codeLocation: 'src/components/previews/error-page/Error404-3.vue',
  preview: Error4043,
  previewLayout: 'page',
  code: codeFromVuePreview({
    vueSource: Error4043Source,
    vueUsageImport: '@/components/previews/error-page/Error404-3.vue',
    vueUsageName: 'Error4043',
  }),
}
