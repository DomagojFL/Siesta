<template>
  <div class="font-Poppins bg-black text-white scroll-smooth">
    <Navbar />
    <Hero />
    <Menu />
    <Events />
    <Footer />
    <transition name="fade">
      <div
        id="pagetop"
        class="
          fixed
          right-0
          bottom-0
          p-2
          m-2
          bg-yellow-400 bg-opacity-60
          rounded-full
          shadow-xl
        "
        v-show="scY > 300"
        @click="toTop"
      >
        <svg
          class="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>
    </transition>
    <transition name="fade">
      <div
        id="pagetop"
        class="
          fixed
          left-0
          bottom-0
          p-2
          m-2
          bg-yellow-400 bg-opacity-60
          rounded-full
          shadow-xl
        "
        v-show="scY > 300"
      >
        <a href="tel:091 304 5555">
          <svg
            class="h-10 w-10 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
