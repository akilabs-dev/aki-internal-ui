import type { LibraryVariant } from '../../types'
import AboutUs2 from '../../../components/previews/about-us/about-us2.vue'
import AboutUs2Source from '../../../components/previews/about-us/about-us2.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const aboutUs2Variant: LibraryVariant = {
  id: 'about-us2',
  label: 'About Us 2',
  description: 'Fintech features grid with icon cards and “Why choose us” header.',
  codeLocation: 'src/components/previews/about-us/about-us2.vue',
  preview: AboutUs2,
  code: codeFromVuePreview({
    vueSource: AboutUs2Source,
    vueUsageImport: '@/components/previews/about-us/about-us2.vue',
    vueUsageName: 'AboutUs2',
  }),
}
