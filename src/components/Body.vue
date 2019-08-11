<template>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
              <Login v-if="myData.loggedOut"/>
              <Profile v-if="!myData.loggedOut"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
  import Login from '../components/Login.vue'
  import { imgur } from '../imgur' 
  import JQuery from 'jquery'
  import { data } from '../data'
  import Profile from '../components/Profile.vue'
  let $ = JQuery
  export default {
    props: {
      source: String,
    },
    components: {
        Login,
        Profile
    },
    data: () => ({
      drawer: null,
      imgurData: imgur,
      myData: data
    })
  }
</script>