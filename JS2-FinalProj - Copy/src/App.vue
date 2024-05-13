<script>
import { RouterView } from 'vue-router'
import AppNavbar from '/src/components/sharedComponents/AppNavbar.vue'
import AppFooter from '/src/components/sharedComponents/AppFooter.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default {
  components: { RouterView, AppNavbar, AppFooter },
  data(){
    return {
      authUser: null,
    }
  },
  // methods: {
  //   created() {
  //     const auth = getAuth();
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // User is signed in, see docs for a list of available properties
  //         // https://firebase.google.com/docs/reference/js/auth.user
  //         const uid = user.uid;
  //         console.log(uid)
  //         // ...
  //       } else {
  //         // User is signed out
  //         // ...
  //       }
  //     });
  //   }
  // }
}
</script>

<template>
  <AppNavbar />
  <RouterView :auth-user="authUser" />
  <AppFooter />
</template>

<style>

</style>
