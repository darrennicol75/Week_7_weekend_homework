import Vue from 'vue';
import Router from 'vue-router';
import Weed from '@/views/Weed';
import Favourite from '@/views/Favourite'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/weed',
      name: 'weed',
      component: Weed
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: Favourite
    }

  ]
})
export default router;
