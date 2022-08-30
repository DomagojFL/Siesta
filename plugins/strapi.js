import Strapi from "strapi-sdk-js";

export default ({ app }, inject) => {
  const strapi = new Strapi({
    url: "https://strapi-production-6132.up.railway.app/",
    prefix: "/api",
    store: {
      key: "strapi_jwt",
      useLocalStorage: false,
      cookieOptions: { path: "/" },
    },
    axiosOptions: {},
  });

  inject("strapi", strapi);
};
