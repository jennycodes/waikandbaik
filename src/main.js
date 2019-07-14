import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAA_iM0U7bvQU_ouZ7miHxSf-3jmjJ39Ks",
  authDomain: "waikandbaik.firebaseapp.com",
  databaseURL: "https://waikandbaik.firebaseio.com",
  projectId: "waikandbaik",
  storageBucket: "",
  messagingSenderId: "490105488710",
  appId: "1:490105488710:web:966b32367bce2087"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')

export { firebase }