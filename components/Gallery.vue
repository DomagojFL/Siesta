<template>
  <div class="w-full h-full text-center mt-20 mb-20">
    <carousel-3d
      data-aos="fade-up"
      :disable3d="true"
      :space="365"
      :clickable="false"
      :border="0"
      :autoplay="true"
    >
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <img class="w-full h-full object-cover" :src="slide.src" />
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { id: 1, src: "/gallery/1.png" },
        { id: 2, src: "/gallery/2.png" },
        { id: 3, src: "/gallery/3.png" },
        { id: 4, src: "/gallery/4.png" },
        { id: 5, src: "/gallery/5.png" },
        { id: 6, src: "/gallery/6.png" },
        { id: 7, src: "/gallery/7.png" },
        { id: 8, src: "/gallery/8.png" },
        { id: 9, src: "/gallery/9.png" },
        { id: 10, src: "/gallery/10.png" },
        { id: 11, src: "/gallery/11.png" },
        { id: 12, src: "/gallery/12.png" },
        { id: 13, src: "/gallery/13.png" },
      ],
    };
  },
};
</script>

<style></style>
