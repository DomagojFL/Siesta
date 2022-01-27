<template>
  <div id="menu" class="h-full w-full text-center">
    <div class="mt-10">
      <div
        data-aos="fade-up"
        class="menuTitle overflow-hidden text-3xl font-bold py-8"
      >
        Jelovnik
      </div>
      <MenuCarousel />
    </div>
  </div>
</template>

<script>
import MenuCarousel from "./MenuCarousel.vue";
export default {
  components: {
    MenuCarousel,
  },
};
</script>
