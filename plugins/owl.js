import Vue from 'vue'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 import fab from 'vue-fab'
 import FlagIcon from 'vue-flag-icon'

Vue.component('carousel1', VueSlickCarousel)
Vue.component('floatingButton', fab)
Vue.use(FlagIcon);

