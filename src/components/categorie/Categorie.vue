<template>
  <v-card flat class="pa-5">
    <v-img aspect-ratio="1.1" :src="image" />
    <div class="py-2">
      <span class="font-weight-bold" v-text="title"></span>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
  },
};
</script>

<style></style>
