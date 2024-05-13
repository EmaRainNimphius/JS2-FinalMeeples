<script>
import ContentDetails from "@/components/contentComponents/ContentDetails.vue";
import Content from "@/models/Content.js";
import ContentList from "@/components/contentComponents/ContentList.vue";
import LibraryCollection from "@/models/LibraryCollection.js";

export default {
  name: 'ContentBlocks',
  components: { ContentList, ContentDetails },
  data(){
    return {
      Contents: new LibraryCollection()
          .addItem(new Content('ContentBlock',
                                  'About Us',
                                'Through personal study and experience we hope to provide an application to individuals' +
                            '           who suffer with DID. We want to help you and your system build healthy habits,' +
                            '           help to develop self awareness in addition to creating a safe and welcoming environment' +
                            '           for tracking a systems development. We hope to encourage individuals with DID to continue their' +
                            '           exploration and DID journey through the use of our forever developing application.',
                              "We're here to support you through your mental health journey. " +
              "                         Let's get better together.",
                                   "/src/assets/quote.jpg"))
          .addItem(new Content('ContentBlock',
                                  'Our Purpose',
                                'Our purpose is to create an application that encourages individuals' +
                            '           with DID to maintain a healthier mental state by keeping track of preexisting or newly' +
                            '           developed alters (or in our case meeples). This can be done through journaling, keeping' +
                            '           track of experiences and memories. Individuals are able to share memories,' +
                            '           topics of concern, or daily life with other alters within their own DID system.' +
                            '           Since individuals that suffer from DID can experience severe memory loss' +
                            '           it’s important for said individuals to have access to resources that not only' +
                            '           encourage them to continue a normal and healthy lifestyle, but a' +
                            '           lifestyle that benefits them and their disorder.',
                              "We're here to help and to develop with you. Let us help you create a safe place.",
                                   "/src/assets/mental-health.jpg"))

          .addItem(new Content('ContentBlock',
                                    'What is DID?', 'Dissociative Identity Disorder (DID) is a mental health condition ' +
                            '            that is characterized by the existence of two or more different alternative identities or alters' +
                            '            (but we like to call them Meeples). These alternate identities or alters, can cause drastic' +
                            '            change in mood, appearance, behavior, and memory. People who suffer from DID suffer from memory' +
                            '            loss due to alters containing separate memories based on which one is controlling the body.' +
                            '            Alters can take control of the body which can impact the host (the person who suffers from DID)' +
                            '            significantly.',
                               "We can continue to learn together. Let's encourage the normalization of mental health.",
                                     "/src/assets/profile-boy.jpg"))
    }
  }
}

</script>

<template>
  <!-- display content -->
  <div class="pt-0 mt-0">
    <div v-for="Content in Contents">
      <div v-if="Content.type === 'Content'">
        <ContentList :item="Content.category"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
