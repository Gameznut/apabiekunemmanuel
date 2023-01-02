// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
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
          content:
            "Check out the portfolio of Apabiekun Emmanuel, a fullstack developer based in Nigeria. See how I have helped businesses and startups bring their ideas to life with custom web and mobile applications and a focus on modernizing old web apps. With a track record of delivering high-quality results on time and within budget, I can help your business succeed. Contact me to discuss your project and see how I can turn your vision into a reality.",
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
  plugins: ["~/plugins/vercel.js"],
});
