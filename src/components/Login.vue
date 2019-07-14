<template>
    <div>
        <button v-on:click="signIn">Sign In</button>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Login',
    data() {
        return {};
    },
    methods: {
        signIn() {
            const provider = new firebase.auth.GoogleAuthProvider()
            
            firebase.auth().signInWithPopup(provider).then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });       
        }
    }
}
</script>



<style>
</style>