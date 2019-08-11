<template>
    <div>
        <v-btn v-on:click="signIn">Sign In</v-btn>
    </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'
import { data } from '../data'
export default {
    name: 'Login',
    data() {
        return {
            myData: data
        }
    },
    methods: {
        signIn() {
            const provider = new firebase.auth.GoogleAuthProvider()
            var obj = this
            firebase.auth().signInWithPopup(provider).then(function(result) {
                console.log(result.user.uid)
                var user = {
                    name: result.user.displayName,
                    accountName: null,
                    usesDarkTheme: true,
                    id: result.user.uid,
                    photoUrl: result.user.photoURL,
                    aboutMe: "Welcome to my page!"
                }
                db.collection('users').doc(result.user.uid).set(user)
                obj.myData.user = user
                obj.$vuetify.theme.dark = user.usesDarkTheme
                obj.myData.loggedOut = false
            }).catch(function(error) {
                console.log(error)
            })
        }
    }
}
</script>



<style>
</style>
