<template>
    <v-list>
        <v-list-item
          v-for="menu in menus"
          :key="menu.title"
        >
      </v-list-item>
    </v-list>
</template>

<script>
// import sidebarData from ".././services/sidebarService";

export default {
  name: "SideMenu",
  data() {
      return {
        menus: [ 
          { 
            title: "dashboard",
          },
          {
            title: "layouts"
          },
          {
            title: "tags,"
          },
          {
            title: "map"
          },
          {
            title: "users"
          },
          {
            title: "archive"
          },
          {
            title: "downloads"
          }
        ]
      };
    },

};
</script>

<style lang="scss" scoped>

</style>
