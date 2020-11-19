<template>
  <no-ssr>
    <l-map :zoom="11" :center="[12.9716,77.5946]">
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
      <v-marker-cluster @clusterclick="click()" @ready="ready">
        <l-marker
          v-for="item in propertiesList"
          :key="item.id"
          :lat-lng="[item.latitude, item.longitude]"
        >
          <l-tooltip>Rs. {{ item.price }}</l-tooltip>
          <l-popup>
            <div>
              <nuxt-link to="/property-detail">
                <img style="width: 100%;" v-bind:src="item.marker_image" alt />
                <h3>Rs. {{ item.price }}</h3>
                <h3>{{ item.title }}</h3>
                <hr />
              </nuxt-link>
            </div>
          </l-popup>
        </l-marker>
      </v-marker-cluster>
    </l-map>
  </no-ssr>
</template>

<script>
export default {
  props: ["properties"],
  data() {
    return {
      propertiesList: this.properties || [],
    };
  },
  methods: {
    click: (e) => console.log("clusterclick", e),
    ready: (e) => console.log("ready", e),
  },
  created() {
    console.log(this.properties);
  },
};
</script>
