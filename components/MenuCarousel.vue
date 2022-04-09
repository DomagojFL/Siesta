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
              <img class="h-1/3" :src="require(`~/assets/img${slide.src}`)" />
              <div class="flex flex-col gap-4">
                <div
                  class="text-xl font-bold text-center py-4 sm:py-4 border-b-2"
                >
                  {{ slide.title }}
                </div>
                <div class="flex flex-row justify-between w-full px-6">
                  <div class="flex flex-col w-full">
                    <div class="flex flex-col">
                      <div
                        class="text-sm sm:text-base font-bold flex-col"
                        v-for="name in slide.items"
                      >
                        {{ name.item }}
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row">
                    <div class="flex flex-col px-2">
                      <div class="text-sm sm:text-base" v-for="kg in slide.kg">
                        {{ kg.kg }}
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <div
                        class="text-sm sm:text-base"
                        v-for="price in slide.priceHR"
                      >
                        {{ price.price }}Kn
                      </div>
                    </div>
                    <div class="flex flex-col px-2">
                      <div
                        class="text-sm sm:text-base"
                        v-for="price in slide.priceE"
                      >
                        {{ price.price }}€
                      </div>
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