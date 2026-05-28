import type { LibraryVariant } from '../../types'
import Dashboard1 from '../../../components/previews/dashboard/dashboard1.vue'
import Dashboard1Source from '../../../components/previews/dashboard/dashboard1.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const dashboard1Variant: LibraryVariant = {
  id: 'dashboard1',
  label: 'Dashboard 1',
  description: 'Daystar admin layout with sidebar navigation.',
  codeLocation: 'src/components/previews/dashboard/dashboard1.vue',
  preview: Dashboard1,
  previewLayout: 'page',
  code: codeFromVuePreview({
    vueSource: Dashboard1Source,
    vueUsageImport: '@/components/previews/dashboard/dashboard1.vue',
    vueUsageName: 'Dashboard1',
  }),
}
