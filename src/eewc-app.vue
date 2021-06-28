<template>
  <v-app>
    <v-main>
      <side-menu
      :menus="menusData"
      >
      </side-menu>
    </v-main>
  </v-app>
</template>

<script>
import SideMenu from "./components/eewc-navigation-sidebar";
import sidebarData from "../src/services/sidebarService";

export default {
  name: "App",

  components: {
    SideMenu
  },

  data() {
    return {
      menusData: sidebarData.menus
    }
  },
}
</script>
