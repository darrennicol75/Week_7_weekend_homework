<template lang="html">
  <div>
    <ul>
      <weed-list-item v-for="(weed, index) in weeds" :weed="weed" :favourites="favourites" :key="index"></weed-list-item>
    </ul>
  </div>

</template>

<script>
import WeedListItem from './WeedListItem.vue';
export default {
  name: 'weed-list',
  props: ['weeds', 'favourites'],
  components: {"weed-list-item": WeedListItem}
}
</script>

<style lang="css" scoped>
</style>
