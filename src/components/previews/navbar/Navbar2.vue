<template>
  <div class="grid w-full grid-cols-1 xl:grid-cols-1" aria-label="Navbar 2">
    <div class="p-5">
      <div class="w-full rounded-xl border px-3 py-3 bg-green-900">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img src="/logo.svg" class="h-10 w-10 shrink-0 object-contain" alt="Logo" />
            <div class="relative hidden md:block lg:block">
              <input
                class="w-[350px] rounded-3xl px-3 py-3 pr-10 text-xs outline-none"
                placeholder="Search for Grocery, Stores, Vegetable, or Meat"
                type="search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-green-900"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="hidden h-5 w-5 text-yellow-300 md:block lg:block"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                clip-rule="evenodd"
              />
            </svg>

            <p class="hidden text-sm text-white md:block lg:block">
              Order now and get it within
              <span class="text-yellow-300">15 mint!</span>
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="relative h-8 w-8 rounded-full p-1 text-white ring-2 ring-white"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <img
              class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
