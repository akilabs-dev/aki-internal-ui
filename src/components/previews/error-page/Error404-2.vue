<template>
  <div
    class="my-12 flex min-h-[70vh] w-full items-center justify-center px-4 text-gray-900"
    aria-label="404 error page 2"
  >
    <div class="flex w-full flex-col items-center gap-8">
      <h1 class="w-full select-none text-center text-9xl font-black text-gray-400 md:text-16xl">
        404
      </h1>
      <p class="text-center text-3xl font-semibold">You have discovered a secret place</p>
      <p class="text-center text-2xl md:px-12">
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.
      </p>
      <div class="flex flex-row justify-between gap-8">
        <a
          href="#"
          class="flex items-center justify-center rounded-md border border-indigo-500 px-5 py-2 text-xl text-black hover:bg-indigo-500 hover:text-white"
        >
          Previous Page
        </a>
        <a
          href="/"
          class="flex items-center justify-center rounded-md border border-green-500 px-5 py-2 text-xl text-black hover:bg-green-500 hover:text-white"
        >
          Home Page
        </a>
      </div>
    </div>
  </div>
</template>
