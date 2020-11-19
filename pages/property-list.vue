<template>
  <main>
    <section class="hero_in prjcts">
      <div class="wrapper">
        <div class="container">
          <h1 class="fadeInUp"><span></span>Properties in {{ location }}</h1>
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
            <div class="layout_view">
              <a
                @click="changeViewMode('grid')"
                v-bind:class="{ active: viewMode === 'grid' }"
              >
                <i class="icon-th"></i>
              </a>
              <a
                @click="changeViewMode('isotope')"
                v-bind:class="{ active: viewMode === 'isotope' }"
              >
                <i class="icon-th-list"></i>
              </a>
            </div>
          </li>
          <li>
            <a
              class="btn_map"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="collapseMap"
              data-text-swap="Hide map"
              data-text-original="View on map"
              @click="openMapView()"
              >View on map</a
            >
          </li>
        </ul>
      </div>
      <!-- /container -->
    </div>
    <!-- /filters -->

    <!-- <div class="collapse" id="collapseMap">
      <div id="map" class="map"></div>
    </div> -->
    <!-- End Map -->

    <div class="container margin_60_35">
      <div class="row" v-if="viewMode === 'isotope'">
        <aside class="col-lg-3" id="sidebar">
          <!-- <div id="filters_col"> -->
          <a
            data-toggle="collapse"
            href="#collapseFilters"
            aria-expanded="false"
            aria-controls="collapseFilters"
            id="filters_col_bt"
            >Filters
          </a>
          <div class="collapse show" id="collapseFilters">
            <div
              class="filter_type"
              v-if="filtercategories && filtercategories.length"
            >
              <h6>Property Type</h6>
              <ul>
                <li v-for="item in selectedCategoriesList" :key="item.id">
                  <label class="container_check" :for="item.id"
                    >{{ item.property_type }}
                    <input type="checkbox" :id="item.id" />
                    <span class="checkmark"></span>
                  </label>
                </li>
              </ul>
            </div>
            <!-- <div class="filter_type">
              <h6>Distance</h6>

              <input
                type="range"
                min="10"
                max="100"
                step="10"
                value="30"
                data-orientation="horizontal"
              />
            </div>

            <div class="filter_type">
              <h6>BHK</h6>
              <ul>
                <li>
                  <label class="container_check"
                    >1 RK <small>(25)</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container_check"
                    >1 BHK <small>(26)</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container_check"
                    >2 BHK <small>(25)</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container_check"
                    >3 BHK <small>(12)</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container_check"
                    >4 BHK <small>(12)</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container_check"
                    >5 BHK <small>(12)</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
              </ul>
            </div>
            <div class="filter_type">
              <h6>Property Status</h6>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  New Launch </label
                ><br />
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />

                <label class="form-check-label" for="exampleRadios1">
                  Under Construction </label
                ><br />
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />

                <label class="form-check-label" for="exampleRadios1">
                  Ready to Move
                </label>
              </div>
            </div> -->
          </div>
          <!--/filters col-->
        </aside>
        <div class="col-lg-9" id="list_sidebar">
          <div class="isotope-wrapper">
            <b-card
              no-body
              v-if="!response.loader && !response.properties.length"
            >
              <b-card-body>
                <b-row>
                  <b-col cols="12"> No Properties Found. </b-col>
                </b-row>
              </b-card-body>
            </b-card>
            <div v-if="!response.loader">
              <PropertyIsotope
                v-for="item in response.properties"
                :key="item.name"
                :item="item"
              />
            </div>
            <div v-if="response.loader">
              <b-card no-body>
                <b-card-body>
                  <b-row>
                    <b-col cols="6">
                      <b-skeleton-img no-aspect height="200px"></b-skeleton-img>
                    </b-col>
                    <b-col cols="6">
                      <b-skeleton
                        no-aspect
                        animation="wave"
                        width="85%"
                        class="mt-3"
                        height="25%"
                      ></b-skeleton>
                      <b-skeleton
                        animation="wave"
                        width="55%"
                        height="30%"
                      ></b-skeleton>
                      <b-skeleton
                        animation="wave"
                        width="70%"
                        height="25%"
                      ></b-skeleton>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
              <b-card no-body>
                <b-card-body>
                  <b-row>
                    <b-col cols="6">
                      <b-skeleton-img no-aspect height="200px"></b-skeleton-img>
                    </b-col>
                    <b-col cols="6">
                      <b-skeleton
                        no-aspect
                        animation="wave"
                        width="85%"
                        class="mt-3"
                        height="25%"
                      ></b-skeleton>
                      <b-skeleton
                        animation="wave"
                        width="55%"
                        height="30%"
                      ></b-skeleton>
                      <b-skeleton
                        animation="wave"
                        width="70%"
                        height="25%"
                      ></b-skeleton>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
              <b-card no-body>
                <b-card-body>
                  <b-row>
                    <b-col cols="6">
                      <b-skeleton-img no-aspect height="200px"></b-skeleton-img>
                    </b-col>
                    <b-col cols="6">
                      <b-skeleton
                        no-aspect
                        animation="wave"
                        width="85%"
                        class="mt-3"
                        height="25%"
                      ></b-skeleton>
                      <b-skeleton
                        animation="wave"
                        width="55%"
                        height="30%"
                      ></b-skeleton>
                      <b-skeleton
                        animation="wave"
                        width="70%"
                        height="25%"
                      ></b-skeleton>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
            </div>
          </div>
        </div>
      </div>
      <!-- /row -->
      <div class="wrapper-grid" v-if="viewMode === 'grid'">
        <div class="row">
          <PropertyGrid
            v-for="item in response.properties"
            :key="item.name"
            :item="item"
          />
        </div>
      </div>

      <!-- Loader -->
      <p
        class="text-center add_top_30"
        v-if="response.count && response.properties.length < response.count"
      >
        <a
          href="javascript:void(0)"
          class="btn_1 rounded"
          @click="loadMore()"
          >{{
            response.loader
              ? "Loading ..."
              : `Load more - ${response.properties.length}/${response.count}`
          }}</a
        >
      </p>
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
  </main>
