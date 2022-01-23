<template>
  <div id="menu" class="h-full w-full text-center">
    <div class="mt-10">
      <div class="text-3xl font-bold py-8">Menu</div>
      <MenuCarousel />
    </div>
  </div>
</template>

<script>
import MenuCarousel from "./MenuCarousel.vue";
export default { components: { MenuCarousel } };
</script>
