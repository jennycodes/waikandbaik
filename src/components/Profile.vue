<template>
  <div>
    <v-card max-width="534" class="mx-auto">
      <v-layout>
        <v-flex shrink>
          <v-avatar class="profile" :size="$vuetify.breakpoint.smAndUp ? 164 : 128" color="grey">
            <v-img v-bind:src=myData.user.photoUrl></v-img>
          </v-avatar>
        </v-flex>
        <v-flex>
        <v-layout align-end fill-height>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">{{myData.user.name}}</v-list-item-title>
              <v-list-item-subtitle>{{myData.user.aboutMe}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
    <v-btn v-if="!myData.loggedOut" @click="$refs.inputUpload.click()">Upload</v-btn>
    <input v-show="false" ref="inputUpload" type="file" v-on:change="convertImage" id="uploadImage" accept="image/png, image/jpeg">
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'
import { data } from '../data'

export default {
  data() {
      return {
          myData: data
      }
  },
  methods:{
    sendPostRequest(inputImage) {
          var obj = this
          $.ajax({
            url: 'https://api.imgur.com/3/upload',
            type: 'POST',
            headers: {
              Authorization: 'Bearer ' + obj.imgurData.second.access_token,
              Accept: 'application/json'
            },
            data: {
              image: inputImage,
              type: 'base64'
            },
            success: function(data) {
              console.log(data);
            }
          });
        },
        convertImage(evt) {
          var obj = this
          var f = evt.target.files[0];
          var reader = new FileReader();
          reader.onload = (function(theFile) {
            return function(e) {
              var binaryData = e.target.result;
              var base64String = window.btoa(binaryData);
              obj.sendPostRequest(base64String)
              };
          })(f);
          reader.readAsBinaryString(f);
        }
  }
}
</script>

<style>

</style>
