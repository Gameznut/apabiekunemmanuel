import { inject } from "@vercel/analytics";


export default defineNuxtPlugin(nuxtApp => {
  inject()
  // now available on `nuxtApp.$injected`
})
