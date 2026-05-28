import { createAccountAlpineXData } from './create-account-alpine-xdata'

export const createAccountFormHtml = `<section class="relative flex min-h-screen items-center justify-center overflow-hidden bg-white py-12 dark:bg-gray-900">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-1/2 -right-1/2 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/20"></div>
    <div class="absolute -bottom-1/2 -left-1/2 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-600/20"></div>
  </div>

  <div class="relative z-10 mx-auto w-full max-w-lg px-4">
    <div class="mb-8 text-center">
      <h1 class="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl dark:text-white">Create Account</h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">Join us and build the future today</p>
    </div>

    <div
      class="rounded-2xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/80"
      x-data="${createAccountAlpineXData}"
    >
      <form @submit.prevent="submitForm" x-show="!showSuccess" x-transition>
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Create Your Account</h2>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label for="firstName" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
              <input type="text" id="firstName" x-model="formData.firstName"
                @blur="errors.firstName = validateField('firstName', formData.firstName)"
                :class="errors.firstName ? 'error-input' : ''"
                class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="John">
              <div x-show="errors.firstName" x-text="errors.firstName" class="mt-1 text-sm text-red-600 dark:text-red-400"></div>
            </div>
            <div>
              <label for="lastName" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
              <input type="text" id="lastName" x-model="formData.lastName"
                @blur="errors.lastName = validateField('lastName', formData.lastName)"
                :class="errors.lastName ? 'error-input' : ''"
                class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Doe">
              <div x-show="errors.lastName" x-text="errors.lastName" class="mt-1 text-sm text-red-600 dark:text-red-400"></div>
            </div>
          </div>

          <div>
            <label for="email" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <input type="email" id="email" x-model="formData.email"
              @blur="errors.email = validateField('email', formData.email)"
              :class="errors.email ? 'error-input' : ''"
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="you@example.com">
            <div x-show="errors.email" x-text="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400"></div>
          </div>

          <div>
            <label for="phone" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number (Optional)</label>
            <input type="tel" id="phone" x-model="formData.phone"
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="+1 (555) 123-4567">
          </div>

          <div>
            <label for="password" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'" id="password" x-model="formData.password"
                @blur="errors.password = validateField('password', formData.password)"
                :class="errors.password ? 'error-input' : ''"
                class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="••••••••">
              <button type="button" @click="showPassword = !showPassword" class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <svg x-show="!showPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                <svg x-show="showPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
              </button>
            </div>
            <div x-show="errors.password" x-text="errors.password" class="mt-1 text-sm text-red-600 dark:text-red-400"></div>
          </div>

          <div>
            <label for="confirmPassword" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
            <div class="relative">
              <input :type="showConfirmPassword ? 'text' : 'password'" id="confirmPassword" x-model="formData.confirmPassword"
                @blur="errors.confirmPassword = validateField('confirmPassword', formData.confirmPassword)"
                :class="errors.confirmPassword ? 'error-input' : ''"
                class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-900 transition-all duration-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="••••••••">
              <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <svg x-show="!showConfirmPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                <svg x-show="showConfirmPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
              </button>
            </div>
            <div x-show="errors.confirmPassword" x-text="errors.confirmPassword" class="mt-1 text-sm text-red-600 dark:text-red-400"></div>
          </div>

          <div class="mb-6">
            <div class="flex items-start">
              <div class="flex h-5 items-center">
                <input id="terms" x-model="formData.terms" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700">
              </div>
              <label for="terms" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                I agree to the <a href="#" class="text-blue-600 hover:text-blue-500 dark:text-blue-400">Terms and Conditions</a>
                and <a href="#" class="text-blue-600 hover:text-blue-500 dark:text-blue-400">Privacy Policy</a>
              </label>
            </div>
            <div x-show="errors.terms" x-text="errors.terms" class="mt-1 text-sm text-red-600 dark:text-red-400"></div>
          </div>

          <button type="submit" :disabled="submitting" class="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70">
            <span x-show="!submitting">Create Account</span>
            <span x-show="submitting" class="flex items-center">
              <svg class="mr-2 h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Account...
            </span>
          </button>
        </div>
      </form>

      <div x-show="showSuccess" x-transition class="py-8 text-center">
        <div class="mb-4 flex justify-center">
          <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <svg class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Account Created Successfully!</h3>
        <p class="mb-6 text-gray-600 dark:text-gray-400">Welcome to our platform! We've sent a confirmation email to your address.</p>
        <div class="mb-6 rounded-lg bg-blue-50 p-4 text-left dark:bg-blue-900/20">
          <h4 class="mb-2 font-medium text-blue-800 dark:text-blue-300">Your Account Details:</h4>
          <p class="text-sm text-blue-700 dark:text-blue-400" x-text="'Email: ' + formData.email"></p>
          <p class="text-sm text-blue-700 dark:text-blue-400" x-text="'Name: ' + formData.firstName + ' ' + formData.lastName"></p>
        </div>
        <div class="flex gap-4">
          <button type="button" @click="resetForm" class="flex-1 rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">Create Another Account</button>
          <a href="#" class="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700">Go to Dashboard</a>
        </div>
      </div>
    </div>
  </div>
</section>`

export const createAccountFormCss = `.error-input {
  border-color: #ef4444 !important;
  box-shadow: 0 0 0 1px #ef4444;
}`

export const createAccountAlpineCdn = `<!-- HTML projects: add in <head> -->
<script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
<!-- Use Tailwind npm build (see Usage) — do not use cdn.tailwindcss.com in production -->`
