<!-- script -->
<script setup>
// imports
import { RouterLink } from  "vue-router";
</script>

<template>

<header>
  <nav class="container">
    <!-- logo using router link -->
    <div class="branding">
      <router-link to="/">
        <div class="row">
          <div class="col-md-2" style="padding-top: 16%">
            <img id="logo" src="../../assets/brand.webp">
          </div>
          <div class="col">
            <span class="full-text"><h1 style="padding-top: 20%">Meet Your Meeples</h1></span><br><br>
          </div>
        </div>
      </router-link>
    </div>

    <!-- page links -->
    <ul class="nav-routes">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About <span class="full-text">Us</span></router-link>

      <div class="dropdown">
        <router-link class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Account
        </router-link>
        <ul class="dropdown-menu">
          <li class="pt-1 ps-3"><router-link to="/account" style="color: black">Account</router-link></li>
          <li class="ps-3 pt-3"><router-link to="/meeple" style="color: black">Your Meeples</router-link></li>
          <li class="ps-3 pt-3"><router-link to="/journal" style="color: black">Journal</router-link></li>
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
        max-width: 35px
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

@media (max-width: 925px)
  .full-text
    display: none
  #logo
    padding-top: 30px
    margin-left: 15px

</style>