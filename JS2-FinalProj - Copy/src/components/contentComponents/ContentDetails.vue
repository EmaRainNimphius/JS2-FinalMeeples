<script>
import Content from "@/models/Content.js";

let nextId = 1;

export default{
  name: 'ContentDetails',
  data() {
    return {
      id: nextId++
    }
  },
  props: {
    item: { type: Content }
  }
}
</script>

<template>
  <div class="container mt-4">
    <!-- content block -->
    <div v-if="item.category === 'ContentBlock'">
        <div id="mainCard" class="card" type="button" data-bs-toggle="modal" :data-bs-target="'#blockModal' + id">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src=" item.img " style="background-color: #7a7a7a" class="img-fluid rounded-start" alt="image">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title fs-3 mb-1" style="font-weight: 500;">{{ item.title }}</h4>
                <hr class="mt-0 mb-2">
                <p class="card-text fs-5">{{ item.description}}</p>
              </div>
            </div>
          </div>
        </div>
    </div>

    <!-- content block modal -->
    <div class="modal fade" :id="'blockModal' + id" tabindex="-1" aria-labelledby="blockModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body p-4">
            <div class="row">
              <div class="col-4">
                <!-- image -->
                <img :src=" item.img " id="block-modal-image" class="img-fluid rounded-start" alt="image">
              </div>
              <div class="col">
                <div class="row">
                  <div class="col">
                    <!-- title -->
                    <h2 class="modal-title" style="font-weight: 500;" id="blockModalLabel">{{ item.title }}</h2>
                  </div>
                  <div class="col-1 align-self-center">
                    <!-- close btn -->
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                </div>
                <!-- line break -->
                <hr class="mt-2">
                <!-- content -->
                <p class="fs-5 pe-5">{{ item.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





    <!-- content card -->
    <div v-if="item.category === 'ContentCard'">
      <div id="ContentCard" class="card p-3">
        <div class="title">
          <h3 class="fw-bold mb-0 pt-3 ps-3">{{ item.title }}</h3>
          <hr>
        </div>
        <div class="content">
          <p class="fs-5 ps-3">{{ item.content }}</p>
          <div v-if="item.buttonLabel === ''">
            <button class="btn">{{ item.buttonLabel}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

// content block
#mainCard{
  width: 550px;
  height: 187px;

  border-style: outset;
  border-width: 3px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;

  cursor: pointer;
  text-align: start;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  touch-action: manipulation;
  will-change: transform;
}

#mainCard:disabled {
  pointer-events: none;
}

#mainCard:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0 8px 15px;
  transform: translateY(-4px);
}

#mainCard:active {
  box-shadow: none;
  transform: translateY(0);
}

// content block modal
#block-modal-image{
  border-radius: 10px;
}

</style>