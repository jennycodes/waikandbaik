import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import "@firebase/firestore"
import { firestorePlugin } from 'vuefire'
import vuetify from './plugins/vuetify';

Vue.use(firestorePlugin)

Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAA_iM0U7bvQU_ouZ7miHxSf-3jmjJ39Ks",
  authDomain: "waikandbaik.firebaseapp.com",
  databaseURL: "https://waikandbaik.firebaseio.com",
  projectId: "waikandbaik",
  storageBucket: "",
  messagingSenderId: "490105488710",
  appId: "1:490105488710:web:966b32367bce2087"
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

export { firebase }
export const db = firebaseApp.firestore()