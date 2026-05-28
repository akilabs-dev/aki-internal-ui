import type { LibraryVariant } from '../../types'
import Error404 from '../../../components/previews/error-page/Error404.vue'
import Error404Source from '../../../components/previews/error-page/Error404.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const error404Variant: LibraryVariant = {
  id: '404-error-page',
  label: '404 Error Page',
  description: 'Full-screen 404 page with centered message and back-to-home CTA.',
  codeLocation: 'src/components/previews/error-page/Error404.vue',
  preview: Error404,
  previewLayout: 'page',
  code: codeFromVuePreview({
    vueSource: Error404Source,
    vueUsageImport: '@/components/previews/error-page/Error404.vue',
    vueUsageName: 'Error404',
    usageHtmlNote: '<!-- Paste HTML tab into your 404 route or not-found page -->',
  }),
}
