<template>
  <hooper class="my-5" :settings="hooperSettings">
    <slide v-for="item in categories" :key="item.id">
      <Categorie :title="item.title" :image="item.image" />
    </slide>
  </hooper>
</template>

<script>
import Categorie from "./Categorie";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide,
    Categorie,
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        centerMode: false,
        breakpoints: {
          350: {
            centerMode: false,
            itemsToShow: 3,
          },
          500: {
            centerMode: false,
            itemsToShow: 4,
          },
          800: {
            centerMode: false,
            itemsToShow: 8,
          },
          1000: {
            itemsToShow: 6,
          },
          1300: {
            itemsToShow: 7,
          },
        },
      },
      categories: [
        {
          id: 1,
          title: "Feminino",
          image:
            "https://dafitistatic-a.akamaihd.net/dynamic_yield/cms/static/images/20f0c3b660144__3.gif",
        },
        {
          id: 2,
          title: "Masculino",
          image:
            "https://img.ltwebstatic.com/images3_pi/2020/11/06/160464937811b0172c5d49575864a92c2759ccdd60_thumbnail_600x.webp",
        },
        {
          id: 3,
          title: "Infantil",
          image:
            "https://img.ltwebstatic.com/images3_pi/2021/03/16/1615869720d16711f7e45f7947327a72a2e855998b_thumbnail_600x.webp",
        },
        {
          id: 4,
          title: "Bolsas",
          image:
            "https://img.ltwebstatic.com/images3_pi/2021/03/10/161535914563430442fef0170de7d8147124c63c0a_thumbnail_600x.webp",
        },
        {
          id: 5,
          title: "Feminino",
          image:
            "https://dafitistatic-a.akamaihd.net/dynamic_yield/cms/static/images/20f0c3b660144__3.gif",
        },
        {
          id: 6,
          title: "Masculino",
          image:
            "https://img.ltwebstatic.com/images3_pi/2020/11/06/160464937811b0172c5d49575864a92c2759ccdd60_thumbnail_600x.webp",
        },
        {
          id: 7,
          title: "Infantil",
          image:
            "https://img.ltwebstatic.com/images3_pi/2021/03/16/1615869720d16711f7e45f7947327a72a2e855998b_thumbnail_600x.webp",
        },
      ],
    };
  },
};
</script>
