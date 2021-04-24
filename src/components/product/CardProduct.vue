<template>
  <v-card :to="{ name: 'product-details', params: { id: '14785545121' } }" flat>
    <v-img
      src="https://static.dafiti.com.br/p/FiveBlu-Vestido-FiveBlu-Curto-Floral-Azul/Preto-4139-1697276-2-zoom.jpg"
      aspect-ratio="0.7"
      color="white"
    />
    <div class="pa-5">
      <small class="mb-0">Vestido Lolyta Curto Floral Azul/Preto</small>
      <div>
        <small class="font-weight-bold">R$ 80,00</small>
      </div>
      <div class="grey lighten-5 pa-2">
        <small>ou em 6X 15,00</small>
      </div>
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
