<!-- script -->
<script>

import { RouterLink } from  "vue-router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();


export default {
  name: 'AppNavbar',
  components: { RouterLink },
  // methods: {
  //   logIn(){
  //     const auth = getAuth();
  //     signInWithPopup(auth, provider)
  //         .then((result) => {
  //           // This gives you a Google Access Token. You can use it to access the Google API.
  //           const credential = GoogleAuthProvider.credentialFromResult(result);
  //           const token = credential.accessToken;
  //           // The signed-in user info.
  //           const user = result.user;
  //           // IdP data available using getAdditionalUserInfo(result)
  //           // ...
  //         }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  //   }
  // }

}

</script>

<template>
<button class="btn" @click="logIn()">Log in</button>

<header>
  <nav class="container">
    <!-- logo using router link -->
    <div class="branding">
      <router-link to="/">
        <div class="row">
          <div class="col-2">
            <img src="../../assets/meepleLogo.png">
          </div>
          <div class="col ps-4 pt-1">
            <h1>Meet Your Meeples</h1>
          </div>
        </div>
      </router-link>
    </div>

    <!-- page links -->
    <ul class="nav-routes">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>

      <div class="dropdown">
        <router-link class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Account
        </router-link>
        <ul class="dropdown-menu">
          <li class="pt-1 ps-3"><router-link to="/account" style="color: black">Account</router-link></li>
          <li class="ps-3 pt-3"><router-link to="/resources" style="color: black">Resources</router-link></li>
        </ul>
      </div>

    </ul>
  </nav>
</header>


</template>

<!-- style : scoped -->
<style lang="sass" scoped>
// importing personal scss
@import "../../scss/variables"
#link
  text-decoration: none
header
  background-color: $blu-dark
  nav
    display: flex
    align-items: center
    height: 80px
    .branding
      display: flex
      align-items: center
      gap: 15px
      img
        max-width: 50px
      h1
        margin-top: 10px
        font-size: 24px
        color: $text-light
      a
        text-decoration: none

    .nav-routes
      margin-top: 20px
      display: flex
      flex: 1
      justify-content: flex-end
      gap: 30px
      list-style: none
      a
        text-decoration: none
        color: $text-light

#login-btn
  text-decoration: none
  color: black
  background-color: $pop-light
  border-color: $pop-light

//  app watch state changed
// app- component
//import sign in with pop up
// firebase js you need to define auth

</style>