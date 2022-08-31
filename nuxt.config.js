export default {
  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0", // default: localhost
  },
  ssr: false,
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  loading: {
    name: "rotating-plane",
    color: "yellow",
    background: "red",
  },
  head: {
    title: "Grill & Bar Siesta",
    htmlAttrs: {
      lang: "hr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Službena stranica Grill & Bar Sieste, mi smo restoran koji se nalazi manje od sat vremena od Zadra i više od 15 minuta od predivne rijeke Zrmanje . Od jutarnjih kava uz pogled na more do posebnih ljetnih večeri uz miris mora i fine hrane u restoranu Grill & Bar Siesta.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://res.cloudinary.com/drcapubdj/image/upload/v1661962588/logo_op_yofror.png",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["aos/dist/aos.css"],
  vendor: ["aos"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/vue-carousel-3d", ssr: false },
    { src: "~plugins/aos", ssr: false },
    { src: "~plugins/aos", ssr: false },
    "~/plugins/strapi",
    "~/plugins/vue-agile",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  //Apollo module configuration: https://go.nuxtjs.dev/config

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-agile"],
  },
};
