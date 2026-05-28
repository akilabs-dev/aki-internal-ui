<script setup lang="ts">
import { nextTick, reactive, ref } from 'vue'

type FieldName =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phone'
  | 'password'
  | 'confirmPassword'
  | 'terms'

const submitting = ref(false)
const showSuccess = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  terms: false,
})

const errors = reactive<Record<FieldName, string>>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  terms: '',
})

const inputBaseClass =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-700 dark:text-white'

function validateField(fieldName: FieldName, value: unknown): string {
  if (fieldName === 'firstName' && !String(value).trim()) return 'First name is required'
  if (fieldName === 'lastName' && !String(value).trim()) return 'Last name is required'
  if (fieldName === 'email') {
    if (!String(value).trim()) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value))) return 'Please enter a valid email address'
  }
  if (fieldName === 'password') {
    if (!value) return 'Password is required'
    if (String(value).length < 8) return 'Password must be at least 8 characters'
  }
  if (fieldName === 'confirmPassword' && value !== formData.password) return 'Passwords do not match'
  if (fieldName === 'terms' && !value) return 'You must accept the terms and conditions'
  return ''
}

function onBlur(field: FieldName) {
  errors[field] = validateField(field, formData[field])
}

function validateForm(): boolean {
  let valid = true
  ;(['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'terms'] as FieldName[]).forEach(
    (field) => {
      const message = validateField(field, formData[field])
      errors[field] = message
      if (message) valid = false
    },
  )
  return valid
}

async function submitForm() {
  if (!validateForm()) {
    await nextTick()
    const firstError = document.querySelector('.error-input') as HTMLElement | null
    firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    firstError?.focus()
    return
  }

  submitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 1500))
  showSuccess.value = true
  submitting.value = false
}

function resetForm() {
  Object.assign(formData, {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false,
  })
  ;(Object.keys(errors) as FieldName[]).forEach((key) => {
    errors[key] = ''
  })
  showSuccess.value = false
}

function fieldClass(field: FieldName, extra = '') {
  return [inputBaseClass, extra, errors[field] ? 'error-input' : ''].filter(Boolean).join(' ')
}
</script>

<template>
  <section
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-white py-12 dark:bg-gray-900"
    aria-label="Create account form"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-1/2 -right-1/2 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/20"
      />
      <div
        class="absolute -bottom-1/2 -left-1/2 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-600/20"
      />
    </div>

    <div class="relative z-10 mx-auto w-full max-w-lg px-4">
      <div class="mb-8 text-center">
        <h1 class="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl dark:text-white">
          Create Account
        </h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">Join us and build the future today</p>
      </div>

      <div
        class="rounded-2xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/80"
      >
        <form v-if="!showSuccess" class="space-y-6" @submit.prevent="submitForm">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white py-1">Create Your Account</h2>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label for="firstName" class="mb-1 py-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >First Name</label
              >
              <input
                id="firstName"
                v-model="formData.firstName"
                type="text"
                placeholder="John"
                :class="fieldClass('firstName')"
                @blur="onBlur('firstName')"
              />
              <p v-if="errors.firstName" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ errors.firstName }}
              </p>
            </div>
            <div>
              <label for="lastName" class="mb-1 py-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >Last Name</label
              >
              <input
                id="lastName"
                v-model="formData.lastName"
                type="text"
                placeholder="Doe"
                :class="fieldClass('lastName')"
                @blur="onBlur('lastName')"
              />
              <p v-if="errors.lastName" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ errors.lastName }}
              </p>
            </div>
          </div>

          <div>
            <label for="email" class="mb-1 py-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >Email Address</label
            >
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="you@example.com"
              :class="fieldClass('email')"
              @blur="onBlur('email')"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.email }}</p>
          </div>

          <div>
            <label for="phone" class="mb-1 py-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >Phone Number (Optional)</label
            >
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              :class="fieldClass('phone')"
            />
          </div>

          <div>
            <label for="password" class="mb-1 py-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >Password</label
            >
            <div class="relative">
              <input
                id="password"
                v-model="formData.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                :class="fieldClass('password', 'pr-10')"
                @blur="onBlur('password')"
              />
              <button
                type="button"
                class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
                @click="showPassword = !showPassword"
              >
                <svg v-if="!showPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </button>
            </div>
            <p v-if="errors.password" class="mt-1 text-sm text-red-600 dark:text-red-400">
              {{ errors.password }}
            </p>
          </div>

          <div>
            <label for="confirmPassword" class="mb-1 py-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >Confirm Password</label
            >
            <div class="relative">
              <input
                id="confirmPassword"
                v-model="formData.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="••••••••"
                :class="fieldClass('confirmPassword', 'pr-10')"
                @blur="onBlur('confirmPassword')"
              />
              <button
                type="button"
                class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                :aria-label="showConfirmPassword ? 'Hide password' : 'Show password'"
                @click="showConfirmPassword = !showConfirmPassword"
              >
                <svg v-if="!showConfirmPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </button>
            </div>
            <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-600 dark:text-red-400">
              {{ errors.confirmPassword }}
            </p>
          </div>

          <div class="mb-6">
            <div class="flex items-start">
              <div class="flex mt-4 py-4 h-5 items-center">
                <input
                  id="terms"
                  v-model="formData.terms"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 border bg-rose-600 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                  @change="onBlur('terms')"
                />
              </div>
              <label for="terms" class="ml-2 px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300">
                I agree to the
                <a href="#" class="text-blue-600 hover:text-blue-500 dark:text-blue-400">Terms and Conditions</a>
                and
                <a href="#" class="text-blue-600 hover:text-blue-500 dark:text-blue-400">Privacy Policy</a>
              </label>
            </div>
            <p v-if="errors.terms" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.terms }}</p>
          </div>

          <button
            type="submit"
            :disabled="submitting"
            class="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span v-if="!submitting">Create Account</span>
            <span v-else class="flex items-center">
              <svg class="mr-2 h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Creating Account...
            </span>
          </button>
        </form>

        <div v-else class="py-8 text-center">
          <div class="mb-4 flex justify-center">
            <div
              class="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900"
            >
              <svg class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Account Created Successfully!</h3>
          <p class="mb-6 text-gray-600 dark:text-gray-400">
            Welcome to our platform! We've sent a confirmation email to your address.
          </p>
          <div class="mb-6 rounded-lg bg-blue-50 p-4 text-left dark:bg-blue-900/20">
            <h4 class="mb-2 font-medium text-blue-800 dark:text-blue-300">Your Account Details:</h4>
            <p class="text-sm text-blue-700 dark:text-blue-400">Email: {{ formData.email }}</p>
            <p class="text-sm text-blue-700 dark:text-blue-400">
              Name: {{ formData.firstName }} {{ formData.lastName }}
            </p>
          </div>
          <div class="flex gap-4">
            <button
              type="button"
              class="flex-1 rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              @click="resetForm"
            >
              Create Another Account
            </button>
            <a
              href="#"
              class="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-blue-700"
            >
              Go to Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.error-input {
  border-color: #ef4444 !important;
  box-shadow: 0 0 0 1px #ef4444;
}
</style>
