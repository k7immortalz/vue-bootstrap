<template>
  <div>
    <section class="hero_in prjcts">
      <div class="wrapper">
        <div class="container">
          <h1 class="fadeInUp">
            <span></span>Careers
          </h1>
        </div>
      </div>
    </section>
    <!--/hero_in-->

    <div class="filters_listing sticky_horizontal">
      <div class="container">
        <ul class="clearfix">
          <li>
            <div class="switch-field">
              <input
                type="radio"
                id="all"
                name="listing_filter"
                value="all"
                checked
                data-filter="*"
                class="selected"
              />
              <label for="all">All</label>
              <input
                type="radio"
                id="popular"
                name="listing_filter"
                value="popular"
                data-filter=".popular"
              />
              <label for="popular">Popular</label>
              <input
                type="radio"
                id="latest"
                name="listing_filter"
                value="latest"
                data-filter=".latest"
              />
              <label for="latest">Latest</label>
            </div>
          </li>

          <li>
            <a
              class="btn_map"
              data-toggle="collapse"
              href="#collapseMap"
              aria-expanded="false"
              aria-controls="collapseMap"
              data-text-swap="Hide map"
              data-text-original="View on map"
            >View on map</a>
          </li>
        </ul>
      </div>
      <!-- /container -->
    </div>
    <!-- /filters -->

    <!-- <div class="collapse" id="collapseMap">
      <div id="map" class="map">
        <Map :properties="properties" />
      </div>
    </div> -->
    <!-- End Map -->

    <div class="container margin_60_35">
      <div class="row" >
        <aside class="col-lg-3" id="sidebar">
          <div id="filters_col">
            <a
              data-toggle="collapse"
              href="#collapseFilters"
              aria-expanded="false"
              aria-controls="collapseFilters"
              id="filters_col_bt"
            >Filters</a>
            <div class="collapse show" id="collapseFilters">
              <div class="filter_type">
                <h6>Category</h6>
                <ul>
                  <li>
                    <label class="container_check">
                      All
                      <small>(945)</small>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container_check">
                      Technology
                      <small>(45)</small>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container_check">
                      Sales
                      <small>(30)</small>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </li>
 
                </ul>
              </div>
              <!-- <div class="filter_type">
                <h6>Duration</h6>
                <input type="text" id="range" name="range" value />
              </div>-->
              <div class="filter_type">
                <h6>Location</h6>
                <ul>
                  <li>
                    <label class="container_check">
                     Chennai
                      <small>(25)</small>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container_check">
                      Bangalore
                      <small>(26)</small>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </li>

                </ul>
              </div>
            </div>
            <!--/filters col-->
          </div>
        </aside>
        <div class="col-lg-9" id="list_sidebar">
          <div>


    <div v-for="article of jobs" :key="article.slug">
    <div class="row no-gutters  box_w">

      
        <div class="wrapper">
          <a href="#0" class="wish_bt"></a>
          <h3>                <NuxtLink
                  :to="{ name: 'job-slug', params: { slug: article.slug } }"
                  class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
                >
            {{ article.title }}</NuxtLink>
          </h3>
          <p>
  {{article.description}}
          </p>
          <span class="price">
            Experiance : 
            <strong>1-2yrs</strong> 
          </span><br>
            <span class="price">
            Location :
            <strong>  {{article.location}}</strong> 
          </span><br>

      </div>
    </div><br>
  </div>
          </div>
          <!-- <p class="text-center add_top_30">
            <a href="#0" class="btn_1 rounded">Load more</a>
          </p>-->
        </div>
      </div>
      <!-- /row -->
      <!-- <div class="wrapper-grid" v-if="viewMode === 'grid'">
        <div class="row">
          <ItemGrid v-for="item in properties" :key="item.name" :item="item" />
        </div>
      </div> -->
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
              <h4>Schedule Visit and Refunds</h4>
              <p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
            </a>
          </div>
          <div class="col-md-4">
            <a href="#0" class="boxed_list">
              <i class="pe-7s-note2"></i>
              <h4>Quality Standards</h4>
              <p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
            </a>
          </div>
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /bg_color_1 -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .fetch();
    const tags = await $content("tags", params.slug)
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    const jobs = await $content("jobs", params.slug)
      .only(["title", "description", "img", "slug", "author","location","category","address"])
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      articles,
      tags,
      jobs
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
