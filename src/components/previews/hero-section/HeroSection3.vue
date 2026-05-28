<template>
  <section
    class="hero-section-3 relative mb-10 w-full overflow-hidden rounded-xl bg-[#f8fafc] font-[Poppins,sans-serif] text-[#1e293b]"
    aria-label="Hero section 3"
  >
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-br from-[#4f46e5]/5 via-[#f8fafc] to-[#10b981]/5"
    />

    <div class="hero-float absolute top-20 left-10 -z-10 h-16 w-16 rounded-full bg-[#4f46e5]/10" />
    <div
      class="hero-float-reverse absolute top-1/3 right-20 -z-10 h-24 w-24 rounded-full bg-[#10b981]/10"
    />
    <div
      class="hero-float absolute bottom-20 left-1/4 -z-10 h-20 w-20 rounded-full bg-[#4f46e5]/15"
    />
    <div
      class="hero-float-reverse absolute bottom-1/3 right-1/4 -z-10 h-32 w-32 rounded-full bg-[#10b981]/15"
    />

    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
      <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div class="text-center md:text-left">
          <span
            class="mb-4 inline-block rounded-full bg-[#4f46e5]/10 px-3 py-1 text-xs font-semibold tracking-wider text-[#4f46e5] uppercase"
          >
            Digital Excellence
          </span>
          <h1 class="mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            <span class="hero-text-gradient">Transform</span> Your Brand's
            <span class="hero-text-gradient">Digital Presence</span>
          </h1>
          <p class="mx-auto mb-8 max-w-lg text-lg text-gray-600 md:mx-0">
            We craft data-driven digital marketing strategies that drive growth, engagement, and
            measurable results for your business.
          </p>
          <div class="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a href="#" class="hero-btn-gradient rounded-lg px-8 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl">
              Get Started
            </a>
            <a
              href="#"
              class="rounded-lg border-2 border-[#4f46e5] px-8 py-3.5 font-semibold text-[#4f46e5] transition-all duration-300 hover:bg-[#4f46e5]/5"
            >
              Learn More
            </a>
          </div>

          <div class="mt-12 flex items-center justify-center gap-6 md:justify-start">
            <div class="flex -space-x-2">
              <img
                class="h-10 w-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="Client"
              />
              <img
                class="h-10 w-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client"
              />
              <img
                class="h-10 w-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Client"
              />
            </div>
            <div>
              <div class="flex items-center">
                <svg
                  v-for="i in 5"
                  :key="i"
                  class="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <p class="text-sm text-gray-600">Trusted by 500+ businesses worldwide</p>
            </div>
          </div>
        </div>

        <div class="relative hero-fade-in">
          <div class="relative mx-auto max-w-md">
            <div
              class="hero-float absolute -top-10 -left-10 -z-10 h-32 w-32 rounded-2xl bg-[#4f46e5]/10"
            />
            <div
              class="hero-float-reverse absolute -right-10 -bottom-10 -z-10 h-32 w-32 rounded-2xl bg-[#10b981]/10"
            />
            <img
              class="relative rounded-xl border-8 border-white shadow-2xl"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Digital Marketing"
            />
          </div>
          <div
            class="absolute -bottom-8 left-1/4 flex items-center rounded-lg bg-white px-4 py-2 shadow-md"
          >
            <div class="mr-2 h-3 w-3 animate-pulse rounded-full bg-green-500" />
            <span class="text-sm font-medium">+85% ROI</span>
          </div>
          <div class="absolute -top-8 right-1/4 rounded-lg bg-white px-4 py-2 shadow-md">
            <span class="text-sm font-medium">📈 3x Growth</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

@keyframes hero-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes hero-float-reverse {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
}

@keyframes hero-fade-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-float {
  animation: hero-float 6s ease-in-out infinite;
}

.hero-float-reverse {
  animation: hero-float-reverse 5s ease-in-out infinite;
}

.hero-fade-in {
  animation: hero-fade-in 0.8s ease-out both;
}

.hero-text-gradient {
  background: linear-gradient(to right, #4f46e5, #10b981);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-btn-gradient {
  background: linear-gradient(to right, #4f46e5, #10b981);
}

.hero-btn-gradient:hover {
  background: linear-gradient(to right, rgb(79 70 229 / 0.9), rgb(16 185 129 / 0.9));
}
</style>
