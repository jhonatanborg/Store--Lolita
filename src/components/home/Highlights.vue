<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="3">
      <div>
        <span class="headline">Novidades</span>
      </div>
      <div class="purple pa-2">
        <h3 class="white--text">de dezembro</h3>
      </div>
      <div>
        <span
          >Apresentando uma seleção de peças de vestuário e acessórios que foram
          cuidadosamente escolhidos por sua excelente qualidade e formas
          impecáveis.
        </span>
      </div>
    </v-col>
    <v-col cols="6" sm="3" v-for="item in 3" :key="item">
      <v-card flat>
        <v-img
          src="https://t-static.dafiti.com.br/bY_rN5Os8vsdbGjhxcndBSTtvCs=/fit-in/430x623/static.dafiti.com.br/p/oakley-camiseta-oakley-reta-logo-preta-1331-8310114-1-zoom.jpg"
          aspect-ratio="1.1"
        />
        <div class="py-5 text-center">
          <span class="mb-0">Camiseta Vans Print Box Ss Preta </span>
          <div>
            <span class="font-weight-bold">R$ 150,00</span>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
