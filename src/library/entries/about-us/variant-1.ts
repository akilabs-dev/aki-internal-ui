import type { LibraryVariant } from '../../types'
import AboutUs1 from '../../../components/previews/about-us/about-us1.vue'
import AboutUs1Source from '../../../components/previews/about-us/about-us1.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const aboutUs1Variant: LibraryVariant = {
  id: 'about-us1',
  label: 'About Us 1',
  description: 'Two-column about section with image and company copy.',
  codeLocation: 'src/components/previews/about-us/about-us1.vue',
  preview: AboutUs1,
  code: codeFromVuePreview({
    vueSource: AboutUs1Source,
    vueUsageImport: '@/components/previews/about-us/about-us1.vue',
    vueUsageName: 'AboutUs1',
  }),
}
