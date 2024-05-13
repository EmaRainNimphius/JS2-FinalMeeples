<script>
import AddMeeple from "@/components/meepleComponents/AddMeeple.vue";
import SavedResources from "@/components/resourceComponents/SavedResources.vue";
export default {
  components: { SavedResources, AddMeeple },
}
</script>

<template>
  <!-- tabs and their info -->
  <div class="container mb-5">
    <div class="row">

      <div class="col-12">

        <div class="row" id="break"></div>
          <!-- tabs : meeples / journal -->
          <ul class="nav nav-tabs mt-5">
            <div class="col-4">
              <li class="nav-item"><a class="nav-link fs-2 active" href="#acc" data-bs-toggle="tab">Account Tracker</a></li>
            </div>
            <div class="col-4">
              <li class="nav-item"><a class="nav-link fs-2" href="#yourSystem" data-bs-toggle="tab">Your System</a></li>
            </div>
            <div class="col-4">
              <li class="nav-item"><a class="nav-link fs-2" href="#savedResources" data-bs-toggle="tab">Saved Resources</a></li>
            </div>
          </ul>

        <!-- account tab content-->
        <div class="tab-content">
          <div id="acc" class="active tab-pane fade in show">
            <!-- account info -->
            <h3 class="mt-3">Account information.. counts and stuff lol</h3>
          </div>
        </div>
      </div>

          <!-- your system -->
          <div class="tab-content">
            <div id="yourSystem" class="tab-pane fade">
              <YourSystem/>
            </div>
          </div>
        </div>

        <!-- saved resources -->
        <div class="tab-content">
          <div id="savedResources" class="tab-pane fade ms-0">
            <div class="mt-3">
              <SavedResources/>
            </div>
          </div>
        </div>
    </div>

</template>

<style lang="sass" scoped>

.nav-link
  color: black
.nav-tabs .nav-link.active
  background-color: #023859
  color: #d2edfe

.nav-tabs .nav-link
  border-color: #02446c

</style>