<template>
  <div class="col-xl-3 col-lg-6 col-md-6" v-if="item && item.purpose_type === 'lease'">
     <nuxt-link
      class="grid_item"
      :to="
        '/property/' +
        itemState.id +
        '?pId=' +
        itemState.property_id +
        '&oid=' +
        itemState.id
      "
    >
      <figure>
        <div class="score">
          <strong>8.5</strong>
        </div>
        <img :src="itemState.marker_image" class="img-fluid" alt />
        <div class="info">
          <h3>{{ itemState.title }}</h3>
        </div>
      </figure>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      itemState: this.item || null,
    };
  },
};
</script>
