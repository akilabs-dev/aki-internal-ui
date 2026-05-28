import { profileSetupAlpineXData } from './profile-setup-alpine-xdata'

export const profileSetupFormHtml = `<section class="relative flex min-h-screen items-center justify-center overflow-hidden bg-white py-12 dark:bg-gray-900">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-1/2 -right-1/2 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/20"></div>
    <div class="absolute -bottom-1/2 -left-1/2 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-600/20"></div>
  </div>

  <div class="relative z-10 mx-auto w-full max-w-2xl px-4">
    <div class="mb-8 text-center">
      <h1 class="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl dark:text-white">Complete Your Profile</h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">Tell us more about yourself to personalize your experience</p>
    </div>

    <div
      class="rounded-2xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/80"
      x-data="${profileSetupAlpineXData}"
    >
      <form @submit.prevent="submitForm" x-show="!showSuccess" x-transition>
        <div class="space-y-8">
          <div class="text-center">
            <div class="relative mx-auto mb-4 inline-block">
              <div class="relative mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600">
                <img x-show="formData.avatar" :src="formData.avatar" alt="Profile preview" class="h-full w-full rounded-full object-cover">
                <div x-show="!formData.avatar" class="flex h-full w-full items-center justify-center text-gray-400">
                  <svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <div class="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/30 opacity-0 transition-opacity duration-200 hover:opacity-100">
                  <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <input type="file" accept="image/*" @change="handleAvatarUpload" class="absolute inset-0 h-full w-full cursor-pointer rounded-full opacity-0">
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Click on the avatar to upload a profile picture</p>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label for="firstName" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                <input type="text" id="firstName" x-model="formData.firstName" @blur="errors.firstName = validateField('firstName', formData.firstName)" :class="errors.firstName ? 'error-input' : ''" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="John">
                <div x-show="errors.firstName" x-text="errors.firstName" class="mt-1 text-sm text-red-600 dark:text-red-400"></div>
              </div>
              <div>
                <label for="lastName" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                <input type="text" id="lastName" x-model="formData.lastName" @blur="errors.lastName = validateField('lastName', formData.lastName)" :class="errors.lastName ? 'error-input' : ''" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="Doe">
                <div x-show="errors.lastName" x-text="errors.lastName" class="mt-1 text-sm text-red-600 dark:text-red-400"></div>
              </div>
            </div>
          </div>

          <div>
            <label for="bio" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
            <textarea id="bio" x-model="formData.bio" rows="3" @blur="errors.bio = validateField('bio', formData.bio)" :class="errors.bio ? 'error-input' : ''" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="Tell us a bit about yourself..."></textarea>
            <div class="mt-1 flex justify-between">
              <div x-show="errors.bio" x-text="errors.bio" class="text-sm text-red-600 dark:text-red-400"></div>
              <div class="text-sm text-gray-500 dark:text-gray-400" x-text="(200 - formData.bio.length) + ' characters remaining'"></div>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Professional Information</h3>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label for="jobTitle" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Job Title</label>
                <input type="text" id="jobTitle" x-model="formData.jobTitle" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="Software Engineer">
              </div>
              <div>
                <label for="company" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Company</label>
                <input type="text" id="company" x-model="formData.company" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="Acme Inc.">
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label for="location" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
              <input type="text" id="location" x-model="formData.location" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="New York, NY">
            </div>
            <div>
              <label for="website" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Website</label>
              <input type="text" id="website" x-model="formData.website" @blur="errors.website = validateField('website', formData.website)" :class="errors.website ? 'error-input' : ''" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="https://example.com">
              <div x-show="errors.website" x-text="errors.website" class="mt-1 text-sm text-red-600 dark:text-red-400"></div>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Social Links</h3>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label for="facebook" class="mb-1 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <svg class="mr-2 h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </label>
                <input type="text" id="facebook" x-model="formData.facebook" @blur="errors.facebook = validateField('facebook', formData.facebook)" :class="errors.facebook ? 'error-input' : ''" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="https://facebook.com/username">
                <div x-show="errors.facebook" x-text="errors.facebook" class="mt-1 text-sm text-red-600 dark:text-red-400"></div>
              </div>
              <div>
                <label for="linkedin" class="mb-1 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <svg class="mr-2 h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn
                </label>
                <input type="text" id="linkedin" x-model="formData.linkedin" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="linkedin.com/in/username">
              </div>
            </div>
          </div>

          <div class="pt-4">
            <button type="submit" :disabled="submitting" class="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70">
              <span x-show="!submitting">Complete Profile</span>
              <span x-show="submitting" class="flex items-center">
                <svg class="mr-2 h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Saving Profile...
              </span>
            </button>
          </div>
        </div>
      </form>

      <div x-show="showSuccess" x-transition class="py-8 text-center">
        <div class="mb-4 flex justify-center">
          <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <svg class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
        </div>
        <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Profile Updated Successfully!</h3>
        <p class="mb-6 text-gray-600 dark:text-gray-400">Your profile has been updated with the new information.</p>
        <div class="flex gap-4">
          <a href="#" class="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">View Profile</a>
          <a href="#" class="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700">Go to Dashboard</a>
        </div>
      </div>
    </div>
  </div>
</section>`
