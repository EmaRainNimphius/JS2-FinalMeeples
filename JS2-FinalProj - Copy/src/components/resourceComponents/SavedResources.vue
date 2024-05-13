<script>
import { savedResourcesDb } from "@/firebase.js";
import { doc, deleteDoc } from "firebase/firestore";

export default {
  name: "SavedResources",
  data(){
    return{
      documents: []
    }
  },
  firestore: {
    documents:savedResourcesDb
  },
  methods: {
    async removeResource(id) {
      await deleteDoc(doc(savedResourcesDb, id));
    }
  }
}
</script>

<template>

<!-- displaying the info in firebase:
    https://vuefire.vuejs.org/guide/realtime-data.html#Declarative-realtime-data -->
  <ol v-for="document in documents" :key="document.type" class="ps-0">
    <div class="card p-2">
      <div class="row">
        <div class="col-2 align-self-center">
          <span>
            <!-- delete -->
            <button @click="removeResource(document.id)" id="delete" class="btn btn-outline-none fw-bold fs-3 p-0 me-3 ms-1">X</button>
            <!-- image -->
            <button id="moreDetails" class="btn p-0">
              <img :src="document.artworkUrl100 " alt="image">
            </button>
          </span>
        </div>
        <!-- information -->
        <div class="col pt-1 pb-1">
          <span class="fw-bold">Title: </span>{{ document.collectionName }}<br>
          <hr class="mt-1 mb-2">
          <span class="fw-bold">Genre: </span>{{ document.primaryGenreName }}<br>
          <span class="fw-bold">Author: </span>{{ document.artistName }}<br>
          <span class="fw-bold">Media Type: </span>{{ document.type }}<br>
        </div>
      </div>
    </div>
  </ol>

</template>

<style lang="scss" scoped>
@import "../../scss/variables";

#delete{
  width: 40px;
  height: 40px;
  color: $delete;
}

#moreDetails{
  width: 102px;
  border-radius: 0;
}

</style>