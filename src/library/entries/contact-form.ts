import type { LibraryEntry } from '../types'
import ContactFormPreview from '../../components/previews/ContactFormPreview.vue'
import { tailwindHtmlSetup } from '../snippets/tailwind-html-setup'

export const contactFormEntry: LibraryEntry = {
  id: 'contact-form',
  label: 'Contact Form',
  icon: '📝',
  section: 'Form Rules',
  category: 'form-rules',
  title: 'Contact Form',
  subtitle: 'Approved two-column form layout (FormBold reference)',
  description:
    'Standard contact form with first/last name split, email, message, and full-width submit. Label color #07074D, border #e0e0e0.',
  tags: ['form', 'tailwind', 'approved'],
  hideFromMenu: true,
  codeLocation: 'src/components/previews/ContactFormPreview.vue',
  preview: ContactFormPreview,
  code: {
    html: `<div class="mx-auto w-full max-w-[550px] bg-white p-8">
  <!-- Author: FormBold Team -->
  <form class="space-y-6">
    <div class="flex flex-wrap -mx-3">
      <div class="w-full px-3 sm:w-1/2">
        <label class="mb-3 block text-sm font-medium text-[#07074D]">First Name</label>
        <input type="text" placeholder="First Name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-500 focus:shadow-md" />
      </div>
      <div class="w-full px-3 sm:w-1/2">
        <label class="mb-3 block text-sm font-medium text-[#07074D]">Last Name</label>
        <input type="text" placeholder="Last Name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-500 focus:shadow-md" />
      </div>
    </div>
    <div>
      <label class="mb-3 block text-sm font-medium text-[#07074D]">Email</label>
      <input type="email" placeholder="example@email.com"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-500 focus:shadow-md" />
    </div>
    <div>
      <label class="mb-3 block text-sm font-medium text-[#07074D]">Message</label>
      <textarea rows="4" placeholder="Write your message"
        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-500 focus:shadow-md"></textarea>
    </div>
    <button type="submit"
      class="w-full rounded-md bg-violet-600 py-3 px-6 text-base font-semibold text-white hover:bg-violet-700">
      Submit
    </button>
  </form>
</div>`,
    css: `/* Form field tokens */
:root {
  --form-label: #07074D;
  --form-border: #e0e0e0;
  --form-placeholder: #6B7280;
  --form-focus: #6A64F1;
}

input:focus,
textarea:focus {
  border-color: var(--form-focus);
}`,
    usage: {
      html: `${tailwindHtmlSetup}

<!-- CONTACT FORM — after Tailwind is set up -->
<!-- 1. Copy HTML tab into your page -->
<!-- 2. Copy CSS tab tokens into global.css if not using Tailwind arbitrary values -->

<!-- Form rules (all stacks) -->
// Labels: text-[#07074D], font-medium
// Inputs: border-[#e0e0e0], placeholder text-[#6B7280]
// Focus: border-violet-500 or #6A64F1
// Max width: max-w-[550px]`,
      vue: `<!-- VUE PROJECT -->
<script setup lang="ts">
import ContactFormPreview from '@/components/previews/ContactFormPreview.vue'
</script>

<template>
  <ContactFormPreview />
</template>

// Or paste HTML tab into <template> of ContactForm.vue
// src/components/previews/ContactFormPreview.vue`,
    },
  },
}
