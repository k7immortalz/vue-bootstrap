<template>
  <div class="home-sea">
    <section class="hero_single version_2">
      <HomeSearch />
    </section>
    <!-- /hero_single -->

    <div class="container container-custom margin_80_0">
      <div class="main_title_2">
        <span>
          <em></em>
        </span>
        <h2>Featured Projects</h2>
        <p>Property management made easy, just few clicks away</p>
      </div>
      <div id="owl-carousel" class="owl-carousel owl-theme">
        <ItemHome
          v-for="item in featuredProjects"
          :key="item.name"
          :item="item"
        />
      </div>
      <!-- /carousel -->
      <p class="btn_home_align">
        <a
          href="Javascript:void(0)"
          @click="navigateToPage('PROJECT')"
          class="btn_1 rounded"
        >
          View all Projects
        </a>
      </p>
      <hr class="large" />
    </div>
    <!-- /container -->

    <div class="container container-custom margin_30_95">
      <section class="add_bottom_45">
        <div class="main_title_3">
          <span>
            <em></em>
          </span>
          <h2>Featured Property for Buy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="row">
          <ItemFeatured
            v-for="item in featuredProperties"
            :key="item.name"
            :item="item"
          />
        </div>
        <!-- /row -->
        <a
          href="Javascript:void(0)"
          @click="navigateToPage('PROPERTY')"
          class="grid_item"
        >
          <strong>
            View all (157)
            <i class="arrow_carrot-right"></i>
          </strong>
        </a>
      </section>
      <!-- /section -->

      <section class="add_bottom_45">
        <div class="main_title_3">
          <span>
            <em></em>
          </span>
          <h2>Featured Properties for Rent</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="row">
          <ItemPopular
            v-for="item in featuredProperties"
            :key="item.name"
            :item="item"
          />
        </div>
        <!-- /row -->
        <a
          href="Javascript:void(0)"
          @click="navigateToPage('PROPERTY')"
          class="grid_item"
        >
          <strong>
            View all (157)
            <i class="arrow_carrot-right"></i>
          </strong>
        </a>
      </section>
      <!-- /section -->

      <div class="banner mb-0">
        <div
          class="wrapper d-flex align-items-center opacity-mask"
          data-opacity-mask="rgba(0, 0, 0, 0.3)"
        >
          <div>
            <small>Services</small>
            <h3>
              Your Perfect
              <br />Property Management Partner
            </h3>
            <p>Managed Services & Care</p>
            <nuxt-link to="/serv-buyers">Read more</nuxt-link>
          </div>
        </div>
        <!-- /wrapper -->
      </div>
      <!-- /banner -->
    </div>
    <!-- /container -->

    <div class="bg_color_1">
      <div class="container margin_80_55">
        <div class="main_title_2">
          <span>
            <em></em>
          </span>
          <h3>Blogs and Events</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="row">
          <div class="col-lg-6" v-for="article of articles" :key="article.slug">
            <NuxtLink
              :to="{
                name: 'blog-slug',
                params: { slug: article.slug },
              }"
              class="box_news"
            >
              <figure>
                <img
                  v-if="article.img"
                  class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
                  :src="article.img"
                />
                <figcaption><strong>01</strong>Sep</figcaption>
              </figure>
              <ul>
                <li>{{ article.author.name }}</li>
                <li>01.09.2020</li>
              </ul>
              <h4>{{ article.title }}</h4>
              <p>{{ article.description }}</p>
            </NuxtLink>
          </div>

          <!-- /box_news -->
        </div>
        <!-- /row -->
        <p class="btn_home_align">
          <nuxt-link to="blogs" class="btn_1 rounded">View all Blogs</nuxt-link>
        </p>
      </div>
      <!-- /container -->
    </div>
    <!-- /bg_color_1 -->

    <div class="call_section">
      <div class="container clearfix">
        <div class="col-lg-5 col-md-6 float-right wow" data-wow-offset="250">
          <div class="block-reveal">
            <div class="block-vertical"></div>
            <div class="box_1">
              <h3>Property Management Services</h3>
              <p>
                Property Care is the leading property management Portal,
                providing residential, commercial, agency, firms, rental & NRI
                property management services. We provide Apartment rentals and
                management, hassle free end-to-end service for both owners and
                tenants. We also provide property buying and selling assistance
                to investors, property registration support, Rental agreement
                services and Legal Services.
              </p>
              <NuxtLink to="propertymanagement" class="btn_1 rounded"
                >Read more</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container container-custom margin_80_0 mb-5">
      <div class="main_title_2">
        <span>
          <em></em>
        </span>
      </div>

      <!-- <carousel1 v-bind="settings">
      <div class="item item-width">
        <div class="box_grid">
        
          <div class="wrapper">
            
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
            
              <img src="img/avatar1.jpg" alt="" class="img-carouse"> <span>Admin – April 03, 2016:</span>
                    
          </div>
        </div>
      </div>
      <div class="item item-width">
        <div class="box_grid">
        
          <div class="wrapper">
            
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
            
              <img src="img/avatar1.jpg" alt="" class="img-carouse"> <span>Admin – April 03, 2016:</span>
                      
          </div>
        </div>
      </div>
      <div class="item item-width">
        <div class="box_grid">
        
          <div class="wrapper">
            
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
            
              <img src="img/avatar1.jpg" alt="" class="img-carouse"> <span>Admin – April 03, 2016:</span>
                      
          </div>
        </div>
      </div>
      
      <div class="item item-width">
        <div class="box_grid">
        
          <div class="wrapper">
            
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
            
              <img src="img/avatar1.jpg" alt="" class="img-carouse"> <span>Admin – April 03, 2016:</span>
                      
          </div>
        </div>
      </div>
      <div class="item item-width">
        <div class="box_grid">
        
          <div class="wrapper">
            
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
            
              <img src="img/avatar1.jpg" alt="" class="img-carouse"> <span>Admin – April 03, 2016:</span>
                      
          </div>
        </div>
      </div>
      <div class="item item-width">
        <div class="box_grid">
        
          <div class="wrapper">
            
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
            
              <img src="img/avatar1.jpg" alt="" class="img-carouse"> <span>Admin – April 03, 2016:</span>
                      
          </div>
        </div>
      </div>
      
      </carousel1> -->

      <div>
        <b-carousel
          id="carousel-no-animation"
          indicators
          img-width="1024"
          img-height="300"
          controls
          v-if="testimonials.length"
        >
          <b-carousel-slide
            v-for="item in testimonials"
            :key="item.id"
            img-blank
          >
            <div class="item" style="color: #999 !important">
              <div class="box_grid">
                <div class="wrapper">
                  <p>
                    {{ item.description }}
                  </p>

                  <div>
                    <b-avatar src="https://placekitten.com/300/300"></b-avatar>
                    <div>
                      {{ item.name }}
                    </div>
                  </div>
                  <div class="ml-5">{{ item.created_at | formatDate }}</div>
                </div>
              </div>
              <div class="overlay"></div>
            </div>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <!-- /container -->
  </div>

  <!--/call_section-->
