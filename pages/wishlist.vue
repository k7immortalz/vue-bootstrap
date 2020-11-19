<template>
  <main>
    <section class="hero_in tours">
      <div class="wrapper">
        <div class="container">
          <h1 class="fadeInUp"><span></span>Your Wishlist</h1>
        </div>
      </div>
    </section>
    <!--/hero_in-->

    <div class="container margin_60_35" >
      <div class="wrapper-grid">
        <div class="row"   >
          <div class="col-xl-4 col-lg-6 col-md-6" v-for="item in properties" :key="item.id">
            <div class="box_grid">
              <figure>
                <a href="#0" class="wish_bt liked"></a>
                <nuxt-link to="/project-detail"
                  ><img
                    src="img/tour_1.jpg"
                    class="img-fluid"
                    alt=""
                    width="800"
                    height="533"
                /></nuxt-link>
                <small>{{item.type}}</small>
                <div class="read_more"><span>Read more</span></div>
              </figure>
              <div class="wrapper">
                <h3>
                  <nuxt-link to="/project-detail"
                    >{{item.name}}</nuxt-link
                  >
                </h3>
                <p>
                  {{item.desc}}
                </p>
                <span class="price"
                  >From <strong>{{item.price}}</strong> {{item.feet}}</span
                >
              </div>
              <ul>
                <li><i class="icon_clock_alt"></i> {{item.units}}</li>
                <li>
                  <div class="score">
                    <span>{{item.review}}<em>{{item.enquires}}</em></span
                    ><strong>{{item.rating}}</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- /box_grid -->
        </div>
        <!-- /row -->
      </div>
      <!-- /isotope-wrapper -->
    </div>
    <!-- /container -->

    <div class="bg_color_1">
      <div class="container margin_60_35">
        <div class="row">
          <div class="col-md-4">
            <a href="#0" class="boxed_list">
              <i class="pe-7s-help2"></i>
              <h4>Need Help? Contact us</h4>
              <p>Cum appareat maiestatis interpretaris et, et sit.</p>
            </a>
          </div>
          <div class="col-md-4">
            <a href="#0" class="boxed_list">
              <i class="pe-7s-wallet"></i>
              <h4>Payments</h4>
              <p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
            </a>
          </div>
          <div class="col-md-4">
            <a href="#0" class="boxed_list">
              <i class="pe-7s-note2"></i>
              <h4>Cancel Policy</h4>
              <p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
            </a>
          </div>
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /bg_color_1 -->
  </main>
</template>

<script>
const getProperties = () =>
  import("~/static/wishlist.json").then((m) => m.default || m);
export default {
  data() {
    return {
      properties: [],
      viewMode: "wrapper-grid",
    };
  },
  async asyncData() {
    return {
      properties: await getProperties(),
    };
  },
  methods: {
    changeViewMode: function (mode) {
      this.viewMode = mode;
    },
  },
};
</script>