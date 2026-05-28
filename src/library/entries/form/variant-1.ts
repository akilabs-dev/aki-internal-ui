import type { LibraryVariant } from '../../types'
import CreateAccountForm from '../../../components/previews/form/CreateAccountForm.vue'
import { tailwindCopyCss } from '../../snippets/tailwind-copy-css'
import { tailwindHtmlSetup } from '../../snippets/tailwind-html-setup'
import {
  createAccountAlpineCdn,
  createAccountFormCss,
  createAccountFormHtml,
} from './create-account-html'

export const createAccountVariant: LibraryVariant = {
  id: 'create-account',
  label: 'Create Account',
  description:
    'Registration form with blur validation, password toggle, terms checkbox, and success state.',
  codeLocation: 'src/components/previews/form/CreateAccountForm.vue',
  preview: CreateAccountForm,
  previewLayout: 'page',
  code: {
    html: createAccountFormHtml,
    css: `${tailwindCopyCss}

${createAccountFormCss}

${createAccountAlpineCdn}`,
    usage: {
      html: `${tailwindHtmlSetup}

${createAccountAlpineCdn}

<!-- 1. Paste HTML tab (section) into <body> -->
<!-- 2. Add .error-input CSS from CSS tab -->
<!-- 3. Alpine.js handles validation (x-data is on the form card) -->

<!-- Vue / Laravel: use the Vue tab — no Alpine required -->`,
      vue: `<script setup lang="ts">
import CreateAccountForm from '@/components/previews/form/CreateAccountForm.vue'
</script>

<template>
  <CreateAccountForm />
</template>`,
    },
  },
}
