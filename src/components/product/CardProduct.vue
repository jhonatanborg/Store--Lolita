<template>
  <v-card :to="{ name: 'product-details', params: { id: '14785545121' } }" flat>
    <v-img
      src="https://t-static.dafiti.com.br/bY_rN5Os8vsdbGjhxcndBSTtvCs=/fit-in/430x623/static.dafiti.com.br/p/oakley-camiseta-oakley-reta-logo-preta-1331-8310114-1-zoom.jpg"
      aspect-ratio="1.1"
    />
    <div class="py-5 text-center">
      <small class="mb-0">Camiseta Vans Print Box Ss Preta </small>
      <div>
        <small class="font-weight-bold">R$ 150,00</small>
      </div>
    </div>
    <div class="text-center">
      <v-btn depressed outlined class="text-capitalize" color="#fcafc0"
        >COMPRAR</v-btn
      >
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style></style>
