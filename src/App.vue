<template>
  <div id="app">
    <h1>Mary J, ya man were jammin!</h1>
    <h2>Welcome to planet chill</h2>
<!-- <img src="/src/assets/marijuana.jpg" alt="background leaf" style="float:right; width:104px; height:142px"> -->
    <div class="">
<nav> <router-link :to="{ name: 'weed'}">Weed Type</router-link>
      | <router-link :to="{ name: 'favourite'}">Favourite</router-link>
</nav>
    </div>
    <router-view :weeds="weeds" :favourites="favourites" id="view"></router-view>
  </div>

</template>

<script>
import { eventBus } from '@/main.js'
import WeedList from './components/WeedList.vue'

export default {
  name: 'app',
  data(){
    return {
      weeds: [],
      favourites: []
    }
  },
  mounted(){
    fetch("https://ghibliapi.herokuapp.com/films") //films
    // fetch("http://strainapi.evanbusse.com/dxyTKu0/strains/search/all")
    .then(res => res.json())
    .then(weeds => this.weeds = weeds)

    eventBus.$on('weed-selected', (weed) => {
      this.favourites.push(weed)
    })
  },
  components: {
    "weed-list": WeedList
  }
}
</script>

<style>
#app {
  /* background-image: url('@/mj.jpg'); */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!-- S3926UZC7PQF7CRD -->
