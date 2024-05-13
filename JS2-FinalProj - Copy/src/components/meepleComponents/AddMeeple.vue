<script>
import {addDoc} from "firebase/firestore";
import { meeplesDb } from "@/firebase";

export default {
  name: "AddMeeple",
  props: {
    item: Object,
  },
  data() {
    return{
      meepleName: '',
      meepleAge: '',
      meepleRole: '',
      meepleGender: '',
      meepleDescription: '',
    }
  },
  methods: {
    async createDocument(e){
      e.preventDefault();
      let upload = {
        meepleName: this.meepleName,
        meepleAge: this.meepleAge,
        meepleRole: this.meepleRole,
        meepleGender: this.meepleGender,
        meepleDescription: this.meepleDescription,
      }
      await addDoc(meeplesDb, upload);

      this.meepleName = '';
      this.meepleAge = '';
      this.meepleRole = '';
      this.meepleGender = '';
      this.meepleDescription = '';

    },
  },
}
</script>

<template>

  <div class="mt-4 mb-3">
    <button class="btn px-4 text-white"
            id="addBtn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addModal"
            style="background-color: #027353">
      Add Meeple
    </button>
  </div>

  <!-- add meeple modal -->
  <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- header -->
        <div class="modal-header">
          <h1 class="modal-title fs-3" id="addModalLabel">Add New Meeple</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- body -->
        <div class="modal-body">

          <form class="row g-3">
            <!-- row : name & age -->
            <div class="row mt-3">
              <!-- name -->
              <div class="col">
                <div class="input-group mb-3">
                  <input v-model="meepleName" type="text" class="form-control" aria-label="meeple name" placeholder="Name or Nickname" required>
                </div>
              </div>
              <!-- age -->
              <div class="col-4">
                <div class="input-group mb-3">
                  <input v-model="meepleAge" type="number" class="form-control" aria-label="meeple age" placeholder="Age">
                </div>
              </div>
            </div>
            <!-- row : role -->
            <div class="row">
              <div class="input-group mb-3">
                <input v-model="meepleRole" id="role" type="text" class="form-control" aria-label="meeple role" placeholder="Meeple's Role" required>
              </div>
            </div>
            <!-- row : gender -->
            <div class="row">
              <div class="input-group mb-3">
                <select v-model="meepleGender" class="form-select bg-body-secondary" id="filter">
                  <option selected disabled value="">Select Meeple Gender</option>
                  <option class="option-item" value="Female">Female</option>
                  <option class="option-item" value="Male">Male</option>
                  <option class="option-item" value="Genderfluid">Genderfluid</option>
                  <option class="option-item" value="Non-Binary">Non-Binary</option>
                  <option class="option-item" value="Unsure">Unsure</option>
                </select>
              </div>
            </div>
            <!-- row : description -->
            <div class="row">
              <div class="input-group mb-3">
                <label for="description" class="form-label"></label>
                <textarea v-model="meepleDescription" type="text" class="form-control"  id="description" placeholder="What does meeple do?" required></textarea>
              </div>
            </div>
            <!-- modal footer -->
            <div class="modal-footer">
              <!-- add meeple btn -->
              <div class="col mx-2">
                <button @click="createDocument"
                        class="btn text-white"
                        type="submit"
                        style="background-color: #027353"
                        data-bs-dismiss="modal">
                  Add Meeple
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
