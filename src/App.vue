<template>
  <div class="container">
    <NavbarComp />
    <router-view />
  </div>
</template>

<script>

import NavbarComp from './components/NavbarComp.vue'

export default {
  name: 'App',
  components: {
     NavbarComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
