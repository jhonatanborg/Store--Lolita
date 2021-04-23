<template>
  <div>
    <v-app-bar app flat color="white" light>
      <v-toolbar-title>Lolita store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-2 text-capitalize hidden-sm-and-down" text>
        Categorias
      </v-btn>
      <v-btn
        :to="{ name: 'list-products' }"
        class="mr-2 text-capitalize hidden-sm-and-down"
        text
      >
        Produtos
      </v-btn>
      <v-btn
        dark
        @click="openSale()"
        color="#fcafc0"
        class="mr-2 text-capitalize hidden-sm-and-down"
        depressed
      >
        Seu carrinho <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn
        class="mr-2 text-capitalize hidden-sm-and-down"
        text
        :to="{ name: 'session', params: { type: 'login' } }"
      >
        Login
      </v-btn>
      <v-btn
        :to="{ name: 'session', params: { type: 'criar-conta' } }"
        class="text-capitalize hidden-sm-and-down"
        text
      >
        Criar conta
      </v-btn>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon
          @click="$store.commit('user/request', ['menuMobile', true])"
        ></v-app-bar-nav-icon>
      </span>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    verifySession() {
      if (localStorage.getItem("token")) {
        return true;
      }
      return false;
    },
    sale() {
      return this.$store.state.sale.sales || [];
    },
  },
  methods: {
    openSale() {
      if (this.$store.state.sale.sales.length > 0) {
        this.$store.commit("sale/request", ["cart", { open: true, step: 1 }]);
      } else {
        this.$store.commit("sale/request", ["cart", { open: true, step: 4 }]);
      }
    },
  },
};
</script>

<style></style>
