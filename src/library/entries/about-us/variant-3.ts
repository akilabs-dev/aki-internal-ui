import type { LibraryVariant } from '../../types'
import AboutUs3 from '../../../components/previews/about-us/about-us3.vue'
import AboutUs3Source from '../../../components/previews/about-us/about-us3.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const aboutUs3Variant: LibraryVariant = {
  id: 'about-us3',
  label: 'About Us 3',
  description: 'Why Us grid with hover scale and icon images.',
  codeLocation: 'src/components/previews/about-us/about-us3.vue',
  preview: AboutUs3,
  code: codeFromVuePreview({
    vueSource: AboutUs3Source,
    vueUsageImport: '@/components/previews/about-us/about-us3.vue',
    vueUsageName: 'AboutUs3',
  }),
}
