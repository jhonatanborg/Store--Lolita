<template>
  <div class="home">
    <Carousel />
    <div class="col-sm-8 mx-auto my-5">
      <Warning />
    </div>
    <div class="col-sm-11 mx-auto py-5">
      <Highlights />
    </div>
    <div class="purple">
      <div class="col-sm-11 mx-auto py-5">
        <div class="">
          <div class="col-sm-2 py-2 white my-2">
            <h3 class="purple--text">Categorias</h3>
          </div>
          <div class="col-sm-8">
            <span class="white--text"
              >Apresentando uma seleção de peças de vestuário e acessórios que
              foram cuidadosamente escolhidos por sua excelente qualidade e
              formas impecáveis.</span
            >
          </div>
        </div>
        <v-row justify="center">
          <v-col cols="12" v-for="item in 6" :key="item" sm="2">
            <Categorie
              title="Feminino"
              image="https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/cropped/blusa-cropped-poa-farofa-amarelo_594831_600_1.jpg"
            />
          </v-col>
        </v-row>
      </div>
    </div>
    <div>
      <Social />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/carousel/Carousel.vue";
import Highlights from "@/components/home/Highlights.vue";
import Warning from "@/components/home/Warning.vue";
import Categorie from "@/components/categorie/Categorie.vue";
import Social from "@/components/social/Social.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Highlights,
    Categorie,
    Warning,
    Social,
  },
};
</script>
