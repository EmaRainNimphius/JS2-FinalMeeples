<script>
import AddMeeple from "@/components/meepleComponents/AddMeeple.vue";
import DisplayMeeple from "@/components/meepleComponents/DisplayMeeple.vue";
export default {
  name: "MeepleView",
  components: { AddMeeple, DisplayMeeple },
}
</script>

<template>

<div class="container">
  <AddMeeple/>
  <DisplayMeeple/>

</div>


</template>

<style lang="scss" scoped>

</style>