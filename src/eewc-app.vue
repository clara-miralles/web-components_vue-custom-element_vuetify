<template>
  <v-app>
    <v-main>
      <side-menu
      :menus="menusData"
      :logo="logoData"
      :helpCenter="helpCenterData"
      :helpIcon="helpIconData"
      :layouts="layoutsData"
      >
      </side-menu>
    </v-main>
  </v-app>
</template>

<script>
import SideMenu from "./components/eewc-navigation-sidebar";
import sidebarData from "../src/services/sidebarService";
import logo_een from "../src/assets/logo_hor_een.svg";
import help_icon from "../src/assets/eewc_icons_actions/iconHelp.svg";

export default {
  name: "App",

  components: {
    SideMenu
  },

  data() {
    return {
      menusData: sidebarData.menus, 
      logoData: logo_een,
      helpCenterData: sidebarData.helpCenter,
      helpIconData: help_icon ,
      layoutsData: sidebarData.layoutsOptions
    }
  },
}
</script>
