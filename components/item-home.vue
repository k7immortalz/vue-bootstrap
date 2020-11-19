<template>
  <div class="item" v-if="itemState">
    <div class="box_grid">
      <figure>
        <a href="#0" class="wish_bt"></a>
        <nuxt-link
            :to="
              '/project/' + item.id + '?pId=' + item.project_name + '&oid=' + item.id
            "
          >
          <img :src="itemState.marker_image" class="img-fluid" alt width="800" height="533" />
          <div class="read_more">
            <span>Read more</span>
          </div>
        </nuxt-link>
        <small>{{item.project_type}}</small>
      </figure>
      <div class="wrapper">
        <h3>
          <nuxt-link
            :to="
              '/project/' + item.id + '?pId=' + item.project_name + '&oid=' + item.id
            "
          >{{ itemState.title }}</nuxt-link>
        </h3>
        <p>{{item.builder_name}}</p>
        <!-- <span class="price">
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
