import type { LibraryVariant } from '../../types'
import Dashboard2 from '../../../components/previews/dashboard/dashboard2.vue'
import Dashboard2Source from '../../../components/previews/dashboard/dashboard2.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const dashboard2Variant: LibraryVariant = {
  id: 'dashboard2',
  label: 'Dashboard 2',
  description: 'Admin Pro sidebar with expandable submenus.',
  codeLocation: 'src/components/previews/dashboard/dashboard2.vue',
  preview: Dashboard2,
  previewLayout: 'page',
  code: codeFromVuePreview({
    vueSource: Dashboard2Source,
    vueUsageImport: '@/components/previews/dashboard/dashboard2.vue',
    vueUsageName: 'Dashboard2',
  }),
}
