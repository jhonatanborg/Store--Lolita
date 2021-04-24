<template>
  <v-footer width="100%" height="300">
    <v-row justify="center" align="center" dense>
      <v-col cols="12" sm="4">
        <div>
          <router-link :to="{ name: 'Home' }">
            <v-img
              width="200px"
              src="https://d2r9epyceweg5n.cloudfront.net/stores/001/084/973/themes/common/logo-1816159371-1618085601-d70661d576a60823b4287b4359c722e91618085601-480-0.jpg?0"
            ></v-img>
          </router-link>
        </div>
      </v-col>
      <v-col cols="12" sm="8">
        <v-row>
          <v-col cols="12" sm="4">
            <div class="item-tel">
              <span>Telefone:</span>
            </div>
            <div class="item-details">
              <span>(66) 9638 - 6074</span>
            </div>
          </v-col>
          <v-col cols="12" sm="8">
            <div class="address">
              <span>Endereço:</span>
            </div>
            <div class="item-details">
              <span>
                Rua Muricis, nº 502 - Jardim Primaveras - Sinop, Mato Grosso
              </span>
              <br />
              <span>78550-001</span>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="auto">
        <small>
          &copy;2020 —
          <a
            href="http://vedassistemas.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>vedassistemas.com.br</strong>
          </a>
        </small>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style></style>
