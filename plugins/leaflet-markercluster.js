import Vue from "vue";
// import * as L from "leaflet";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
Vue.component("v-marker-cluster", Vue2LeafletMarkerCluster);

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);


// const LeafletPlugin = {
//   install(Vue) {
//     // Expose Leaflet
//     Vue.prototype.$L = L;
//   }
// };

// Vue.use(LeafletPlugin);
