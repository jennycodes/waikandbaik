<template>
  <div id="app">
    <Login msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import Toolbar from './components/Toolbar.vue'

export default {
  name: 'app',
  components: {
    Login,
    Profile,
    Toolbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
