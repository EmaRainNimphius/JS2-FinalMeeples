<script>
import AddEntry from "@/components/journalComponents/AddEntry.vue";
import DisplayEntries from "@/components/journalComponents/DisplayEntries.vue";

export default {
  name: "JournalView",
  components: {DisplayEntries, AddEntry  },
}
</script>

<template>
  <AddEntry/>
  <DisplayEntries/>
</template>



