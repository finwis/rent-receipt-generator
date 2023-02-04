import {defineNuxtPlugin} from "#app";
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-PZ1C1X7JBC'
    }
  })
})
