<template>
    <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item
          class="mt-4">
          <v-list-item-action>
            <v-icon>mdi-mouse</v-icon>
          </v-list-item-action>
          <v-list-item-title>Option 1</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-mouse</v-icon>
          </v-list-item-action>
          <v-list-item-title>Option 2</v-list-item-title>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">FRIENDS</v-subheader>
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text">
            <v-list-item-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-4">mdi-mouse</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Waik and Baik</span>
      </v-toolbar-title>
      <v-btn v-on:click="switchTheme()"><v-icon class="mx-4">mdi-mouse</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-layout align-center style="max-width: 650px">
        <v-text-field :append-icon-cb="() => {}" placeholder="Search..." single-line append-icon="mdi-mouse" hide-details></v-text-field>
      </v-layout>
    </v-app-bar>
    </div>
</template>

<script>
import { data } from '../data'
import firebase from 'firebase'
import { db } from '../main'
  export default {
    data: () => ({
        myData: data,
        drawer: null,
        items: [
            { text: 'Most Popular' },
            { text: 'Friends' }
        ],
        items2: [
            { picture: 3, text: 'Apple' },
            { picture: 1, text: 'Banana' }
        ],
    }),
    methods: {
        switchTheme() {
            this.$vuetify.theme.dark = this.myData.user.usesDarkTheme = !this.myData.user.usesDarkTheme;
            db.collection('users').doc(this.myData.user.id).update({
                usesDarkTheme: this.myData.user.usesDarkTheme
            })
        }
    }
  }
</script>