</template>

<script>
import ls from "../helpers/localStorage";
import { mapPropertyData, mapProjectData } from "../helpers/api";
export default {
  layout: "home",
  head: {
    title: "Buy, Sell, Rent Projects, Properties, Vacant Sites",
    bodyAttrs: {
      id: "datepicker_mobile_full",
    },
  },
  data() {
    return {
      params: {},
      testimonials: [],
      featuredProperties: [],
      featuredProjects: [],
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
        centerMode: true,
        centerPadding: "20px",
      },
    };
  },

  methods: {
    async fetchData() {
      await this.$apollo
        .query({
          query: require("@/graphQl/queries/property/featured.gql"),
          fetchPolicy: "cache-first",
        })
        .then(({ data }) => {
          const { featured_projects, featured_properties, testimonials } = data;
          this.testimonials = testimonials;
          this.featuredProperties = [
            ...this.featuredProperties,
            ...mapPropertyData(featured_properties),
          ];
          this.featuredProjects = [
            ...this.featuredProjects,
            ...mapProjectData(featured_projects),
          ];
          // Show carousel for featured projects
          setTimeout(() => {
            this.carouselForFeaturedProjects("owl-carousel");
          });
        });
    },

    navigateToPage(page) {
      const params = this.params;
      const loc = ls.get("loc");
      if (loc) {
        params.city = loc.activeCityVal;
      }
      let routerConfig;
      if (page === "PROPERTY") {
        const routeConfig = Object.keys(params).length
          ? { path: "/property-list", query: params }
          : { path: "/property-list" };
        this.$router.push(routeConfig);
      } else {
        const routeConfig = Object.keys(params).length
          ? { path: "/projects-list", query: params }
          : { path: "/projects-list" };
        this.$router.push(routeConfig);
      }
    },
    carouselForFeaturedProjects(ID) {
      $(`#${ID}`).owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 0,
        responsive: {
          0: {
            items: 1,
          },
          767: {
            items: 2,
          },
          1000: {
            items: 3,
          },
          1400: {
            items: 4,
          },
        },
      });
    },
    wowAnimation() {
      // WoW - animation on scroll
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window
      });
      wow.init();
    },
    preLoaderAnimation() {
      $('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
      $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
      $("body").delay(350);
      $(".hero_in h1,.hero_in form").addClass("animated");
      $(".hero_single, .hero_in").addClass("start_bg_zoom");
      $(window).scroll();

      // Sticky nav
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 1) {
          $(".header").addClass("sticky");
        } else {
          $(".header").removeClass("sticky");
        }
      });
    },
  },
  mounted() {
    this.fetchData();
    this.wowAnimation();
    this.preLoaderAnimation();
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .fetch()
      .then((items) => {
        return items.slice(0, 4);
      });
    return {
      articles,
    };
  },
};
</script>
