<template lang="html">
  <div id="">
    <weed-list :weeds="weeds" :favourites="favourites"></weed-list>
  </div>
</template>

<script>
import WeedList from '@/components/WeedList.vue'
export default {
  name: 'weed',
  props: ["weeds", "favourites"],
  components: {
    "weed-list": WeedList
  }
}
</script>

<style lang="css" scoped>
</style>
