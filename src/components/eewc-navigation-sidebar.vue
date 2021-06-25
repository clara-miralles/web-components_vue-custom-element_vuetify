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

export default {
  name: "SideMenu",
  props: {
    menus: {
      type: Array,
      required: true
    }
  }
 
};
</script>

<style lang="scss" scoped>

</style>
