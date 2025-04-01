// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css:['~/assets/style/main.css','remixicon/fonts/remixicon.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
