<template>
  <v-row justify="center">
    <v-col cols="auto" v-for="(item, i) in items" :key="i">
      <v-card flat class="mx-auto" max-width="300" tile>
        <v-list-item three-line>
          <v-list-item-icon>
            <v-icon size="60" v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      {
        text: "Condições de frete",
        subtitle: "Consulte o regulamento para saber mais",
        icon: "mdi-truck-delivery-outline",
      },
      {
        text: "Condições de frete",
        subtitle: "Consulte o regulamento para saber mais",
        icon: "mdi-truck-delivery-outline",
      },
      {
        text: "Condições de frete",
        subtitle: "Consulte o regulamento para saber mais",
        icon: "mdi-truck-delivery-outline",
      },
    ],
  }),
};
</script>

<style></style>
