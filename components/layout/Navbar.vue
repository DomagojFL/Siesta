<template>
  <div id="nav" class="nav relative">
    <div
      class="
        absolute
        top-6
        left-0
        right-0
        bottom-0
        flex flex-row
        items-center
        justify-between
        px-4
        sm:px-12 sm:py-8
        py-4
        z-40
      "
      :class="{ 'bg-black bg-opacity-60': !showNavBackground }"
    >
      <div data-aos="fade-right">
        <nuxt-img class="w-12 sm:w-16" src="/logo.png" alt="Logo" />
      </div>
      <!--Mobile navbar toggle -->
      <div data-aos="fade-down">
        <button v-show="!visible" class="sm:hidden" @click="showNav">
          <svg
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <button v-show="visible" class="sm:hidden" @click="showNav">
          <svg
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <!--Desktop navbar -->
      <div data-aos="fade-down" class="hidden sm:flex sm:flex-row">
        <div class="hidden text-2xl sm:flex sm:flex-row gap-6 mr-6">
          <a class="link" href="#nav">Početna</a>
          <a class="link" href="#menu">Jelovnik</a>
          <a class="link" href="#events">Događaji</a>
          <a class="link" href="#find">Kontakt</a>
        </div>
        <div class="hidden sm:flex sm:flex-row space-x-4">
          <div>
            <a href="https://www.instagram.com/grill_bar_siesta/?hl=hr">
              <img
                class="w-8 text-white"
                src="/instagram.svg"
                alt="Instagram"
              />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/Grillbar-Siesta-177464942921067/">
              <img
                class="w-8 text-white fill-current"
                src="/facebook.svg"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="[visible ? 'show' : 'hide']"
      class="
        fixed
        left-0
        right-0
        top-0
        flex flex-col
        sm:hidden
        items-center
        text-2xl
        w-2/3
        h-screen
        bg-black bg-opacity-80
        z-30
      "
    >
      <div class="px-8 py-6 mt-16 flex flex-col gap-4 text-center">
        <a @click="showNav" data-aos="fade-up" class="link" href="#nav"
          >Početna</a
        >
        <a @click="showNav" data-aos="fade-up" class="link" href="#menu"
          >Jelovnik</a
        >
        <a @click="showNav" data-aos="fade-up" class="link" href="#events"
          >Događaji</a
        >
        <a @click="showNav" data-aos="fade-up" class="link" href="#find"
          >Kontakt</a
        >
      </div>
      <div class="flex flex-row space-x-12">
        <div>
          <a href="https://www.instagram.com/grill_bar_siesta/?hl=hr">
            <nuxt-img
              class="w-10 h-10 text-white"
              src="/instagram.svg"
              alt="Instagram"
            />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/Grillbar-Siesta-177464942921067/">
            <nuxt-img
              class="w-10 h-10 text-white fill-current"
              src="/facebook.svg"
              alt="Facebook"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
    showNavBackground: false,
  }),
  methods: {
    showNav() {
      this.visible = !this.visible;
    },
    showBg() {
      document.addEventListener("scroll", function () {
        let bodyTopPosition = document.body.getBoundingClientRect().top;

        if (bodyTopPosition < -120) {
          showNavBackground = true;
        } else {
          showNavBackground = false;
        }
      });
    },
  },
};
</script>
