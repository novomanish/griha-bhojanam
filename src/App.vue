<template>
  <div id="app">
    <v-app>
      <v-toolbar app></v-toolbar>
      <v-content>
          <v-container fluid><router-view/></v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
  import('vuetify/dist/vuetify.min.css')

  export default {
    name: 'app'
  }
</script>

<!-- CSS libraries -->
<style src='normalize.css/normalize.css'></style>

<style>
  @import url(http://fonts.googleapis.com/icon?family=Material+Icons);
  @import 'vuetify/src/stylus/main.styl'

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
