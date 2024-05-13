<script>
import SavedResources from "@/components/resourceComponents/SavedResources.vue";
import SearchDisplayMedia from "@/components/resourceComponents/SearchDisplayMedia.vue";

export default {
  name: "ResourceTabs",
  components: {SearchDisplayMedia, SavedResources },
}
</script>

<template>
  <!-- tabs and their info -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="row" id="break"></div>
        <!-- tabs -->
        <ul class="nav nav-tabs mt-5">
          <!-- tab : search -->
          <div class="col-6">
            <li class="nav-item">
              <a class="nav-link fs-2 active" href="#searchResources"
                 data-bs-toggle="tab">Search Resources</a>
            </li>
          </div>
          <!-- tab : saved -->
          <div class="col-6">
            <li class="nav-item">
              <a class="nav-link fs-2" href="#savedResources"
                 data-bs-toggle="tab">Saved Resources</a>
            </li>
          </div>
        </ul>

        <!-- tab content : search resources -->
        <div class="tab-content">
          <div id="searchResources" class="active tab-pane fade in show">
            <SearchDisplayMedia/>
          </div>
        </div>
      </div>
    </div>

    <!-- tab content : saved resources -->
    <div class="tab-content">
      <div id="savedResources" class="tab-pane fade ms-0">
        <div class="mt-3">
          <SavedResources/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/variables";

.nav-link{
  color: black;
}
.nav-tabs .nav-link.active{
  background-color: $blu-dark;
  color: $text-light;
}

.nav-tabs .nav-link{
  border-color: $gray-blu;
}
</style>