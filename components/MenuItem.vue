<template>
  <div class="flex flex-row justify-between w-full">
    <div class="font-bold">{{ itemName }}</div>
    <div class="text-sm sm:text-base">{{ itemPrice }}Kn</div>
  </div>
</template>

<script>
export default {
  props: {
    itemName: String,
    itemPrice: String,
  },
};
</script>

<style>
</style>