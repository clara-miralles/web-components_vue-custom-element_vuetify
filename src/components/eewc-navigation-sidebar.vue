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
    

  <v-divider class="sidebar__divider"></v-divider>
    
  <v-list class="pa-0">
    <v-list-group
      :value="true"
      class="sidebar__list-group"
      v-for="(menu, index) in menus" :key="index"
    >
      <template v-slot:activator>
        <v-list-item>
            <v-list-item-title 
              :ripple="false"
              class="list-item__title">{{ menu.title }}
            </v-list-item-title>
        </v-list-item>
      </template>

      <v-list-group
        :value="true"
        no-action
        sub-group
        >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-for="(menu, index) in menus"  :key="index" class="list-item__suboption">
              {{ menu.subOption }}
            </v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-group>
    </v-list-group>
  </v-list>

  <v-btn text v-if="helpCenter" class="sidebar__help-center">
    {{ helpCenter }} 
  </v-btn>
  
  <v-divider class="sidebar__divider"></v-divider>

   <v-btn text v-if="name" class="sidebar__name">
    {{ name }} 
  </v-btn>

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
    },
    helpCenter: {
      type: String,
      required: false
    },
    helpIcon: {
      type: String,
      required: false
    },
    name: {
      type: String,
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

.list-item__suboption, .list-item__icon, .list-item__title, .sidebar__help-center, .sidebar__name, .sidebar__divider {
  color: white !important;
}

.sidebar__list-group {
 
}

.v-list-item__title {

}



</style>


