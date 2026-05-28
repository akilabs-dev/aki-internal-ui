<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <nav
    class="flex w-full flex-wrap items-center justify-between rounded-lg bg-teal-200/20 p-3"
    aria-label="Navbar 1"
  >
    <img src="/logo.svg" class="h-10 w-10 shrink-0 object-contain" alt="Logo" />

    <div class="flex md:hidden">
      <button type="button" aria-label="Toggle menu" @click="toggleMenu">
        <img
          v-show="!menuOpen"
          class="block"
          src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
          width="48"
          height="48"
          alt=""
        />
        <img
          v-show="menuOpen"
          class="block"
          src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
          width="48"
          height="48"
          alt=""
        />
      </button>
    </div>

    <div
      class="w-full font-bold md:mt-0 md:flex md:w-auto md:border-none"
      :class="
        menuOpen
          ? 'mt-5 flex border-t-2 border-teal-900 text-right'
          : 'hidden border-t-2 border-teal-900 text-right md:flex'
      "
    >
      <a
        href="#"
        class="block border-b-2 border-teal-900 px-3 py-3 text-teal-900 hover:text-teal-500 md:inline-block md:border-none"
        >Home</a
      >
      <a
        href="#"
        class="block border-b-2 border-teal-900 px-3 py-3 text-teal-900 hover:text-teal-500 md:inline-block md:border-none"
        >Products</a
      >
      <a
        href="#"
        class="block border-b-2 border-teal-900 px-3 py-3 text-teal-900 hover:text-teal-500 md:inline-block md:border-none"
        >Pricing</a
      >
      <a
        href="#"
        class="block border-b-2 border-teal-900 px-3 py-3 text-teal-900 hover:text-teal-500 md:inline-block md:border-none"
        >Contact</a
      >
    </div>

    <a
      href="#"
      class="bg-teal-900 px-4 py-2 text-right text-white hover:bg-teal-500 md:w-auto md:rounded"
      :class="menuOpen ? 'flex w-full' : 'hidden w-full md:flex'"
    >
      Create Account
    </a>
  </nav>
</template>
