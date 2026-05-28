import type { LibraryVariant } from '../../types'
import CompleteProfileForm from '../../../components/previews/form/CompleteProfileForm.vue'
import { tailwindCopyCss } from '../../snippets/tailwind-copy-css'
import { tailwindHtmlSetup } from '../../snippets/tailwind-html-setup'
import { createAccountAlpineCdn, createAccountFormCss } from './create-account-html'
import { profileSetupFormHtml } from './profile-setup-html'

export const completeProfileVariant: LibraryVariant = {
  id: 'form-2',
  label: 'Complete Profile',
  description:
    'Profile setup with avatar upload, bio counter, URL validation, and success state.',
  codeLocation: 'src/components/previews/form/CompleteProfileForm.vue',
  preview: CompleteProfileForm,
  previewLayout: 'page',
  code: {
    html: profileSetupFormHtml,
    css: `${tailwindCopyCss}

${createAccountFormCss}

${createAccountAlpineCdn}`,
    usage: {
      html: `${tailwindHtmlSetup}

${createAccountAlpineCdn}

<!-- 1. Paste HTML tab (section) into <body> -->
<!-- 2. Add .error-input CSS from CSS tab -->
<!-- 3. Alpine.js handles validation and avatar preview -->

<!-- Vue / Laravel: use the Vue tab — no Alpine required -->`,
      vue: `<script setup lang="ts">
import CompleteProfileForm from '@/components/previews/form/CompleteProfileForm.vue'
</script>

<template>
  <CompleteProfileForm />
</template>`,
    },
  },
}
