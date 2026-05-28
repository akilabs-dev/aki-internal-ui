import type { LibraryEntry } from '../../types'
import { createAccountVariant } from './variant-1'
import { completeProfileVariant } from './variant-2'

export const formEntry: LibraryEntry = {
  id: 'form',
  label: 'Forms',
  icon: '📋',
  section: 'Form Rules',
  category: 'form-rules',
  title: 'Forms',
  subtitle: 'Create account and profile forms — preview and copyable code',
  description: 'Validated registration and profile setup forms with Alpine (HTML) or Vue.',
  tags: ['form', 'validation', 'tailwind', 'alpine'],
  variants: [createAccountVariant, completeProfileVariant],
}

export { createAccountVariant, completeProfileVariant }
