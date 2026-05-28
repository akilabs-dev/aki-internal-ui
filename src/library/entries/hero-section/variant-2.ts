import type { LibraryVariant } from '../../types'
import HeroSection2 from '../../../components/previews/hero-section/HeroSection2.vue'
import HeroSection2Source from '../../../components/previews/hero-section/HeroSection2.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const heroSection2Variant: LibraryVariant = {
  id: 'hero-section2',
  label: 'Hero Section 2',
  description: 'Financial landing hero — two-column grid, blue CTA, side image.',
  codeLocation: 'src/components/previews/hero-section/HeroSection2.vue',
  preview: HeroSection2,
  code: codeFromVuePreview({
    vueSource: HeroSection2Source,
    vueUsageImport: '@/components/previews/hero-section/HeroSection2.vue',
    vueUsageName: 'HeroSection2',
    css: '/* Hero 2 — blue-900 heading, blue-500 CTA, lg:grid-cols-2 */',
    usageHtmlNote: '<!-- Paste HTML tab below your navbar -->',
  }),
}
