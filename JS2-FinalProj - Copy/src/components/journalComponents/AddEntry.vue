<script>
import {addDoc} from "firebase/firestore";
import { journalDb } from "@/firebase";


export default {
  name: "AddEntry",
  props: {
    item: Object,
  },
  data() {
    return{
      entryTitle: '',
      entryDate: '',
      entryCategory: '',
      entryDescription: '',
      entryContent: '',
      entryImg: '',
    }
  },
  methods: {
    async createDocument(e){
      e.preventDefault();
      let upload = {
        entryTitle: this.entryTitle,
        entryDate: this.entryDate,
        entryCategory: this.entryCategory,
        entryDescription: this.entryDescription,
        entryContent: this.entryContent,
        entryImg: this.entryImg,
      }

      await addDoc(journalDb, upload);

      this.entryTitle = '';
      this.entryDate = '';
      this.entryCategory = '';
      this.entryDescription = '';
      this.entryContent = '';
      this.entryImg = '';

    },
  },
}
</script>

<template>

  <div class="container mt-4 mb-3">
    <button class="btn text-white"
            id="addBtn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addModal"
            style="background-color: #027353">
      New Journal Entry
    </button>
  </div>

  <!-- new journal entry modal -->
  <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- header -->
        <div class="modal-header">
          <h1 class="modal-title fs-3" id="addModalLabel">New Journal Entry</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- body -->
        <div class="modal-body">
          <form class="row g-3">

            <!-- row : title -->
            <div class="row mt-3">
              <div class="col">
                <div class="input-group">
                  <input v-model="entryTitle" type="text" class="form-control" aria-label="entry title" placeholder="Entry Title" required>
                </div>
              </div>
            </div>

            <!-- row : category & entry date -->
            <div class="row mt-3">
            <!-- category -->
            <div class="col">
              <div class="input-group mb-3">
                <select v-model="entryCategory" class="form-select bg-body-secondary" id="filter">
                  <option selected disabled value="">Select Entry Category</option>
                  <option class="option-item" value="Daily Journal">Daily Journal</option>
                  <option class="option-item" value="Overview of Day">Overview of Day</option>
                  <option class="option-item" value="Rant">Rant</option>
                  <option class="option-item" value="Reflection">Reflection</option>
                  <option class="option-item" value="School Based">School Based</option>
                  <option class="option-item" value="Home Based">Home Based</option>
                  <option class="option-item" value="Family Based">Family Based</option>
                  <option class="option-item" value="Social Based">Social Based</option>
                </select>
              </div>
            </div>


            <!-- date -->
            <div class="col">
              <div class="input-group mb-3">
                <span class="input-group-text" id="date" style="background-color: #f1f1f1">Entry Date</span>
                <input v-model="entryDate" type="date" class="form-control" aria-label="entry date" required>
              </div>
            </div>

            </div>

            <!-- row : description -->
            <div class="row mb-3">
              <div class="col">
                <div class="input-group">
                  <input v-model="entryDescription" type="text" class="form-control" aria-label="entry description" placeholder="Brief description" required>
                </div>
              </div>
            </div>

            <!-- row : upload image -->
            <div class="row mb-3">
              <div class="col">
                <div class="input-group">
                  <input v-change="entryImg" type="file" class="form-control" id="customFile" />
                </div>
              </div>
            </div>

            <!-- row : content -->
            <div class="row">
              <div class="input-group mb-3">
                <label for="description" class="form-label"></label>
                <textarea v-model="entryContent" type="text" class="form-control" id="description" placeholder="Let's start reflecting..." required></textarea>
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
                  Add Entry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#addBtn{
  width: 200px;
}
</style>