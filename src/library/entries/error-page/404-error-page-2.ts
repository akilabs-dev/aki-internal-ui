import type { LibraryVariant } from '../../types'
import Error4042 from '../../../components/previews/error-page/Error404-2.vue'
import Error4042Source from '../../../components/previews/error-page/Error404-2.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const error404Variant2: LibraryVariant = {
  id: 'error404-2',
  label: '404 Error Page 2',
  description: 'Large 404 heading with secret-place copy and Previous / Home actions.',
  codeLocation: 'src/components/previews/error-page/Error404-2.vue',
  preview: Error4042,
  code: codeFromVuePreview({
    vueSource: Error4042Source,
    vueUsageImport: '@/components/previews/error-page/Error404-2.vue',
    vueUsageName: 'Error4042',
  }),
}
