<template>
  <div class="mx-auto w-full max-w-[550px] rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
    <!-- Author: FormBold Team — approved reference -->
    <form class="space-y-6" @submit.prevent>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3 sm:w-1/2">
          <label class="mb-3 block text-sm font-medium text-[#07074D]"> First Name </label>
          <input
            type="text"
            placeholder="First Name"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-500 focus:shadow-md"
          />
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <label class="mb-3 block text-sm font-medium text-[#07074D]"> Last Name </label>
          <input
            type="text"
            placeholder="Last Name"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-500 focus:shadow-md"
          />
        </div>
      </div>

      <div>
        <label class="mb-3 block text-sm font-medium text-[#07074D]"> Email </label>
        <input
          type="email"
          placeholder="example@email.com"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-500 focus:shadow-md"
        />
      </div>

      <div>
        <label class="mb-3 block text-sm font-medium text-[#07074D]"> Message </label>
        <textarea
          rows="4"
          placeholder="Write your message"
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-500 focus:shadow-md"
        />
      </div>

      <button
        type="submit"
        class="w-full rounded-md bg-violet-600 py-3 px-6 text-center text-base font-semibold text-white hover:bg-violet-700"
      >
        Submit
      </button>
    </form>
  </div>
</template>
