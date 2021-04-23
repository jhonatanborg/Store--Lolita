<template>
  <div class="py-5">
    <v-row justify="center" align="center">
      <v-col cols="auto">
        <v-img
          v-if="step !== 4"
          contain
          width="150px"
          aspect-ratio="1.1"
          src="https://d2r9epyceweg5n.cloudfront.net/stores/001/084/973/themes/common/logo-1816159371-1618085601-d70661d576a60823b4287b4359c722e91618085601-480-0.jpg?0"
        ></v-img>
        <v-img
          v-else
          contain
          width="150px"
          aspect-ratio="1.1"
          src="https://d2r9epyceweg5n.cloudfront.net/stores/001/084/973/themes/common/logo-1816159371-1618085601-d70661d576a60823b4287b4359c722e91618085601-480-0.jpg?0"
        ></v-img>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="px-5" v-if="step !== 4">
      <v-col cols="auto">
        <v-btn
          depressed
          rounded
          :dark="step == 1 ? true : false"
          @click="step = 1"
          :color="step == 1 ? '#fcafc0' : 'grey lighten-2'"
          >Login</v-btn
        >
      </v-col>
      <v-col cols="auto">
        <v-btn
          depressed
          :dark="step == 2 || 3 ? true : false"
          rounded
          @click="step = 2"
          :color="step == 2 ? '#fcafc0' : 'grey lighten-2'"
          >Registrar</v-btn
        >
      </v-col>
    </v-row>
    <div class="d-flex justify-center align-center">
      <v-card
        flat
        max-width="400px"
        class="fill-height"
        :color="step == 4 ? '#fcafc0' : 'white'"
      >
        <v-window v-model="step">
          <v-window-item :value="1">
            <Login @forgot-pass="step = 5" />
          </v-window-item>
          <v-window-item :value="2">
            <Register @confirm="step = 3" />
          </v-window-item>
        </v-window>
      </v-card>
    </div>
  </div>
</template>

<script>
import Login from "@/components/session/Login.vue";
import Register from "@/components/session/Register.vue";
export default {
  components: {
    Login,
    Register,
  },
  mounted() {
    this.$route.params === "login" ? (this.step = 1) : (this.step = 2);
  },
  watch: {
    "$route.params.type": function () {
      this.$route.params === "login" ? (this.step = 1) : (this.step = 2);
    },
  },
  data: () => ({
    step: 1,
    dialogPay: false,
    purchase: [],
    cupomValidate: null,
    cupom: null,
    discount_value: 0,
    successCupom: null,
    loadingCupom: false,
  }),
};
</script>

<style></style>
