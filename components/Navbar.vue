<template>
  <div class="nav relative">
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
    >
      <div>
        <img class="w-12 sm:w-16" src="/logo.png" alt="Logo" />
      </div>
      <!--Mobile navbar toggle -->
      <div>
        <button
          class="flex items-center justify-center sm:hidden"
          @click="showNav"
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <!--Desktop navbar -->
      <div class="hidden sm:flex sm:flex-row">
        <div class="hidden text-2xl sm:flex sm:flex-row gap-6 mr-6">
          <a class="link" href="#">Početna</a>
          <a class="link" href="#menu">Menu</a>
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
        absolute
        left-0
        right-0
        top-16
        flex flex-col
        items-center
        justify-center
        mx-auto
        sm:hidden
        text-2xl
        w-full
        h-80
        backdrop-blur-3xl
        bg-black bg-opacity-60
        z-40
      "
    >
      <div class="px-8 py-6 flex flex-col gap-4 text-center">
        <a @click="showNav" class="link" href="#">Početna</a>
        <a @click="showNav" class="link" href="#menu">Menu</a>
        <a @click="showNav" class="link" href="#events">Događaji</a>
        <a @click="showNav" class="link" href="#find">Kontakt</a>
      </div>
      <div class="flex flex-row space-x-12">
        <div>
          <a href="https://www.instagram.com/grill_bar_siesta/?hl=hr">
            <img
              class="w-10 h-10 text-white"
              src="/instagram.svg"
              alt="Instagram"
            />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/Grillbar-Siesta-177464942921067/">
            <img
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
  }),
  methods: {
    showNav() {
      this.visible = !this.visible;
    },
  },
};
</script>
