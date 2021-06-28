<template>
  <v-app>
    <v-main>
      <side-menu
      :menus="menusData"
      :logo="logoData"
      >
      </side-menu>
    </v-main>
  </v-app>
</template>

<script>
import SideMenu from "./components/eewc-navigation-sidebar";
import sidebarData from "../src/services/sidebarService";
import logo_een from "../src/assets/logo_hor_een.svg";

export default {
  name: "App",

  components: {
    SideMenu
  },

  data() {
    return {
      menusData: sidebarData.menus, 
      logoData: logo_een
    }
  },
}
</script>
