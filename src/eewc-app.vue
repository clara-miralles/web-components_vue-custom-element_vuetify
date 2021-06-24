<template>
  <v-app>
    <v-main>
      <demo-basic
        prop1="1"
        prop2="example text"
        prop3="true"
        string-prop="123"
        boolean-prop="false"
        number-prop="123"
        long-prop-name="long name"
      >
      </demo-basic>
      <side-menu 
      >
      </side-menu>
    </v-main>
  </v-app>
</template>

<script>
import DemoBasic from "./components/demo-basic";
import SideMenu from "./components/eewc-navigation-sidebar";

export default {
  name: "App",

  components: {
    DemoBasic,
    SideMenu
  },

  data: () => ({
    //
  }),
};
</script>
