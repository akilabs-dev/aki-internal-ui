<script setup lang="ts">
import { ref } from 'vue'

const analyticsOpen = ref(true)
const teamOpen = ref(false)

function toggleDropdown(id: 'analytics' | 'team') {
  if (id === 'analytics') analyticsOpen.value = !analyticsOpen.value
  else teamOpen.value = !teamOpen.value
}
</script>

<template>
  <div class="flex h-screen w-full bg-gray-100" aria-label="Dashboard 2">
    <aside class="flex w-64 shrink-0 flex-col bg-gray-900 text-white">
      <div class="border-b border-gray-800 p-4">
        <div class="flex items-center gap-2">
          <img
            src="https://tailwindflex.com/images/logo.svg"
            alt="Logo"
            class="h-8 w-auto"
          />
          <span class="text-xl font-bold">Admin Pro</span>
        </div>
      </div>

      <div class="p-4">
        <div class="relative">
          <input
            type="search"
            class="w-full rounded-md bg-gray-800 py-2 pr-4 pl-10 text-sm text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Search..."
          />
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <nav class="flex-1 overflow-y-auto px-2 pb-4">
        <div class="space-y-4">
          <a
            href="#"
            class="flex items-center rounded-lg bg-gray-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            <svg class="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </a>

          <div class="space-y-1">
            <button
              type="button"
              class="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              :aria-expanded="analyticsOpen"
              @click="toggleDropdown('analytics')"
            >
              <span class="flex items-center">
                <svg class="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Analytics
              </span>
              <svg
                class="h-5 w-5 transition-transform duration-200"
                :class="analyticsOpen ? 'rotate-180' : ''"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div v-show="analyticsOpen" class="space-y-1 pl-11">
              <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Overview</a>
              <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Reports</a>
              <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Statistics</a>
            </div>
          </div>

          <div class="space-y-1">
            <button
              type="button"
              class="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              :aria-expanded="teamOpen"
              @click="toggleDropdown('team')"
            >
              <span class="flex items-center">
                <svg class="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Team
              </span>
              <svg
                class="h-5 w-5 transition-transform duration-200"
                :class="teamOpen ? 'rotate-180' : ''"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div v-show="teamOpen" class="space-y-1 pl-11">
              <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Members</a>
              <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
              <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Settings</a>
            </div>
          </div>

          <a href="#" class="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            <svg class="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            Projects
          </a>
          <a href="#" class="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            <svg class="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Calendar
          </a>
          <a href="#" class="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            <svg class="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Documents
          </a>
        </div>
      </nav>

      <div class="border-t border-gray-800 p-4">
        <div class="flex items-center">
          <img
            class="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Tom Cook"
          />
          <div class="ml-3">
            <p class="text-sm font-medium text-white">Tom Cook</p>
            <p class="text-xs text-gray-400">View profile</p>
          </div>
        </div>
      </div>
    </aside>

    <main class="min-w-0 flex-1 overflow-y-auto bg-gray-100 p-6">
      <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <div class="mt-4 rounded-lg bg-white p-6 shadow-md">
        <p class="text-gray-600">Dark sidebar with search, submenus, and profile footer.</p>
      </div>
    </main>
  </div>
</template>
