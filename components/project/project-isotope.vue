<template>
  <div class="box_list isotope-item popular" v-if="itemState">
    <div class="row no-gutters">
      <div class="col-lg-5">
        <figure>
          <small>{{ itemState.project_type }}</small>
          <nuxt-link
            :to="
              '/project/' + item.id + '?pId=' + item.title + '&oid=' + item.id
            "
          >
            <img
              :src="itemState.image"
              class="img-fluid"
              alt
              width="800"
              height="533"
            />
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
            <nuxt-link
              :to="
                '/property/' +
                itemState.id +
                '?pId=' +
                itemState.title +
                '&oid=' +
                itemState.id
              "
              >{{ itemState.title }}</nuxt-link
            >
          </h3>
          <p>
            {{ item.builder_name }}
          </p>
          <!-- <span class="price">
            From
            <strong>{{ item.square_footage }}</strong> /Sq Feet
          </span> -->
        </div>
        <ul>
          <li><i class="icon_clock_alt"></i> Contact Us</li>
          <li>
            <div class="score">
              <span>
                Units
                <em> 35 Enquiries </em>
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
