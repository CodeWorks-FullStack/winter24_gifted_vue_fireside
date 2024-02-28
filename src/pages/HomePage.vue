<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Gifts</h1>
      </div>
    </section>

    <section class="row">
      <div v-for="gift in gifts" :key="gift.id" class="col-md-4 mb-3">
        <div class="card">
          <img :src="gift.url" class="img-fluid card-img-top" alt="">
          <div class="card-body">
            <p>{{ gift.tag }}</p>
            <button @click="openGift(gift.id)" v-if="!gift.opened" class="btn btn-success">Open Gift</button>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { giftsService } from '../services/GiftsService.js'
import { AppState } from '../AppState.js';

export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error)
      }
    }


    onMounted(() => {
      getGifts()
    })
    return {
      gifts: computed(() => AppState.gifts),

      async openGift(giftId) {
        try {
          await giftsService.updateGift(giftId)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
