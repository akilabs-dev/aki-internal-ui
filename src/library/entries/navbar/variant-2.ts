import type { LibraryVariant } from '../../types'
import Navbar2 from '../../../components/previews/navbar/Navbar2.vue'
import Navbar2Source from '../../../components/previews/navbar/Navbar2.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const navbar2Variant: LibraryVariant = {
  id: 'navbar2',
  label: 'Navbar 2',
  description: 'Green grocery navbar — logo, search, promo, cart, and avatar.',
  codeLocation: 'src/components/previews/navbar/Navbar2.vue',
  preview: Navbar2,
  code: codeFromVuePreview({
    vueSource: Navbar2Source,
    vueUsageImport: '@/components/previews/navbar/Navbar2.vue',
    vueUsageName: 'Navbar2',
    css: '/* Navbar 2 — bg-green-900, accent text-yellow-300 */',
  }),
}
