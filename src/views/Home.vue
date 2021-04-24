<template>
  <div class="home">
    <Carousel />
    <div class="grey lighten-5">
      <div class="mx-auto py-5">
        <div class="">
          <div class="col-sm-2 py-2 white my-2">
            <h3 class="pink--text">Categorias</h3>
          </div>
          <div class="col-sm-8">
            <span class="grey--text"
              >Apresentando uma seleção de peças de vestuário e acessórios que
              foram cuidadosamente escolhidos por sua excelente qualidade e
              formas impecáveis.</span
            >
          </div>
        </div>
        <v-row justify="center">
          <ListCategorie />
        </v-row>
      </div>
    </div>
    <div class="col-sm-8 mx-auto my-5">
      <Warning />
    </div>
    <div class="col-sm-12 mx-auto py-5">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="3">
          <div>
            <span class="headline">Novidades</span>
          </div>
          <div class="pink pa-2">
            <h3 class="white--text">de dezembro</h3>
          </div>
          <div>
            <span
              >Apresentando uma seleção de peças de vestuário e acessórios que
              foram cuidadosamente escolhidos por sua excelente qualidade e
              formas impecáveis.
            </span>
          </div>
        </v-col>
        <v-col cols="6" sm="3" md="2" v-for="item in 4" :key="item">
          <CardProduct />
        </v-col>
      </v-row>
    </div>

    <div>
      <Social />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/carousel/Carousel.vue";
import Warning from "@/components/home/Warning.vue";
import Social from "@/components/social/Social.vue";
import CardProduct from "@/components/product/CardProduct.vue";
import ListCategorie from "@/components/categorie/ListCategorie.vue";

export default {
  name: "Home",
  components: {
    Carousel,

    Warning,
    Social,
    CardProduct,
    ListCategorie,
  },
};
</script>
