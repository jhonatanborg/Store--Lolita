<template>
  <div>
    <v-row dense class="pa-5">
      <v-col cols="12">
        <v-text-field
          color="#fcafc0"
          label="Login"
          v-model="user.email"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          hide-details=""
          label="Senha"
          append-icon="mdi-eye"
          color="#fcafc0"
          v-model="user.password"
        ></v-text-field>
        <div class="my-3">
          <v-btn
            text
            class="font-weight-bold grey--text"
            @click="$emit('forgot-pass')"
            >Esqueci minha senha?</v-btn
          >
        </div>
      </v-col>
      <div>
        {{ userFB }}
      </div>
      <v-col cols="12">
        <v-alert :type="type" :value="request" v-text="message"> </v-alert>
      </v-col>
      <v-col cols="12">
        <v-btn
          block
          :loading="loading"
          x-large
          color="#fcafc0"
          @click="Login"
          dark
          depressed
          >LOGIN</v-btn
        >
        <v-facebook-login
          v-model="model"
          @sdk-init="handleSdkInit"
          app-id="283629099960017"
        ></v-facebook-login>
        <button v-if="scope.logout && model.connected" @click="scope.logout">
          Logout
        </button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VFacebookLogin from "vue-facebook-login-component";

export default {
  components: {
    VFacebookLogin,
  },

  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
      request: false,
      loading: false,
      type: null,
      scope: {},
      FB: {},
      model: {},
      userFB: null,
      loginOptions: {
        scope: "email, public_profile",
      },
    };
  },
  methods: {
    checkForm() {
      if (this.user.email === null || this.user.password === null) {
        this.request = true;
        this.message = "Preencha todos os campos para criar o cadastro!";
        this.type = "error";
        this.loading = false;
        return false;
      } else {
        this.loading = true;
        return true;
      }
    },
    Login() {
      this.loading = true;
      if (this.checkForm()) {
        this.$store
          .dispatch("user/request", {
            state: "user",
            method: "POST",
            url: "/client-login",
            data: this.user,
            noMsg: true,
          })
          .then(() => {})
          .catch(() => {});
      }
    },
    handleSdkInit({ FB, scope }) {
      this.FB = FB;
      this.scope = scope;

      this.FB.api("/me", (response) => {
        if (response.id) {
          this.userFB = response;
          console.log("bem aqui", this.userFB);
          this.$store.commit("user/request", ["user", this.userFB]);
          return true;
        }
        return false;
      });

      FB.getLoginStatus(function (response) {
        if (response.authResponse) {
          localStorage.setItem("tokenFB", response.authResponse.accessToken);
        }
      });
    },
    login(value) {
      console.log(value);
    },
  },
};
</script>

<style></style>
// appId: "283629099960017", //You will need to change this
