<template>
  <div class="box_list isotope-item popular" v-if="itemState">
    <div class="row no-gutters">
      <div class="col-lg-5">
        <figure>
          <small>Villa</small>
          <nuxt-link to="/property-detail">
            <img src="img/prjct_1.jpg" class="img-fluid" alt width="800" height="533" />
            <div class="read_more">
              <span>Read more</span>
            </div>
          </nuxt-link>
        </figure>
      </div>
      <div class="col-lg-7">
        <div class="wrapper">
          <a href="#0" class="wish_bt"></a>
          <h3>
            <nuxt-link to="/property-detail">{{ itemState.title }}</nuxt-link>
          </h3>
          <p>
            Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril
            tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore
            percipitur definitiones ex, nihil utinam recusabo mel no.
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
                <em>
                  35
                  Enquiries
                </em>
              </span>
              <strong>12</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- /isotope-wrapper -->
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
