<script>
import {addDoc} from "firebase/firestore";
import { meeplesDb } from "@/../../firebase";

export default {
  name: "MeepleDetails",
  props: {
    item: Object,
  },
  methods: {
    async createDocument(){
      let upload = {
        meepleName: this.item.meepleName,
        meepleAge: this.item.meepleAge,
        meepleRole: this.item.meepleRole,
        meepleDescription: this.item.meepleDescription,
        meepleGender: this.meepleGender,
      }
      await addDoc(meeplesDb, upload);
    },
  },
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div v-if="item.type === 'meeple'">
        <span>
          name: {{ item.meepleName}}<br>
          age: {{ item.meepleAge }}<br>
          role:{{ item.meepleRole }}<br>
          gender:{{ item.meepleGender }}<br>
          description:{{ item.meepleDescription }}<br>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../scss/variables";

h3{
  color: $gray-blu;
}
img{
  height: 130px;
  width: 130px;
}
#details{
  background-color: $dusty-pl;
  color: white;
}
.card{
  min-height: 400px;
}
#saveResource{
  background-color: $blu-dark;
  color: white;
}
#titleDrop{
  width: 100%;
  border: none;
  text-align: start;
  background-color: #2c3e50;
  color: white;
}

</style>