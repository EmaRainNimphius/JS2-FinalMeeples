<script>
import ContentDetails from "@/components/contentComponents/ContentDetails.vue";
import Content from "@/models/Content.js";
import ContentList from "@/components/contentComponents/ContentList.vue";
import LibraryCollection from "@/models/LibraryCollection.js";

export default {
  name: 'AboutView',
  components: { ContentList, ContentDetails },
  data(){
    return {
      Contents: new LibraryCollection()
          .addItem(new Content('ContentCard', "What's a Dissociative System?", 'When an' +
              'individual has DID, their brain now consists of separate alters. These alters create a dissociative system that allows the host to function property.'))
          .addItem(new Content('ContentCard', "What's an Alter?",'Alters or Meeples' +
              'are alternative identities that make up a dissociative system. Alters/Meeples take on separate roles and ' +
              'tasks that allow the host to function.'))
          .addItem(new Content('ContentCard', "What's a Host?", 'A host in is the individual or alter' +
              'that either has DID or the individual that "fronts" the most within the system. This individual takes primary responsibility for the system and body.'))
    }
  }
}

</script>

<template>
  <div class="container">
    <div class="item-list">
      <!-- organizes content -->
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-2">
        <!-- display content -->
        <div v-for="Content in Contents">
          <div v-if="Content.type === 'Content'">
            <ContentList :item="Content.category"/>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
