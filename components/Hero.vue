<template>
  <div class="hero">
    <div class="w-full h-screen relative overflow-hidden">
      <video
        autoplay
        loop
        muted
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/grill_Trim.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
        <div
          class="
            title
            flex flex-col
            items-center
            justify-center
            absolute
            top-60
          "
        >
          <div class="flex flex-col text-center">
            <div data-aos="fade-up" class="text-4xl sm:text-6xl font-bold">
              Grill & Bar Siesta
            </div>
            <p data-aos="fade-up" class="py-4 sm:text-2xl">
              Najbolja hrana i piće u Crnoj Punti!
            </p>
          </div>
          <div class="mt-10">
            <svg
              data-aos="fade-up"
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
                <svg
                  data-aos="fade-up"
                  class="
                    w-12
                    scale-100
                    transform
                    hover:scale-110
                    transition-all
                    ease-in-out
                    duration-200
                    text-yellow-400
                  "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a href="#menu">
                <nuxt-img
                  data-aos="fade-up"
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
