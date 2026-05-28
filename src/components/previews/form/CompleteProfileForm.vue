<script setup lang="ts">
import { computed, nextTick, reactive, ref } from 'vue'

type FieldName =
  | 'firstName'
  | 'lastName'
  | 'bio'
  | 'location'
  | 'website'
  | 'jobTitle'
  | 'company'
  | 'facebook'
  | 'linkedin'

const submitting = ref(false)
const showSuccess = ref(false)
const avatarInput = ref<HTMLInputElement | null>(null)

const formData = reactive({
  avatar: '',
  firstName: '',
  lastName: '',
  bio: '',
  location: '',
  website: '',
  jobTitle: '',
  company: '',
  facebook: '',
  linkedin: '',
})

const errors = reactive<Record<FieldName, string>>({
  firstName: '',
  lastName: '',
  bio: '',
  location: '',
  website: '',
  jobTitle: '',
  company: '',
  facebook: '',
  linkedin: '',
})

const bioRemaining = computed(() => 200 - formData.bio.length)

const inputBaseClass =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-700 dark:text-white'

const websitePattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i
const facebookPattern = /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9(.?)?]/i

function validateField(fieldName: FieldName, value: string): string {
  if (fieldName === 'firstName' && !value.trim()) return 'First name is required'
  if (fieldName === 'lastName' && !value.trim()) return 'Last name is required'
  if (fieldName === 'bio' && value.length > 200) return 'Bio must be less than 200 characters'
  if (fieldName === 'website' && value && !websitePattern.test(value)) {
    return 'Please enter a valid website URL'
  }
  if (fieldName === 'facebook' && value && !facebookPattern.test(value)) {
    return 'Please enter a valid Facebook URL'
  }
  return ''
}

function onBlur(field: FieldName) {
  errors[field] = validateField(field, formData[field])
}

function validateForm(): boolean {
  let valid = true
  ;(['firstName', 'lastName'] as FieldName[]).forEach((field) => {
    const message = validateField(field, formData[field])
    errors[field] = message
    if (message) valid = false
  })
  ;(['bio', 'website', 'facebook'] as FieldName[]).forEach((field) => {
    if (formData[field]) {
      const message = validateField(field, formData[field])
      errors[field] = message
      if (message) valid = false
    }
  })
  return valid
}

function handleAvatarUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return
  if (file.size > 2 * 1024 * 1024) {
    alert('File size must be less than 2MB')
    return
  }
  const reader = new FileReader()
  reader.onload = (e) => {
    formData.avatar = (e.target?.result as string) ?? ''
  }
  reader.readAsDataURL(file)
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

function fieldClass(field: FieldName) {
  return [inputBaseClass, errors[field] ? 'error-input' : ''].filter(Boolean).join(' ')
}
</script>

<template>
  <section
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-white py-12 dark:bg-gray-900"
    aria-label="Complete profile form"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-1/2 -right-1/2 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/20"
      />
      <div
        class="absolute -bottom-1/2 -left-1/2 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-600/20"
      />
    </div>

    <div class="relative z-10 mx-auto w-full max-w-2xl px-4">
      <div class="mb-8 text-center">
        <h1 class="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl dark:text-white">
          Complete Your Profile
        </h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Tell us more about yourself to personalize your experience
        </p>
      </div>

      <div
        class="rounded-2xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/80"
      >
        <form v-if="!showSuccess" class="space-y-8" @submit.prevent="submitForm">
          <div class="text-center">
            <div class="relative mx-auto mb-4 inline-block">
              <div
                class="relative mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600"
              >
                <img
                  v-if="formData.avatar"
                  :src="formData.avatar"
                  alt="Profile preview"
                  class="h-full w-full rounded-full object-cover"
                />
                <div v-else class="flex h-full w-full items-center justify-center text-gray-400">
                  <svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div
                  class="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/30 opacity-0 transition-opacity duration-200 hover:opacity-100"
                  @click="avatarInput?.click()"
                >
                  <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <input
                  ref="avatarInput"
                  type="file"
                  accept="image/*"
                  class="absolute inset-0 h-full w-full cursor-pointer rounded-full opacity-0"
                  @change="handleAvatarUpload"
                />
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Click on the avatar to upload a profile picture
            </p>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label for="profile-firstName" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >First Name</label
                >
                <input
                  id="profile-firstName"
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
                <label for="profile-lastName" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >Last Name</label
                >
                <input
                  id="profile-lastName"
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
          </div>

          <div>
            <label for="bio" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
            <textarea
              id="bio"
              v-model="formData.bio"
              rows="3"
              placeholder="Tell us a bit about yourself..."
              :class="fieldClass('bio')"
              @blur="onBlur('bio')"
            />
            <div class="mt-1 flex justify-between">
              <p v-if="errors.bio" class="text-sm text-red-600 dark:text-red-400">{{ errors.bio }}</p>
              <span v-else></span>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ bioRemaining }} characters remaining</p>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Professional Information</h3>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label for="jobTitle" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >Job Title</label
                >
                <input
                  id="jobTitle"
                  v-model="formData.jobTitle"
                  type="text"
                  placeholder="Software Engineer"
                  :class="fieldClass('jobTitle')"
                />
              </div>
              <div>
                <label for="company" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >Company</label
                >
                <input
                  id="company"
                  v-model="formData.company"
                  type="text"
                  placeholder="Acme Inc."
                  :class="fieldClass('company')"
                />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label for="location" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >Location</label
              >
              <input
                id="location"
                v-model="formData.location"
                type="text"
                placeholder="New York, NY"
                :class="fieldClass('location')"
              />
            </div>
            <div>
              <label for="website" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >Website</label
              >
              <input
                id="website"
                v-model="formData.website"
                type="text"
                placeholder="https://example.com"
                :class="fieldClass('website')"
                @blur="onBlur('website')"
              />
              <p v-if="errors.website" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.website }}</p>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Social Links</h3>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label for="facebook" class="mb-1 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <svg class="mr-2 h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                  Facebook
                </label>
                <input
                  id="facebook"
                  v-model="formData.facebook"
                  type="text"
                  placeholder="https://facebook.com/username"
                  :class="fieldClass('facebook')"
                  @blur="onBlur('facebook')"
                />
                <p v-if="errors.facebook" class="mt-1 text-sm text-red-600 dark:text-red-400">
                  {{ errors.facebook }}
                </p>
              </div>
              <div>
                <label for="linkedin" class="mb-1 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <svg class="mr-2 h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                  LinkedIn
                </label>
                <input
                  id="linkedin"
                  v-model="formData.linkedin"
                  type="text"
                  placeholder="linkedin.com/in/username"
                  :class="fieldClass('linkedin')"
                />
              </div>
            </div>
          </div>

          <div class="pt-4">
            <button
              type="submit"
              :disabled="submitting"
              class="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span v-if="!submitting">Complete Profile</span>
              <span v-else class="flex items-center">
                <svg class="mr-2 h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Saving Profile...
              </span>
            </button>
          </div>
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
          <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Profile Updated Successfully!</h3>
          <p class="mb-6 text-gray-600 dark:text-gray-400">
            Your profile has been updated with the new information.
          </p>
          <div class="flex gap-4">
            <a
              href="#"
              class="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              View Profile
            </a>
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
