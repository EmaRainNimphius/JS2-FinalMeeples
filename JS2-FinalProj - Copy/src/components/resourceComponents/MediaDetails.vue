<script>
import {addDoc} from "firebase/firestore";
import { savedResourcesDb } from "@/firebase.js";

let nextId = 1;

export default {
  name: "MediaDetails",
  data() {
    return{
      id: nextId++
    }
  },
  props: {
    item: Object,
  },
  methods: {
    async createDocument(){
      console.log("Resource Saved");
      let upload = {
        wrapperType: this.item.wrapperType,
        type: this.item.type,
        collectionName: this.item.collectionName,
        artistName: this.item.artistName,
        artworkUrl100: this.item.artworkUrl100,
        primaryGenreName: this.item.primaryGenreName,
        collectionViewUrl: this.item.collectionViewUrl,
      }
      await addDoc(savedResourcesDb, upload);
    },
  },
}
</script>

<template>

  <!--

  Full heart button symbol thing
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
    </svg>

   -->


  <div v-if="item.wrapperType === 'audiobook' || item.kind === 'podcast'">

    <div class="card p-2">
      <div class="row">
        <div class="col-2 align-self-center">
          <!-- media image -->
          <img id="smImage" :src="item.artworkUrl100 " alt="image">
        </div>

        <!-- media content -->
        <div class="col pt-1 pb-1 ps-0">

          <div class="row">
            <!-- title -->
            <div class="col">
              <span class="fw-bold">Title: </span>{{ item.collectionName }}<br>
            </div>
            <!-- save btn -->
            <div class="col-1 pt-0 align-self-center">

              <svg id="save" @click="createDocument" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart pb-1" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg>
            </div>
          </div>
          <!-- line break -->
          <hr class="mt-1 mb-2">
          <!-- media info -->
          <div class="row">
            <div class="col">
              <span class="fw-bold">Genre: </span>{{ item.primaryGenreName }}<br>
              <span class="fw-bold">Author: </span>{{ item.artistName }}<br>
              <span class="fw-bold">Media Type: </span>{{ item.type }}<br>
            </div>

            <!-- more details -->
            <div class="col-2 me-5 align-self-center">
              <a :href='item.collectionViewUrl' target='_blank' rel='noreferrer'>
                <button id="details"
                        class="btn fs-5 btn-warning"
                        type="button">
                  More Details
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../scss/variables";

#details {
  background-color: $pop-light;
  border-radius: 5px;
  color: white;
}
#smImage {
  height: 130px;
  width: 130px;
}

#detailsImage{
  height: 200px;
  width: 200px;
}

#save{
  cursor: pointer;
}

</style>