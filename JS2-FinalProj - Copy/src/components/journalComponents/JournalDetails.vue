<script>
import {addDoc} from "firebase/firestore";
import { journalDb } from "@/firebase.js";
export default {
  name: "JournalDetails",
  props: {
    item: Object,
  },
  methods: {
    async createDocument(){
      let upload = {
        entryTitle: this.item.entryTitle,
        entryDate: this.item.entryDate,
        entryCategory: this.item.entryCategory,
        entryDescription: this.item.entryDescription,
        entryContent: this.item.entryContent,
        entryImg: this.item.entryImg,
      }
      await addDoc(journalDb, upload);
    },
  },
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div v-if="item.type === 'journalEntry'">
        <span>
          Title: {{ item.entryTitle}}<br>
          Date: {{ item.entryDate }}<br>
          Category:{{ item.entryCategory }}<br>
          Description:{{ item.entryDescription }}<br>
          Content:{{ item.entryContent }}<br>
          Image:{{ item.entryImg }}<br>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../scss/variables";


</style>