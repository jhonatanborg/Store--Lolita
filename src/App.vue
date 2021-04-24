<template>
  <v-app id="app">
    <NavBar />
    <MenuMobile />

    <v-main class="mx-0 px-0">
      <router-view />
    </v-main>
    <Footer />
    <Sale />
  </v-app>
</template>

<script>
import NavBar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Sale from "@/components/sale/Sale";
import MenuMobile from "@/components/shared/MenuMobile.vue";

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
    Sale,
    MenuMobile,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  font-family: "Montserrat", sans-serif !important;
}
</style>
