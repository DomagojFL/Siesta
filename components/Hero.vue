<template>
  <div class="hero">
    <div class="w-full h-screen relative overflow-hidden">
      <video
        autoplay
        loop
        muted
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://assets.mixkit.co/videos/download/mixkit-adding-spices-to-barbecue-meat-in-the-grill-30824-medium.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <!-- <img
        class="absolute w-full h-screen object-cover"
        src="/hero.jpg"
        alt="Hero"
      /> -->
      <div
        class="
          absolute
          z-20
          bg-black
          w-full
          h-screen
          flex
          items-center
          justify-center
          bg-opacity-70
        "
      >
        <div class="flex flex-col items-center justify-center absolute top-60">
          <div class="flex flex-col text-center">
            <div class="text-4xl sm:text-6xl font-bold">Grill & Bar Siesta</div>
            <p class="py-4 sm:text-2xl">Najbolja hrana i piće u Crnoj Punti!</p>
          </div>
          <div class="mt-10">
            <svg
              class="h-10 w-10 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div class="mt-32 sm:mt-10 flex flex-row justify-between w-full">
            <div>
              <a href="tel:091 304 5555">
                <img
                  class="
                    w-14
                    scale-100
                    transform
                    hover:scale-110
                    transition-all
                    ease-in-out
                    duration-200
                  "
                  src="/Dostava.png"
                  alt="Dostava"
                />
              </a>
            </div>
            <div>
              <a href="#menu">
                <img
                  class="
                    w-14
                    scale-100
                    transform
                    hover:scale-110
                    transition-all
                    ease-in-out
                    duration-200
                  "
                  src="/food-menu.jpg"
                  alt="Menu"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
