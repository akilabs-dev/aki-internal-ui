import type { LibraryVariant } from '../../types'
import HeroSection1 from '../../../components/previews/hero-section/HeroSection1.vue'
import HeroSection1Source from '../../../components/previews/hero-section/HeroSection1.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const heroSection1Variant: LibraryVariant = {
  id: 'hero-section1',
  label: 'Hero Section 1',
  description: 'Violet gradient hero with dual CTAs and logo visual.',
  codeLocation: 'src/components/previews/hero-section/HeroSection1.vue',
  preview: HeroSection1,
  code: codeFromVuePreview({
    vueSource: HeroSection1Source,
    vueUsageImport: '@/components/previews/hero-section/HeroSection1.vue',
    vueUsageName: 'HeroSection1',
    css: '/* Hero 1 — Tailwind gradient + utilities */',
    usageHtmlNote: '<!-- Paste HTML tab below your navbar -->',
  }),
}
