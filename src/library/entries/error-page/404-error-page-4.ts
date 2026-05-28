import type { LibraryVariant } from '../../types'
import Error4044 from '../../../components/previews/error-page/Error404-4.vue'
import Error4044Source from '../../../components/previews/error-page/Error404-4.vue?raw'
import { codeFromVuePreview } from '../../utils'
import { error404AnimationsCss } from './error404-animations-css'

export const error404Variant4: LibraryVariant = {
  id: 'error404-4',
  label: '404 Error Page 4',
  description: 'Gradient glass card with fade-in, bounce-in 404, and wiggle emoji.',
  codeLocation: 'src/components/previews/error-page/Error404-4.vue',
  preview: Error4044,
  previewLayout: 'page',
  code: codeFromVuePreview({
    vueSource: Error4044Source,
    vueUsageImport: '@/components/previews/error-page/Error404-4.vue',
    vueUsageName: 'Error4044',
    extraCss: error404AnimationsCss,
    usageHtmlNote: `<!-- 1. Add CSS tab animations to global.css or a <style> block -->
<!-- 2. Paste HTML tab into your 404 page -->`,
  }),
}
