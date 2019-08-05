<template>
    <div>
        <div>
            {{myData.user.name}}
        </div>
        <img src="myData.user.photoUrl">
        <div>
            <button v-on:click="signOut">Sign Out</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'
import { data } from '../data'
export default {
    name: 'Profile',
    data() {
        return {
            myData: data
        }
    },
    methods: {
        signOut() {
            var obj = this
            obj.myData.isLoggedOut = true
        }
    }
}
</script>

<style>

</style>
