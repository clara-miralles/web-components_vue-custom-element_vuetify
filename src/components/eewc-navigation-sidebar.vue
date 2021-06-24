<template>
  <v-navigation-drawer
    :mini-variant="$vuetify.breakpoint.smAndDown"
    mini-variant-width="40"
    permanent
    class="side-navigation-drawer"
    floating
    width="250"
  >
    <div class="pa-5 primary--text text-uppercase">
      This is the SideMenu!
    </div>
  </v-navigation-drawer>
</template>

<script>
import sidebarData from ".././services/sidebarService";

export default {
  name: "SideMenu",
  props: {
    sideMenuHeader: {
      type: String,
    }
  },
  data: sidebarData
};
</script>

<style lang="scss" scoped>
.side-menu-selected-item {
  background-color: #eeeeee;
  font-weight: 600;
  border-radius: 0 !important;
}
.side-navigation-drawer {
  top: 70px !important;
}
.item-icon {
  width: 50px;
  margin: auto !important;
  i {
    margin: auto;
  }
}
.menu-text {
  letter-spacing: 1px !important;
  font-size: 14px !important;
}
.side-menu:hover {
  width: 102%;
  border-radius: 0 !important;
}
.side-menu:focus {
  background-color: transparent;
  width: 102%;
  border-radius: 0 !important;
}
</style>
