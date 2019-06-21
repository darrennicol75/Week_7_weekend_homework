<template lang="html">
  <div class="">
    <h2>{{weed.name}}</h2>
    <button v-if="!inFavourites" v-on:click="handleButton" type="button" name="button">Add Favourite</button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'weed-list-item',
  props: ['weed', 'favourites'],
  computed: {
    inFavourites: function(){
      return this.favourites.includes(this.weed)
    }
  },
  methods: {
    handleButton: function(){
      eventBus.$emit('weed-selected', this.weed)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
