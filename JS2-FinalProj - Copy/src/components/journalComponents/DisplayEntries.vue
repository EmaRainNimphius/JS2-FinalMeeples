<script>
import { journalDb} from "@/firebase.js";
import { doc, deleteDoc } from "firebase/firestore";

let nextId = 1;

export default {
  name: "DisplayEntries",
  data(){
    return{
      documents: [],
      id: nextId++
    }
  },
  firestore: {
    documents:journalDb
  },
  methods: {
    async deleteEntry(id) {
      await deleteDoc(doc(journalDb, id));
    }
  }
}
</script>

<template>
  <div class="container">
    <table class="table">
      <thead>
      <tr class="fs-5">
        <th scope="col">Entry Date</th>
        <th scope="col">Category</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="document in documents" :key="document.type" >
        <!-- entry table content-->
        <td class="fs-5 pb-0"> {{ document.entryDate }} </td>
        <td class="fs-5 pb-0"> {{ document.entryCategory }} </td>
        <td class="fs-5 pb-0"> {{ document.entryTitle }} </td>
        <td class="fs-5 pb-0"> {{ document.entryDescription }} </td>
        <!-- delete btn -->
        <td class="pb-0"><p @click="deleteEntry(document.id)" id="delete" class="btn btn-outline-none fw-bold fs-4 p-0 m-0">X</p></td>
        <!-- edit btn -->
        <td class="pb-0">
          <p class="pt-1" type="button" data-bs-toggle="modal" :data-bs-target="'#entryModal' + document.id">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg>
          </p>
        </td>

        <!-- entry modal -->
        <div class="modal fade" :id="'entryModal' + document.id" tabindex="-1" aria-labelledby="entryModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="entryModalLabel"> {{ document.entryTitle }} </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>{{ document.entryContent }}</p>



                <span>
                  IMAGE:<br>
                  <img :src=" document.entryImg " alt="">
                </span>



              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/variables";

#delete{
  width: 10px;
  height: 10px;
  color: $delete;
}

</style>