</template>

<script>
import gql from "graphql-tag";
import ls from "../helpers/localStorage";
import { EventBus } from "../helpers/event-bus";
import { mapPropertyData } from "../helpers/api";

export default {
  data() {
    return {
      location: null,
      qParams: null,
      response: {
        properties: [],
        count: 0,
        loader: false,
      },
      viewMode: "isotope",
      variables: {
        limit: 10,
        offset: 0,
        order_by: {
          created_on: "desc",
        },
      },
      allCategoriesList: [],
      selectedCategoriesList: [],
    };
  },
  methods: {
    queryParams() {
      const loc = ls.get("loc") && ls.get("loc").activeCity;
      if (loc) {
        this.variables = {
          ...this.variables,
          where: {
            _and: {
              city: {
                _like: `%${loc}%`,
              },
            },
          },
        };
        // Populate location
        this.location = loc;
        this.qParams = this.$route.query || null;
        // Listen location Events
        this.listenEvents(loc);
      }
    },
    async fetchData() {
      this.response.loader = true;
      this.queryParams();
      if (this.qParams) {
        // fetch meta data
        this.propertyAttributes();
      }
      await this.$apollo
        .query({
          query: require("@/graphQl/queries/property.gql"),
          variables: this.variables,
          fetchPolicy: "network-only",
        })
        .then(({ data }) => {
          const { property = [], property_aggregate } = data;
          this.response.properties = [
            ...this.response.properties,
            ...mapPropertyData(property),
          ];
          this.response.count = property_aggregate.aggregate.count || 0;
          setTimeout(() => {
            this.response.loader = false;
          }, 1000);
        });
    },
    addToWishList(property) {
      console.log("To be added Wishlit **********");
      console.log(property);
    },
    async loadMore() {
      this.variables = {
        ...this.variables,
        offset: this.variables.offset + this.variables.limit,
      };
      this.response.loader = true;
      this.fetchData();
    },
    changeViewMode: function (mode) {
      this.viewMode = mode;
    },
    listenEvents(existingLoc) {
      EventBus.$on("EVENT:setLocation", (loc) => {
        const queryParams = { ...this.$route.query, city: loc };
        if (
          loc &&
          loc !== existingLoc &&
          this.$route.name.match(/property-list/g)
        ) {
          const queryParams = { ...this.$route.query, city: loc };
          const routeConfig = Object.keys(queryParams).length
            ? { path: "/property-list", query: queryParams }
            : { path: "/property-list" };
          this.$router.push(routeConfig);
        }
      });
    },
    openMapView() {
      const queryParams = { ...this.$route.query };
      const routeConfig = Object.keys(queryParams).length
        ? { path: "/map-view", query: queryParams }
        : { path: "/map-view" };
      this.$router.push(routeConfig);
    },
    filtercategories(propertyOptionId) {
      return this.allCategoriesList.filter((item) => {
        return (
          item.property_type_option &&
          item.property_type_option.id == propertyOptionId
        );
      });
    },
    async propertyAttributes() {
      await this.$apollo
        .query({
          query: require("@/graphQl/queries/property/property-search.gql"),
          fetchPolicy: "cache-first",
        })
        .then(({ data }) => {
          const {
            property_types,
            property_type_attributes,
            property_type_options,
          } = data;
          this.allCategoriesList = property_types;
          if (this.qParams && this.qParams.potype) {
            this.selectedCategoriesList = this.filtercategories(
              this.qParams.potype
            );
          }
        });
    },
  },
  watch: {
    "$route.query": {
      handler(newValue) {
        this.response.properties = [];
        this.fetchData();
      },
      immediate: true,
    },
  },
};
</script>
