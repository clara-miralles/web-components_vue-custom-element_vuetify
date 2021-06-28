<template>
    <v-list>
        <v-list-item
          v-for="menu in menus"
          :key="menu.title"
        >
        {{menu}}
      </v-list-item>
    </v-list>
</template>

<script>

export default {
  name: "SideMenu",
  props: {
    menus: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      
    }
  }
 
};
</script>

<style lang="scss" scoped>

</style>
