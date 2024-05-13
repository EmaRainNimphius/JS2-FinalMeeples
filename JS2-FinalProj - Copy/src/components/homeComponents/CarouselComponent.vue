<!-- script -->
<script setup>
import { RouterLink } from  "vue-router";

</script>

<!-- template -->
<template>
  <!-- carousel -->
  <div id="carouselExample" class="carousel slide">
    <!-- carousel content -->
    <div class="carousel-inner">
      <!-- slide 1 : our purpose - active -->
      <div class="carousel-item active">
        <!-- images -->
        <span class="full-img"><img src="../../assets/carousel-img3.jpg" id="image-one" class="d-block w-100 h-100" ></span>
        <span class="short-img"><img src="../../assets/carousel-color-block.jpg" id="image-one" class="d-block w-100 h-100" ></span>
        <!-- content -->
        <div class="content position-absolute bottom-0 pb-4 text-light">
          <div class="row">
            <div class="col-md-5"></div>
            <div class="col ms-5 me-2" style="color: black">
              <h1 class="title mb-0 pb-2">Our Purpose</h1>
              <span class="fs-4 short-text"><hr class="mt-0 mb-0"><br>We're here to create an app that encourages individuals
              with DID to maintain a healthier mental state.</span><br>
              <span class="fs-4 full-text me-0">Our purpose is to create an application that encourages individuals
                with DID to maintain a healthier mental state. Let us help you keep track of memories, alters, situations, and daily life through journaling, alter tracking,
                app usage, and a new approach to DID.</span><br><br>
              <!-- Btn : About Us -->
              <router-link to="/about">
                <button class="btn btn-lg btn-warning">About Us</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- slide 2 : what is DID? -->
      <div class="carousel-item">
        <!-- images -->
        <span class="full-img"><img src="../../assets/carousel-img2.jpg" id="image-one" class="d-block w-100 h-100" ></span>
        <span class="short-img"><img src="../../assets/carousel-color-block.jpg" id="image-one" class="d-block w-100 h-100" ></span>
        <!-- content -->
        <div class="content position-absolute bottom-0 pb-4 text-light">
          <div class="row">
            <div class="col-md-5"></div>
            <div class="col ms-5 me-2" style="color: black">
              <h1 class="title mb-0 pb-2">What Is DID?</h1>
              <span class="fs-4 short-text"><hr class="mt-0 mb-0"><br>A mental health condition that's characterized
                by having of two or more different alternative identities.</span><br>
              <span class="fs-4 full-text">Dissociative Identity Disorder (DID) is a mental health condition that is characterized
                by the existence of two or more different alternative identities or alters
                (but we like to call them Meeples). These alternate identities or alters, can cause drastic
                change in mood, appearance, behavior, and memory.</span><br><br>
              <!-- Btn : Learn More -->
              <router-link to="/resources" >
                <button class="btn btn-lg btn-warning">Learn More</button>
              </router-link>
            </div>
          </div>
        </div>

      </div>

      <!-- slide 3 : about us -->
      <div class="carousel-item">
        <!-- images -->
        <span class="full-img"><img src="../../assets/carousel-img1.jpg" id="image-one" class="d-block w-100 h-100" ></span>
        <span class="short-img"><img src="../../assets/carousel-color-block.jpg" id="image-one" class="d-block w-100 h-100" ></span>
        <!-- content -->
        <div class="content position-absolute bottom-0 pb-4 text-light">
          <div class="row">
            <div class="col-md-3 me-5"></div>
            <div class="col ms-5 me-2" style="color: black">
              <h1 class="title mb-0 pb-2">About Us</h1>
              <span class="fs-4 short-text"><hr class="mt-0 mb-0"><br>We are here to assist individuals with Dissociative
                Identity Disorder (DID). Let's develop together.</span><br>
              <span class="fs-4 full-text">We are here to assist individuals with Dissociative Identity Disorder (DID).
                <br><br>Through personal study and experience we hope to provide an application to individuals
                who suffer with DID. We want to help you and your system build healthy habits. </span><br><br>
              <!-- Btn : Learn More -->
              <router-link to="/about">
                <button class="btn btn-lg btn-warning">Sign Up</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- carousel slider buttons -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<!-- style -->
<style lang="sass" scoped>
@import "src/scss/_variables.scss"

.carousel-item
  height: 26rem
  color: white
  position: relative
  background-position: center
  background-size: cover

@media (max-width: 400px)
  .carousel-item
    height: 26rem
    .content
      margin-right: 55px


#carouselExample
  bottom: 0
  left: 0
  right: 0



// carousel image sizing
.short-img
  display: none
@media (max-width: 770px)
  .short-img
    display: inline
  .full-img
    display: none


.content
  //margin-left: 300px
  padding-bottom: 100px
  margin-right: 160px


  // CAROUSEL TEXT DISPLAYED DEPENDING ON SCREEN SIZE
  // Hide short text by default
  .short-text
    display: none
  // hide full text and show short text

  @media (max-width: 925px)
    .title
      font-weight: 100
      margin-left: 30px
    .short-text
      display: inline-block
      margin-left: 30px
    .btn
      margin-left: 30px
    .full-text
      display: none




  p
    margin-top: 20px
  a
    margin-top: 25px

.btn
  background-color: $pop-light
  border-radius: 5px
  color: white
</style>