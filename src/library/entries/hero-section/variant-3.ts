import type { LibraryVariant } from '../../types'
import HeroSection3 from '../../../components/previews/hero-section/HeroSection3.vue'
import { tailwindHtmlSetup } from '../../snippets/tailwind-html-setup'
import { heroSection3Html, heroSection3Setup } from './hero-section3-html'

export const heroSection3Variant: LibraryVariant = {
  id: 'hero-section3',
  label: 'Hero Section 3',
  description: 'Digital marketing hero — gradient text, floating shapes, social proof, image badges.',
  codeLocation: 'src/components/previews/hero-section/HeroSection3.vue',
  preview: HeroSection3,
  code: {
    html: heroSection3Html,
    css: heroSection3Setup,
    usage: {
      html: `${tailwindHtmlSetup}

<!-- 1. Merge CSS tab into your input.css (theme + utilities) -->
<!-- 2. Build CSS and link in layout -->
<!-- 3. Paste HTML tab into <body> -->`,
      vue: `<script setup lang="ts">
import HeroSection3 from '@/components/previews/hero-section/HeroSection3.vue'
</script>

<template>
  <HeroSection3 />
</template>`,
    },
  },
}
