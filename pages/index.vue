<template>
  <div class="font-Poppins bg-black text-white scroll-smooth">
    <Navbar />
    <div class="hero">
      <div class="w-full h-screen relative overflow-hidden">
        <video
          autoplay
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="~/assets/img/Hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          class="
            absolute
            z-20
            bg-black
            w-full
            h-screen
            flex
            items-center
            justify-center
            bg-opacity-70
          "
        >
          <div
            class="
              title
              flex flex-col
              items-center
              justify-center
              absolute
              top-60
            "
          >
            <div class="flex flex-col text-center">
              <div data-aos="fade-up" class="text-4xl sm:text-6xl font-bold">
                Grill & Bar Siesta
              </div>
              <p data-aos="fade-up" class="py-4 sm:text-2xl">
                Najbolja hrana i piće u Crnoj Punti!
              </p>
            </div>
            <div class="mt-10">
              <svg
                data-aos="fade-up"
                class="h-10 w-10 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div class="mt-32 sm:mt-10 flex flex-row justify-between w-full">
              <div data-aos="fade-up">
                <a href="tel:091 304 5555">
                  <svg
                    class="
                      w-12
                      scale-100
                      transform
                      hover:scale-110
                      transition-all
                      ease-in-out
                      duration-200
                      text-yellow-400
                    "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                </a>
              </div>
              <div data-aos="fade-up">
                <a href="https://goo.gl/maps/9iZmcWbRpbWWygvE6">
                  <svg
                    class="
                      w-12
                      scale-100
                      transform
                      hover:scale-110
                      transition-all
                      ease-in-out
                      duration-200
                      text-yellow-400
                    "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <div
      id="events"
      class="w-full h-full text-center px-5 py-4 mt-10 sm:-mt-10"
    >
      <div data-aos="fade-up" class="text-3xl font-bold py-8">Događaji</div>
      <div class="w-full h-full sm:px-10 flex flex-col sm:flex-row gap-4">
        <div data-aos="fade-up" class="h-1/2 sm:h-full">
          <img
            class="w-full h-full object-cover"
            src="~/assets/img/event.jpg"
            alt="Događaji"
          />
        </div>
        <div class="h-1/2 sm:h-full py-4 sm:px-6 flex flex-col items-center">
          <div data-aos="fade-up" class="py-4 sm:py-6 text-xl font-bold">
            Organiziraj svoj događaj
          </div>
          <div data-aos="fade-up" data-aos-delay="50">
            <p class="sm:px-6">
              Možemo organizirati vjenčanja, djevojačke večeri, rođendane,
              dječje rođendane. Svaki event i događaj možemo pretvoriti u bajku
              i usrećiti sve one koji sudjeluju u njemu. Naša najveća prednost
              je što smo na predivnom mjestu koje pruža prekrasan pogled na
              Velebit i prelijepi pogled na more. Manje od sata vremena od Zadra
              i više od 15 minuta od predivne rijeke Zrmanje . Od jutarnjih kava
              uz pogled na more do posebnih ljetnih večeri uz miris mora i fine
              hrane u restoranu Grill & Bar Siesta.
            </p>
            <p class="sm:py-3 sm:px-6">
              Zabava zagarantirana, javite nam se s punim povjerenjem i
              posjetite nas da se dogovorimo o detaljima vaše najveće i najbolje
              zabave u životu.
            </p>
            <p class="sm:py-3 sm:px-6">Vaš Grill & Bar Siesta tim</p>
          </div>
          <a href"tel:091 304 5555">
          <button
            data-aos="fade-up"
            data-aos-delay="50"
            class="
              mt-4
              bg-yellow-400
              text-black
              transform
              scale-100
              hover:scale-110
              transition-all
              duration-200
              ease-in-out
              py-4
              px-4
              rounded-xl
              focus:outline-none
              font-bold">
            Organiziraj
          </button>
          </a>
        </div>
      </div>
    </div>
    <Gallery />
    <div id="find" class="w-full h-full text-center px-5 mt-10 mb-4">
      <div data-aos="fade-up" class="text-3xl font-bold py-8">Kontakt</div>
      <div class="flex flex-row">
        <div class="w-full flex flex-col gap-4 py-4">
          <div>
            <div data-aos="fade-up" class="font-bold sm:text-xl">Adresa:</div>
            <div data-aos="fade-up" class="text-sm sm:text-base">
              Zagrebačka 41d, Crna Punta, 23450 Obrovac
            </div>
          </div>
          <div>
            <div data-aos="fade-up" class="font-bold sm:text-xl">
              Radno vrijeme:
            </div>
            <div data-aos="fade-up" class="text-sm sm:text-base">
              8:00h - 23:00h
            </div>
          </div>

          <div>
            <div data-aos="fade-up" class="font-bold sm:text-xl">Telefon:</div>
            <div data-aos="fade-up" class="text-sm sm:text-base">
              091 305 5555
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" class="w-full h-96 mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.1803635602973!2d15.607127215661976!3d44.162141927388745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761c1467f021061%3A0x79f6bd9b5455cf9d!2sGrill%26bar%20Siesta!5e0!3m2!1shr!2shr!4v1643386966706!5m2!1shr!2shr"
          class="w-full h-full"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <Footer />
    <transition name="fade">
      <div
        id="pagetop"
        class="
          fixed
          right-0
          bottom-0
          p-2
          m-2
          bg-yellow-400 bg-opacity-60
          rounded-full
          shadow-xl
        "
        v-show="scY > 300"
        @click="toTop"
      >
        <svg
          class="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>
    </transition>
    <transition name="fade">
      <div
        id="pagetop"
        class="
          sm:hidden
          fixed
          left-0
          bottom-0
          p-2
          m-2
          bg-yellow-400 bg-opacity-60
          rounded-full
          shadow-xl
        "
        v-show="scY > 300"
      >
        <a href="tel:091 304 5555">
          <svg
            class="h-10 w-10 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from "~/components/layout/Navbar.vue";
import MenuCarousel from "~/components/MenuCarousel.vue";
import Gallery from "~/components/Gallery.vue";
import Footer from "~/components/layout/Footer.vue";

export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  components: { Gallery, Navbar, MenuCarousel, Footer },
};
</script>
<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: balck;
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #fbbf24;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #be911c;
}
</style>
