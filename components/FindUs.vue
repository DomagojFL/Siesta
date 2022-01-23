<template>
  <div id="find" class="w-full h-full text-center px-5 mt-10 mb-4">
    <div class="text-3xl font-bold py-8">Kontakt</div>
    <div class="flex flex-row">
      <div class="w-full flex flex-col gap-4 py-4">
        <div>
          <div class="font-bold sm:text-xl">Adresa:</div>
          <div class="text-sm sm:text-base">
            Zagrebačka 41d, Crna Punta, 23450 Obrovac
          </div>
        </div>
        <div>
          <div class="font-bold sm:text-xl">Radno vrijeme:</div>
          <div class="text-sm sm:text-base">8:00h - 23:00h</div>
        </div>

        <div>
          <div class="font-bold sm:text-xl">Telefon:</div>
          <div class="text-sm sm:text-base">091 305 5555</div>
        </div>
      </div>
    </div>

    <div id="map" class="w-full h-96 mb-20"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  data() {
    return {
      access_token:
        "pk.eyJ1IjoiZG9tYWdvajEyMyIsImEiOiJja3lyNzdvdGUwcjVxMnZvM3JhemRzZHI2In0.QUo89Uz8oHllrunRGROz2g",
      map: {},
    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = this.access_token;
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/domagoj123/ckyr7aa7h3emo15qroiu0cuqc",
        zoom: 16,
        center: [15.609382, 44.162124],
      });
    },
  },
};
</script>

<style>
</style>