<template>
  <div id="app">
    <icon-views></icon-views>
  </div>
</template>

<script>
import IconViews from './views/iconViews.vue'
export default {
  name: 'App',
  components: {
    IconViews
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
