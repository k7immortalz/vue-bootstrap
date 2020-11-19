<template>
  <div class="wrapper">
    <h3>Search for Properties</h3>
    <form @submit.prevent="processForm">
      <div class="container home-search">
        <nav>
          <div
            class="nav nav-tabs buy-tabs buy-nave-m font-weight-bolder"
            id="nav-tab"
            role="tablist"
          >
            <a
              v-for="item in pTabs"
              :key="item.id"
              class="nav-link buy-link"
              id="nav-Buy-tab"
              data-toggle="tab"
              :href="item.href"
              :class="{ active: item.id === activeTab }"
              role="tab"
              aria-controls="nav-Buy"
              aria-selected="true"
              v-on:click="selectTab(item)"
            >
              {{ item.name }}
            </a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-Buy"
            role="tabpanel"
            aria-labelledby="nav-Buy-tab"
          >
            <div class="row no-gutters inner">
              <div class="col-lg-2">
                <div class="form-group ind-form">
                  <select
                    class="form-control ind-form"
                    id="exampleFormControlSelect1"
                    v-model="params.purpose"
                  >
                    <option
                      v-for="option in purposeList"
                      v-bind:value="option.value"
                      :key="option.value"
                    >
                      {{ option.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-lg-5">
                <div class="form-group ind-form buy-form-b">
                  <input
                    class="form-control ind-form buy-form-b"
                    name="place"
                    type="text"
                    placeholder="Project, property, area..."
                    v-model="params.q"
                  />
                  <!-- <i class="icon_pin_alt"></i> -->
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group ind-form">
                  <select class="form-control ind-form" v-model="params.ptype">
                    <option value="" disabled>Select Category</option>
                    <option
                      v-for="option in selectedCategoriesList"
                      v-bind:value="option.id"
                      :key="option.id"
                    >
                      {{ option.property_type }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2">
                <input
                  type="submit"
                  class="form-control ind-form int-form-back btn_search btn-block"
                  value="Search"
                />
              </div>
            </div>
            <!-- /row -->
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import ls from "../helpers/localStorage";
export default {
  data() {
    return {
      params: {
        categories: "",
        purpose: "buy",
        q: null,
        ptype: null,
        potype: null,
      },
      activeTab: null,
      allCategoriesList: [],
      selectedCategoriesList: [],
      purposeList: [
        {
          name: "Buy",
          value: "buy",
        },
        {
          name: "Rent",
          value: "rent",
        },
        {
          name: "Lease",
          value: "lease",
        },
      ],
      pTabs: [],
    };
  },
  methods: {
    processForm: function (e) {
      e.preventDefault();
      const params = {};
      Object.keys(this.params).forEach((key) => {
        if (this.params[key]) {
          params[key] = this.params[key];
        }
      });
      const loc = ls.get("loc");
      if (loc) {
        params.city = loc.activeCityVal;
      }
      const routeConfig = Object.keys(params).length
        ? { path: "/property-list", query: params }
        : { path: "/property-list" };
      this.$router.push(routeConfig);
    },
    configureNiceSelect() {
      setTimeout(() => {
        $(" select, .custom-select-form select").niceSelect();
      });
    },
    selectTab(tab) {
      this.params.ptype = '';
      this.activeTab = tab.id;
      this.params.potype = this.activeTab;
      this.selectedCategoriesList = this.filtercategories(tab);
    },
    filtercategories(propertyOption) {
      return this.allCategoriesList.filter((item) => {
        return (
          item.property_type_option &&
          item.property_type_option.id === propertyOption.id
        );
      });
    },
    async fetchData() {
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
          this.pTabs = property_type_options.map((item) => {
            item.value = item.id;
            return item;
          });
          this.allCategoriesList = property_types;
          if (this.pTabs.length) {
            const pTab = this.pTabs[0];
            this.selectTab(pTab);
          }
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<style>
.nice-select ul.list {
  width: 100% !important;
  min-height: 100px !important;
}
</style>