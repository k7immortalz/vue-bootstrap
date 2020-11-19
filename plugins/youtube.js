import Vue from 'vue'

import VueYouTubeEmbed from 'vue-youtube-embed';
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)

Vue.use(VueYouTubeEmbed, { global: true });

// const plugin = {
//   install() {
//     Vue.prototype.$getIdFromURL = getIdFromURL;
//     Vue.prototype.$getTimeFromURL = getTimeFromURL
//   }
// }

// Vue.use(plugin);
