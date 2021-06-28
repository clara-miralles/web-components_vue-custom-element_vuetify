<template>
  <v-navigation-drawer
    :mini-variant="$vuetify.breakpoint.smAndDown"
    mini-variant-width="40"
    permanent
    class="side-navigation-drawer"
    floating
    width="250"
  >
   <div class="mr-md-5 mr-sm-0 cursorPointer" @click="$emit('logoClick')">
      <v-img
        contain
        :max-width="logoWidthComputed"
        :max-height="logoHeightComputed"
        style="box-sizing: border-box;"
        :src="logo"
      ></v-img>
    </div>
    <v-spacer></v-spacer>

  <v-divider v-if="!$vuetify.breakpoint.smAndDown && showName"></v-divider>
    
    <v-list class="pa-0">
      <v-list-item
        :ripple="false"
        v-for="(menu, index) in menus"
        class="side-menu mb-0 pa-0"
        :class="{ 'side-menu-selected-item': menu.endpoint === currentEndpoint }"
        tile
        :key="index"
        @click="$emit('itemSelected', menu)"
      >
        <v-list-item-icon class="item-icon">
          <v-icon size="14" class="primary--text" v-html="menu.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="primary--text menu-text text-uppercase">{{ menu }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  name: "SideMenu",
  props: {
    menus: {
      type: Array,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    logoWidth: {
      type: Number,
      required: false
    },
    logoHeight: {
      type: Number,
      required: false
    }
  },
  data(){
    return {

    }
  },
  computed: {
    logoHeightComputed() {
      return this.logoHeight ? this.logoHeight : "50px";
    },

    logoWidthComputed() {
      return this.logoWidth ? this.logoWidth : "180px";
    },
  },
 
};
</script>

<style lang="scss" scoped>
.side-menu-selected-item {
  background-color: #212A34;
  font-weight: 600;
  border-radius: 0 !important;
}
.side-navigation-drawer {
  top: 70px !important;
  background-color: #212A34 !important;
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


