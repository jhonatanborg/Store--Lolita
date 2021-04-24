<template>
  <div class="mx-auto" flat raised rounded>
    <div class="d-flex justify-center">
      <v-avatar size="100" color="white">
        <v-img aspect-ratio="1.1" :src="image" />
      </v-avatar>
    </div>
    <div class="pa-2 text-center">
      <span class="grey--text" v-text="title"></span>
    </div>
  </div>
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
