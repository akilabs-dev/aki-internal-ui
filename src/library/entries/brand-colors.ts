import type { LibraryEntry } from '../types'
import BrandColorsPreview from '../../components/previews/BrandColorsPreview.vue'
import { tailwindHtmlSetup } from '../snippets/tailwind-html-setup'

export const brandColorsEntry: LibraryEntry = {
  id: 'brand-colors',
  label: 'Color Palette',
  icon: '🎨',
  section: 'Brand Rules',
  category: 'brand-rules',
  title: 'Color Palette',
  subtitle: 'Approved brand colors for System UI Library',
  description:
    'Primary violet for actions, FormBold heading ink for labels, and shared neutrals for borders and placeholders.',
  tags: ['brand', 'colors', 'tokens'],
  hideFromMenu: true,
  codeLocation: 'src/assets/base.css',
  preview: BrandColorsPreview,
  code: {
    html: `<!-- Use Tailwind arbitrary values or CSS variables -->
<button class="bg-violet-600 hover:bg-violet-700 text-white">Primary</button>
<label class="text-[#07074D]">Label</label>
<input class="border-[#e0e0e0] text-[#6B7280] placeholder:text-[#6B7280]" />`,
    css: `:root {
  --brand-primary: #7c3aed;
  --brand-primary-hover: #6d28d9;
  --brand-heading: #07074D;
  --brand-muted: #6B7280;
  --brand-border: #e0e0e0;
  --brand-focus: #6A64F1;
}`,
    usage: {
      html: `${tailwindHtmlSetup}

<!-- BRAND COLORS — after Tailwind is set up -->
<!-- 1. Add CSS tab :root variables to your main stylesheet -->
<!-- 2. Use HTML tab classes on elements, or map variables in custom CSS -->
<!-- 3. Arbitrary values need Tailwind: text-[#07074D], border-[#e0e0e0] -->

<!-- Do not introduce new hex values without design approval.`,
      vue: `<!-- VUE + TAILWIND -->
// Use arbitrary values in class names:
// bg-violet-600, text-[#07074D], border-[#e0e0e0]

// Or add CSS tab to src/assets/base.css / main.css

// Do not introduce new hex values without design approval.`,
    },
  },
}
