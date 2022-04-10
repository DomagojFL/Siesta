<template>
  <div>
    <client-only placeholder="Loading...">
      <carousel-3d
        data-aos="fade-up"
        :controls-visible="true"
        :controls-prev-html="'&#10092; '"
        :controls-next-html="'&#10093;'"
        :controls-width="15"
        :controls-height="60"
        :clickable="false"
        :border="0"
        :width="600"
        :height="820"
      >
        <slide v-for="(slide, i) in slide" :index="i" :key="i">
          <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <div class="bg-black w-full h-full">
              <div class="relative h-1/3 w-full">
                <div
                  class="
                    absolute
                    inset-0
                    text-xl
                    font-bold
                    text-center
                    py-4
                    sm:py-4
                    z-20
                    w-full
                    h-2/5
                    bg-gradient-to-b
                    from-black
                    via-black
                  "
                >
                  {{ slide.title }}
                </div>
                <img
                  class="absolute inset-0 h-full w-full object-cover z-0"
                  :src="require(`~/assets/img${slide.src}`)"
                />
              </div>
              <div
                class="
                  flex flex-row
                  justify-between
                  w-full
                  pt-6
                  px-6
                  border-t-2
                "
              >
                <div class="flex flex-col w-full">
                  <div class="flex flex-col">
                    <div
                      class="text-xs sm:text-base font-bold flex-col pb-2"
                      v-for="name in slide.items"
                    >
                      {{ name.item }}
                    </div>
                  </div>
                </div>
                <div class="flex flex-row">
                  <div class="flex flex-col px-2">
                    <div
                      class="text-xs sm:text-base pb-2"
                      v-for="kg in slide.kg"
                    >
                      {{ kg.kg }}
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <div
                      class="text-xs sm:text-base pb-2"
                      v-for="price in slide.priceHR"
                    >
                      {{ price.price }}Kn
                    </div>
                  </div>
                  <div class="flex flex-col pl-2">
                    <div
                      class="text-xs sm:text-base pb-2"
                      v-for="price in slide.priceE"
                    >
                      {{ price.price }}€
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </slide>
      </carousel-3d>
    </client-only>
  </div>
</template>

<script>
import menu from "@/assets/menu.json";
export default {
  data() {
    return {
      slide: menu,
    };
  },
};
</script>

<style>
</style>