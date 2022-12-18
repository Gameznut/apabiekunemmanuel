// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    // baseURL: "/apabiekunemmanuel/",

    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-16",
      title: "Apabiekun Emmanuel",
      script: [
        {
          children: `window.addEventListener('load', () => {
                    const preloader = document.getElementById('preloader') 
                    preloader.style.visibility = "hidden";
                  })`,
        },
      ],
      meta: [
        {
          name: "description",
          content: "Apabiekun Emmanuel a full stack devloper",
        },
      ],
      link: [],
    },
    pageTransition: { name: "page", mode: "default" },
  },
  modules: ["nuxt-icon", "@nuxt/image-edge"],
  css: ["@/assets/css/global.css"],
  image: {
    dir: "assets/images",
  },
  runtimeConfig: {
    telegramToken: process.env.TELEGRAM_TOKEN,
    public: {
      chatId: process.env.CHAT_ID,
      telegramToken: process.env.TELEGRAM_TOKEN,
    },
  },
  // ssr: false,
  experimental: {
    payloadExtraction: false,
  },
});
