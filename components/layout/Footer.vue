<template>
  <div class="footer bottom-0 text-sm sm:text-base text-center w-full py-8">
    <div>Copyright © {{ currentYear }} All rights reserved.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2020
    };
  },
};
</script>
