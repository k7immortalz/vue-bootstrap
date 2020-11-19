<template>
  <div class="item" v-if="itemState">
    <div class="box_grid">
      <figure>
        <a href="#0" class="wish_bt"></a>
        <nuxt-link to="/property-detail">
          <img :src="itemState.marker_image" class="img-fluid" alt width="800" height="533" />
          <div class="read_more">
            <span>Read more</span>
          </div>
        </nuxt-link>
        <small>Villa</small>
      </figure>
      <div class="wrapper">

        <!-- /review-box -->
									<figure class="rev-thumb"><img src="img/avatar2.jpg" alt="">
									</figure>
									<div class="rev-content">
										<div class="rating">
											<i class="icon-star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
										</div>
										<div class="rev-info">
											Ahsan – April 01, 2016:
										</div>
										<div class="rev-text">
											<p>
												Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
											</p>
										</div>
									</div>
                  
        <h3>
          <nuxt-link to="/property-detail">{{ itemState.title }}</nuxt-link>
        </h3>
        <!-- <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
        <span class="price">
          From
          <strong>INR 5400</strong> /Sq Feet
        </span> -->
      </div>
      <!-- <ul>
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
      </ul> -->
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
