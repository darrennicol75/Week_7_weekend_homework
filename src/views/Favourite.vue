<template lang="html">
  <div id="">
    <h1>Favourite</h1>
    <weed-list :weeds="favourites" :favourites="favourites"></weed-list>
  </div>

</template>

<script>
import WeedList from '@/components/WeedList.vue'
export default {
  props: ['favourites'],
  components: {
    'weed-list': WeedList
  }
}
</script>

<style lang="css" scoped>
</style>
