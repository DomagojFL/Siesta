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
        py-4
        z-40
      "
    >
      <div>
        <img class="w-12 h-12" src="/logo.png" alt="Logo" />
      </div>
      <!--Mobile navbar -->
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
      <div class="hidden sm:flex flex-col sm:flex-row gap-4">
        <a href="">Početna</a>
        <a href="">Menu</a>
        <a href="">Kontakt</a>
      </div>
    </div>
    <div
      :class="[visible ? 'show' : 'hide']"
      class="
        absolute
        left-0
        right-0
        top-10
        mx-auto
        sm:hidden
        text-2xl
        w-full
        h-full
        z-40
      "
    >
      <div class="px-8 py-6 flex flex-col gap-4 text-center">
        <a @click="showNav" class="link" href="#">Početna</a>
        <a @click="showNav" class="link" href="#menu">Menu</a>
        <a @click="showNav" class="link" href="#events">Događaji</a>
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
