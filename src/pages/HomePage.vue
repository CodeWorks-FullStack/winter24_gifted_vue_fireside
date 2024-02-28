<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Gifts</h1>
      </div>
    </section>

    <section class="row">
      {{ gifts }}
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
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss"></style>
