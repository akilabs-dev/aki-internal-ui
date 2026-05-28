<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 p-4 text-white"
    aria-label="404 error page 4"
  >
    <div
      class="animate-fade-in mx-auto max-w-xl rounded-2xl border border-white border-opacity-20 bg-white bg-opacity-10 p-10 text-center shadow-2xl backdrop-blur-lg"
    >
      <div class="relative mb-6">
        <span
          class="animate-bounce-in block text-9xl leading-none font-extrabold text-blue-300"
          >404</span
        >
        <span
          class="animate-wiggle absolute top-0 right-1/4 -translate-x-1/2 -translate-y-1/2 transform text-5xl"
          style="color: #fca5a5"
        >
          <span role="img" aria-label="confused face">😵</span>
        </span>
      </div>

      <h1 class="mb-4 text-4xl font-bold md:text-5xl">Oops! Page Not Found</h1>
      <p class="mb-8 text-lg text-white text-opacity-80 md:text-xl">
        It looks like you've ventured into uncharted territory. The page you're searching for
        might have been moved or doesn't exist.
      </p>
      <a
        href="/"
        class="inline-block transform rounded-full bg-blue-500 px-8 py-3 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600"
      >
        Go to Homepage
      </a>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes bounceIn {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
.animate-bounce-in {
  animation: bounceIn 1.2s ease-out forwards;
}

@keyframes wiggle {
  0%,
  7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%,
  100% {
    transform: rotateZ(0);
  }
}
.animate-wiggle {
  animation: wiggle 2s infinite ease-in-out;
}
</style>
