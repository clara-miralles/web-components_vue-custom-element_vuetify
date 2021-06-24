<template>
  <v-app>
    <v-main>
      <side-menu
      >
      </side-menu>
    </v-main>
  </v-app>
</template>

<script>
import SideMenu from "./components/eewc-navigation-sidebar";

export default {
  name: "App",

  components: {
    SideMenu
  },

  data: () => ({
    //
  }),
};
</script>
