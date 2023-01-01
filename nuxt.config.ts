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
          src: "./loader.js",
        },
      ],
      meta: [
        {
          name: "description",
          content: "Apabiekun Emmanuel a full stack devloper",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/pablo.ico" }],
    },
    pageTransition: { name: "page", mode: "default" },
  },
  modules: ["nuxt-icon", "@nuxt/image-edge"],
  css: ["@/assets/css/global.css"],
  image: {
    staticFilename: "[publicPath]/images/[name]-[hash][ext]",
    ipx: {
      dir: "",
      domains: [],
      sharp: {},
      alias: {},
    },
    static: {
      dir: "assets",
    },
  },
  runtimeConfig: {
    public: {
      chatId: process.env.CHAT_ID,
      telegramToken: process.env.TELEGRAM_TOKEN,
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  plugins: [{ src: "~/plugins/vercel.js", mode: "client" }],
});
