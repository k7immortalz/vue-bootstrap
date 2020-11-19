<template>
  <div class="box_list map_view" v-if="itemState">
    <div class="row no-gutters add_top_20">
      <div class="col-4">
        <figure>
          <small>{{ itemState.property_type }}</small>
          <nuxt-link
            :to="
              '/property/' +
              itemState.id +
              '?pId=' +
              itemState.property_id +
              '&oid=' +
              itemState.id
            "
          >
            <img
              :src="itemState.image"
              class="img-fluid"
              alt
              width="800"
              height="533"
            />
          </nuxt-link>
        </figure>
      </div>
      <div class="col-8">
        <div class="wrapper">
          <a href="#0" class="wish_bt"></a>
          <h3>
            <nuxt-link :to="
              '/property/' +
              itemState.id +
              '?pId=' +
              itemState.property_id +
              '&oid=' +
              itemState.id
            ">{{
              item.marketing_title
            }}</nuxt-link>
          </h3>
          <span class="price">
            From
            <!-- <strong>INR {{ itemState.price }}</strong> -->
            {{ itemState.square_footage }} Sq Feet
          </span>
        </div>
        <ul>
          <li>
            <a href="#0" data-id="1" class="address">On Map</a>
          </li>
          <li>
            <div class="score">
              <span>
                Bedrooms
                <em>{{ itemState.bathrooms }} Bathrooms</em>
              </span>
              <strong>{{ itemState.bedrooms || itemState.rooms }}</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- /box_list -->
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
