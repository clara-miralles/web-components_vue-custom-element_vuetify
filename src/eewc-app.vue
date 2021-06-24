<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <FirstComponent/>
    </v-main>
  </v-app>
</template>

<script>
import FirstComponent from './components/first-component';

export default {
  name: 'App',

  components: {
    FirstComponent,
  },

  data: () => ({
    //
  }),
};
</script>
