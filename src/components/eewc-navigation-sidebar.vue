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
    <v-list-group
      :value="true"
      prepend-icon="mdi-account-circle"
    >
    <v-list-item v-for="(menu, index) in menus" :key="index">
        <v-list-item-icon>
          <v-icon class="list-item__icon">mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title 
          :ripple="false"
          class="list-item__title">{{ menu }}
          
           <v-list-group
            :value="true"
            no-action
            sub-group
           >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-for="(layout, index) in layouts"  :key="index" class="list-item__suboption">
                  {{ layout }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-group>
        
        </v-list-item-title>
      </v-list-item>

     
    </v-list-group>
  </v-list>

    <div v-if="helpCenter" class="help-center"> 
      <v-icon>{{ helpIcon }}</v-icon>
      {{ helpCenter }} 
    </div> 

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
    layouts: {
      type: Array,
      required: true
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
.help-center {
  color: white;
}

.list-item__suboption {
  color: white;
}

.list-item__icon {
  color: white !important;
}

.list-item__title{
  color: white !important;
}

</style>


