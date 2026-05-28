import type { LibraryVariant } from '../../types'
import Navbar1 from '../../../components/previews/navbar/Navbar1.vue'
import Navbar1Source from '../../../components/previews/navbar/Navbar1.vue?raw'
import { codeFromVuePreview } from '../../utils'

const navbar1MenuScript = `<script>
  document.getElementById("hamburger").onclick = function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };
</script>`

export const navbar1Variant: LibraryVariant = {
  id: 'navbar1',
  label: 'Navbar 1',
  description: 'Teal responsive navbar with hamburger menu (TailwindFlex).',
  codeLocation: 'src/components/previews/navbar/Navbar1.vue',
  preview: Navbar1,
  code: codeFromVuePreview({
    vueSource: Navbar1Source,
    vueUsageImport: '@/components/previews/navbar/Navbar1.vue',
    vueUsageName: 'Navbar1',
    css: `/* Mobile menu: .toggle + .hidden — toggled by script in HTML tab */
/* Teal: bg-teal-200/20, links text-teal-900, CTA bg-teal-900 */`,
    extraHtml: navbar1MenuScript,
    usageHtmlNote: '<!-- Paste HTML tab (nav + script) into your page -->',
  }),
}
