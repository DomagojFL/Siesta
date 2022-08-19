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
        <slide :index="0">
          <div class="bg-menu bg-contain bg-no-repeat w-full h-full">
            <div class="relative h-1/3 w-full">
              <div
                class="
                  absolute
                  left-0
                  bottom-0
                  text-xl
                  font-bold
                  flex
                  items-center
                  justify-center
                  border-b-2
                  py-4
                  sm:py-4
                  z-20
                  w-full
                  h-2/5
                  bg-gradient-to-b
                  from-transparent
                  via-black
                  to-black
                "
              >
                Hladna predjela
              </div>
              <img class="absolute inset-0 h-full w-full object-cover z-0" />
            </div>
            <div
              class="
                flex flex-row
                justify-between
                w-full
                pt-6
                px-6
                bg-transparent
              "
              v-for="item in hladnapredjelas"
            >
              <div class="flex flex-col w-full">
                <div class="flex flex-col">
                  <div class="text-xs sm:text-base font-bold flex-col pb-2">
                    {{ item.attributes.ime }}
                  </div>
                </div>
              </div>
              <div class="flex flex-row">
                <div class="flex flex-col px-2">
                  <div class="text-xs sm:text-base pb-2">
                    {{ item.attributes.kolicina }}
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="text-xs sm:text-base pb-2">
                    {{ item.attributes.kune }}Kn
                  </div>
                </div>
                <div class="flex flex-col pl-2">
                  <div class="text-xs sm:text-base pb-2">
                    {{ item.attributes.euro }}€
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hladnapredjelas: [],
      error: null,
      kategorija: null,
      // slides: this.hladnapredjelas,
    };
  },
  async mounted() {
    try {
      const response = await this.$strapi.find("jelovniks", {
        filters: {
          kategorija: {
            ime: {
              $eq: "Hladna predjela",
            },
          },
        },
      });
      this.hladnapredjelas = response.data;
      const kategorije = await this.$strapi.find("kategorijas");
      this.kategorija = kategorije.data.length;
      this.slide = this.kategorija;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style>
</style>