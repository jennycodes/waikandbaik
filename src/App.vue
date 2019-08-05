<template>
  <div id="app">
    <Login v-if="myData.isLoggedOut"/>
    <Profile v-if="!myData.isLoggedOut"/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import Toolbar from './components/Toolbar.vue'
import { data } from './data'
export default {
  name: 'app',
  components: {
    Login,
    Profile,
    Toolbar
  },
  data() {
    return {
      myData: data
    }
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
