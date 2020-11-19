<template>
  <div class="col-xl-4 col-lg-6 col-md-6" v-if="itemState">
    <div class="box_grid">
      <figure>
        <a href="#0" class="wish_bt"></a>
        <nuxt-link to="/property-detail">
          <img src="img/prjct_1.jpg" class="img-fluid" alt width="800" height="533" />
          <div class="read_more">
            <span>Read more</span>
          </div>
        </nuxt-link>
        <small>Villa</small>
      </figure>
      <div class="wrapper">
        <h3>
          <nuxt-link to="/property-detail">{{ itemState.title }}</nuxt-link>
        </h3>
        <p>
          Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti
          cu.
        </p>
        <span class="price">
          From
          <strong>INR 5400</strong> /Sq Feet
        </span>
      </div>
      <ul>
        <li>
          <i class="icon_clock_alt"></i> Contact Us
        </li>
        <li>
          <div class="score">
            <span>
              Units
              <em>35 Enquiries</em>
            </span>
            <strong>12</strong>
          </div>
        </li>
      </ul>
    </div>
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
