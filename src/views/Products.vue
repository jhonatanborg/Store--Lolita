<template>
  <div class="col-sm-12 mx-auto grey lighten-5">
    <div>
      <div class="my-2">
        <span>Categorias</span>
      </div>
      <ListCategorie />
    </div>
    <div>
      <span>Moda feminina</span>
    </div>
    <v-row>
      <v-col cols="6" class="my-5" sm="3" v-for="item in 10" :key="item">
        <CardProduct />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardProduct from "@/components/product/CardProduct.vue";
import ListCategorie from "@/components/categorie/ListCategorie.vue";
export default {
  components: {
    CardProduct,
    ListCategorie,
  },
  data() {
    return {
      model: null,

      items: ["Blusas", "Vestidos", "Jeans"],
    };
  },
};
</script>

<style></style>
