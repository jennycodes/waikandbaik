<template>
    <div>
        <button v-on:click="signIn">Sign In</button>
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
                    id: result.user.uid,
                    photoUrl: result.user.photoURL
                }
                db.collection('users').doc(result.user.uid).set(user)
                obj.myData.user = user
            }).catch(function(error) {
                console.log(error)
            })
        }
    }
}
</script>



<style>
</style>
