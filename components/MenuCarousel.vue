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
        :height="860"
      >
        <!--Hladna Predjela-->
        <slide :index="0">
          <div class="bg-black w-full h-full">
            <img
              class="w-full h-1/3 object-cover"
              src="~/assets/img/cold-appetizers-menu.jpg"
              alt="Menu Slika"
            />
            <div class="flex flex-col gap-4">
              <div
                class="text-xl font-bold text-center py-4 sm:py-4 border-b-2"
              >
                Hladna predjela
              </div>
              <div class="flex flex-row">
                <div class="px-8 flex flex-col gap-2 w-full">
                  <MenuItem itemName="Dalmatinski pršut" itemPrice="1kg/300" />
                  <MenuItem itemName="Paški sir" itemPrice="1kg/300" />
                  <MenuItem
                    itemName="Hladna plata za 2 osobe"
                    itemPrice="0,35kg/90"
                  />
                  <MenuItem itemName="Slani inćuni" itemPrice="25" />
                  <MenuItem itemName="Marinirani inćuni" itemPrice="25" />
                  <MenuItem itemName="Pašteta od tune" itemPrice="30" />
                  <MenuItem itemName="Salata s tunom" itemPrice="40" />
                  <MenuItem itemName="Salatas piletinom" itemPrice="40" />
                </div>
              </div>
            </div>
          </div>
        </slide>
        <!--Topla Predjela-->
        <slide :index="1">
          <div class="bg-black w-full h-full">
            <img
              class="w-full h-1/3 object-cover"
              src="~/assets/img/warm-appetizers-menu.jpg"
              alt="Menu Slika"
            />
            <div class="flex flex-col gap-4">
              <div
                class="text-xl font-bold text-center border-b-2 py-2 sm:py-4"
              >
                Topla predjela
              </div>
              <div class="flex flex-row">
                <div class="px-8 flex flex-col gap-2 w-full">
                  <MenuItem itemName="Pohani prsteni luka" itemPrice="25" />
                  <MenuItem
                    itemName="Pohani mozzarella štapići"
                    itemPrice="32"
                  />
                  <MenuItem itemName="Pohana pileća krilca" itemPrice="35" />
                  <MenuItem
                    itemName="Pohane Jalapeno Paprike s chedar sirom"
                    itemPrice="35"
                  />
                  <MenuItem itemName="Mix predjelo za 2 osobe" itemPrice="65" />
                  <MenuItem itemName="Salata od hobotnice" itemPrice="50" />
                  <MenuItem itemName="Mazalice" itemPrice="35" />
                </div>
              </div>
            </div>
          </div>
        </slide>
        <!--Pizza-->
        <slide :index="2">
          <div class="bg-black w-full h-full">
            <img
              class="w-full h-1/3 object-cover"
              src="~/assets/img/pizza-menu.jpg"
              alt="Menu Slika"
            />
            <div class="flex flex-col gap-4">
              <div
                class="text-xl font-bold text-center border-b-2 py-2 sm:py-4"
              >
                Pizza
              </div>
              <div class="flex flex-row">
                <div class="px-8 flex flex-col w-full">
                  <MenuItem itemName="Margherita" itemPrice="38" />
                  <MenuItem itemName="Vesuvio" itemPrice="40" />
                  <MenuItem itemName="Funghi" itemPrice="40" />
                  <MenuItem itemName="Capricciosa" itemPrice="42" />
                  <MenuItem itemName="Salami" itemPrice="44" />
                  <MenuItem itemName="Quattro formaggi" itemPrice="44" />
                  <MenuItem itemName="Tuna" itemPrice="44" />
                  <MenuItem itemName="Vegeteriana" itemPrice="42" />
                  <MenuItem itemName="Slavonska" itemPrice="47" />
                  <MenuItem itemName="Velebit" itemPrice="47" />
                  <MenuItem itemName="Gamberi" itemPrice="47" />
                  <MenuItem itemName="Siesta" itemPrice="49" />
                </div>
              </div>
            </div>
          </div>
        </slide>
        <!--Mesna jela-->
        <slide :index="3">
          <div class="bg-black w-full h-full">
            <img
              class="w-full h-1/3 object-cover"
              src="~/assets/img/meat-menu.jpg"
              alt="Menu Slika"
            />
            <div class="flex flex-col gap-4">
              <div
                class="text-xl font-bold text-center border-b-2 py-2 sm:py-4"
              >
                Mesna jela
              </div>
              <div class="flex flex-row">
                <div class="px-8 flex flex-col w-full gap-2">
                  <MenuItem itemName="Čevapčići" itemPrice="48" />
                  <MenuItem itemName="Svinjski kotlet" itemPrice="55" />
                  <MenuItem itemName="Miješano meso" itemPrice="75" />
                  <MenuItem itemName="Pileći file grill" itemPrice="55" />
                  <MenuItem itemName="Ramstek" itemPrice="80" />
                  <MenuItem itemName="Biftek" itemPrice="125" />
                  <MenuItem itemName="Pljeskavica" itemPrice="48" />
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide :index="4">
          <div class="bg-black w-full h-full">
            <img
              class="w-full h-1/3 object-cover"
              src="~/assets/img/meat-menu.jpg"
              alt="Menu Slika"
            />
            <div class="flex flex-col gap-4">
              <div
                class="text-xl font-bold text-center border-b-2 py-2 sm:py-4"
              >
                Mesna jela
              </div>
              <div class="flex flex-row">
                <div class="px-8 flex flex-col w-full gap-2">
                  <MenuItem
                    itemName="Pljeskavica punjena sirom"
                    itemPrice="52"
                  />
                  <MenuItem itemName="Gurmanska pljeskavica" itemPrice="55" />
                  <MenuItem itemName="Teleći kotlet" itemPrice="90" />
                  <MenuItem itemName="Otkošteni batak" itemPrice="65" />
                  <MenuItem
                    itemName="Mesna plata SIESTA za 2 osobe"
                    itemPrice="150"
                  />
                  <MenuItem
                    itemName="Mesa plata SIESTA DELUXE za 2 osobe"
                    itemPrice="300"
                  />
                </div>
              </div>
            </div>
          </div>
        </slide>
        <!--Riblja jela-->
        <slide :index="5">
          <div class="bg-black w-full h-full">
            <img
              class="w-full h-1/3 object-cover"
              src="~/assets/img/fish-menu.jpg"
              alt="Menu Slika"
            />
            <div class="flex flex-col gap-4">
              <div
                class="text-xl font-bold text-center border-b-2 py-2 sm:py-4"
              >
                Riblja jela
              </div>
              <div class="flex flex-row">
                <div class="px-8 flex flex-col w-full gap-2">
                  <MenuItem
                    itemName="Riblja plata za 2 osobe"
                    itemPrice="320"
                  />
                  <MenuItem itemName="Riba I. klasa" itemPrice="1kg/300" />
                  <MenuItem itemName="Riba II. klasa" itemPrice="1kg/200" />
                  <MenuItem itemName="Tuna žar" itemPrice="84" />
                  <MenuItem itemName="Lignje pržene" itemPrice="75" />
                  <MenuItem itemName="Lignje sa žara" itemPrice="1kg/290" />
                  <MenuItem itemName="Škampi sa žara" itemPrice="1kg/300" />
                </div>
              </div>
            </div>
          </div>
        </slide>
        <!--Pašte i rižoti-->
        <slide :index="6">
          <div class="bg-black w-full h-full">
            <img
              class="w-full h-1/3 object-cover"
              src="~/assets/img/pasta_and_rice-menu.jpg"
              alt="Menu Slika"
            />
            <div class="flex flex-col gap-4">
              <div
                class="text-xl font-bold text-center border-b-2 py-2 sm:py-4"
              >
                Pašte i rižoti
              </div>
              <div class="flex flex-row">
                <div class="px-8 flex flex-col w-full gap-2">
                  <MenuItem itemName="Bolognese" itemPrice="55" />
                  <MenuItem
                    itemName="Zelena pašta sa škampima"
                    itemPrice="90"
                  />
                  <MenuItem itemName="Rižoto plodovi mora" itemPrice="75" />
                </div>
              </div>
            </div>
          </div>
        </slide>
        <!--Sendviči-->
        <slide :index="7">
          <div class="bg-black w-full h-full">
            <img
              class="w-full h-1/3 object-cover"
              src="~/assets/img/sandvich-menu.jpg"
              alt="Menu Slika"
            />
            <div class="flex flex-col gap-4">
              <div
                class="text-xl font-bold text-center border-b-2 py-2 sm:py-4"
              >
                Sendviči
              </div>
              <div class="flex flex-row">
                <div class="px-8 flex flex-col sm:gap-2 w-full">
                  <MenuItem itemName="Sir" itemPrice="23" />
                  <MenuItem itemName="Šunka-sir" itemPrice="25" />
                  <MenuItem itemName="Kulen-sir" itemPrice="28" />
                  <MenuItem itemName="Buđola-sir" itemPrice="28" />
                  <MenuItem itemName="Pršut-sir" itemPrice="28" />
                  <MenuItem itemName="Tuna-sir" itemPrice="28" />
                  <MenuItem itemName="Hamburger" itemPrice="28" />
                  <MenuItem itemName="Cheeseburger" itemPrice="30" />
                  <MenuItem itemName="Piletina" itemPrice="30" />
                  <MenuItem itemName="Piletina-sir" itemPrice="32" />
                  <MenuItem
                    itemName="Double burger + crispers fries"
                    itemPrice="70"
                  />
                </div>
              </div>
            </div>
          </div>
        </slide>
        <!--Deserti-->
        <slide :index="8">
          <div class="bg-black w-full h-full">
            <img
              class="w-full h-1/3 object-cover"
              src="~/assets/img/desert-menu.jpg"
              alt="Menu Slika"
            />
            <div class="flex flex-col gap-4">
              <div
                class="text-xl font-bold text-center border-b-2 py-2 sm:py-4"
              >
                Deserti
              </div>
              <div class="flex flex-row">
                <div class="pl-8 pr-1 flex flex-col w-1/2 border-1 border-r">
                  <MenuItem itemName="Sladoled" itemPrice="8" />
                  <MenuItem itemName="Voćna salata" itemPrice="15" />
                  <MenuItem itemName="Torta" itemPrice="20" />
                </div>
                <div class="pr-8 pl-1 flex flex-col w-1/2">
                  <div class="text-lg font-bold">Palačinke</div>
                  <MenuItem itemName="Mermelada" itemPrice="18" />
                  <MenuItem itemName="Nutella" itemPrice="20" />
                  <MenuItem itemName="Oreo" itemPrice="25" />
                  <MenuItem itemName="Raffaello" itemPrice="25" />
                  <MenuItem itemName="Banana" itemPrice="25" />
                  <MenuItem itemName="M&M" itemPrice="25" />
                  <MenuItem itemName="Bueno" itemPrice="28" />
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
import MenuItem from "./MenuItem.vue";
export default {
  data() {
    return {
      imgUrl_1: "~/assets/img/cold-appetizers-menu.jpg",
      imgUrl_2: "~/assets/img/warm-appetizers-menu.jpg",
      imgUrl_3: "~/assets/img/pizza-menu.jpg",
      imgUrl_4: "~/assets/img/meat-menu.jpg",
      imgUrl_5: "~/assets/img/meat-menu.jpg",
      imgUrl_6: "~/assets/img/fish-menu.jpg",
      imgUrl_7: "~/assets/img/pasta_and_rice-menu.jpg",
      imgUrl_8: "~/assets/img/sandvich-menu.jpg",
      imgUrl_9: "~/assets/img/desert-menu.jpg",
    };
  },
  components: { MenuItem },
};
</script>

<style>
</style>