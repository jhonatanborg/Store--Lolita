<template>
  <div class="my-5 col-sm-10 mx-auto">
    <v-row>
      <v-col sm="4">
        <v-select
          dense
          :items="items"
          v-model="value"
          label="Categoria"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="my-5" sm="3" v-for="item in 10" :key="item">
        <CardProduct />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardProduct from "@/components/product/CardProduct.vue";
export default {
  components: {
    CardProduct,
  },
  data() {
    return {
      items: ["Blusas", "Vestidos", "Jeans"],
    };
  },
};
</script>

<style></style>
