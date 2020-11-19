<template>
  <div>
    <!-- <floatingButton
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
    ></floatingButton> -->
     <AppChat/>
    <header class="header menu_fixed" v-bind:class="{ map_view: isMapView }">
      <div id="logo">
        <nuxt-link to="/">
          <img src="/img/logo_sticky.png" width="150" alt class="logo_normal" />
          <img
            src="/img/logo.png"
            width="150"
            height="36"
            alt
            class="logo_sticky"
          />
        </nuxt-link>
        <span id="menu" class="main-menu pl-4 d-none d-lg-block d-xl-block">
          <ul>
            <li>
              <span>
                <a class="dropdown-toggle" href="javascript:void(0)">{{
                  params.activeCity
                }}</a>
              </span>
              <ul>
                <li v-for="option in cities" :key="option.value">
                  <span>
                    <a
                      href="javascript:void(0);"
                      @click.prevent="
                        $event.stopPropagation();
                        setLocation(option);
                      "
                      >{{ option.name }}
                    </a>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </span>
      </div>

      <ul id="top_menu">
        <li>
          <nuxt-link to="/" class="cart-menu-btn" title="Cart">
            <strong>4</strong>
          </nuxt-link>
        </li>
        <li v-show="!isLoggedIn">
          <a
            @click="
              modelConfig.isLoginForm = true;
              appendStyleToParent();
            "
            class="login"
            >Sign In</a
          >
        </li>
        <li v-show="isLoggedIn">
          <!-- <i class="fas fa-sign-in-alt"></i> -->
          <a @click="logout()" title="Sign Out" id="sign-in" class="login"
            >Log Out</a
          >
        </li>
      </ul>
      <!-- /top_menu -->
      <a href="#menu" class="btn_mobile">
        <div class="hamburger hamburger--spin" id="hamburger">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </a>
      <nav id="menu" class="main-menu">
        <ul>
          <li>
            <span>
              <a
                @click="
                  modelConfig.isPostPropertyForm = true;
                  appendStyleToParent();
                "
              >
                <!-- <span class="Post-prop-highlite"> Post your Prop </span> -->
                <span> Post your Prop </span>

              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                @click="
                  modelConfig.isPostRequirementForm = true;
                  appendStyleToParent();
                "
                href="javascript:void(0)"
              >
                Post your Requirement
              </a>
            </span>
          </li>

          <li v-if="!isLoggedIn">
            <span>
              <a href="javascript:void(0)">Property Management</a>
            </span>
            <ul>
              <li>
                <span>
                  <nuxt-link to="/propertymanagement"
                    >propertymanagement</nuxt-link
                  >
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/tenantmanagement"
                    >Tenant Management</nuxt-link
                  >
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/forowners">For Owners</nuxt-link>
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/pricing">Pricing</nuxt-link>
                </span>
              </li>

              <li>
                <span>
                  <nuxt-link to="/faq">FAQ</nuxt-link>
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/vacantsitemanagement"
                    >Vacant Site Management</nuxt-link
                  >
                </span>
              </li>

              <li>
                <span>
                  <nuxt-link to="/franchise-enquiry"
                    >Franchise Enquiry</nuxt-link
                  >
                </span>
              </li>
            </ul>
          </li>

          <li v-if="!isLoggedIn">
            <span>
              <nuxt-link to="">Services</nuxt-link>
            </span>
            <ul>
              <li v-for="(item, index) in mdServiceLinks" :key="index">
                <span>
                  <nuxt-link :to="item.path">{{ item.title }}</nuxt-link>
                </span>
              </li>
            </ul>
          </li>
          <li v-if="!isLoggedIn">
            <span>
              <nuxt-link to="/about">About Us</nuxt-link>
            </span>
            <ul>
              <li>
                <span>
                  <nuxt-link to="/testimonials">Testimonials</nuxt-link>
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/media-gallery">Media Gallery</nuxt-link>
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/faq">FAQ</nuxt-link>
                </span>
              </li>
              <li>
                <span>
                  <a
                    @click="
                      modelConfig.isEnquiryForm = true;
                      appendStyleToParent();
                    "
                    href="javascript:void(0)"
                  >
                    Enquiry
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/contacts">Contact Us</nuxt-link>
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/referfriend">Refer a Friend</nuxt-link>
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/help">Help</nuxt-link>
                </span>
              </li>
            </ul>
          </li>
          <li v-if="isLoggedIn">
            <span>
              <a href="#0"
                >{{ authUser.username }}
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-caret-down"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
                  /></svg
              ></a>
            </span>
            <ul>
              <li>
                <span>
                  <nuxt-link to="/testimonials">My Profile</nuxt-link>
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/media-gallery">My Alerts</nuxt-link>
                </span>
              </li>
              <li>
                <span>
                  <a
                    @click="
                      modelConfig.isAlert = true;
                      appendStyleToParent();
                    "
                    href="javascript:void(0)"
                  >
                    Set Alerts
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/faq">My Listing</nuxt-link>
                </span>
              </li>

              <li>
                <span>
                  <nuxt-link to="/contact">My Leads</nuxt-link>
                </span>
              </li>
              <li>
                <span>
                  <nuxt-link to="/referfriend">Schedule</nuxt-link>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Post Property-->
    <b-modal
      ref="prop-model"
      v-model="modelConfig.isPostPropertyForm"
      :hide-footer="modelConfig.isHideFooter"
      size="xl"
      :hide-header="modelConfig.isHideHeader"
    >
      <div class="modal-header">
        <h5>Post your Property</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          @click="hideModal"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-3 post-sidenav">
            <PropertyWizard1 />
          </div>
          <div class="col-lg-9">
            <PropertyWizard />
          </div>
        </div>
      </div>
    </b-modal>

    <!-- Login Form-->
    <b-modal
      v-model="modelConfig.isLoginForm"
      :hide-footer="modelConfig.isHideFooter"
      title="Sign In"
    >
      <Login @user-logged="userLoggedIn($event)" />
    </b-modal>

    <!-- Post Requirement Form-->
    <b-modal
      v-model="modelConfig.isPostRequirementForm"
      :hide-footer="modelConfig.isHideFooter"
      title="Post your Requirement"
    >
      <PostRequirementForm />
    </b-modal>

    <!-- Enquiry Form-->
    <b-modal
      v-model="modelConfig.isEnquiryForm"
      :hide-footer="modelConfig.isHideFooter"
      title="Enquiry Form"
    >
      <GeneralEnquiryForm />
    </b-modal>

    <!-- Alerts-->
    <b-modal
      v-model="modelConfig.isAlert"
      :hide-footer="modelConfig.isHideFooter"
      title="Alert"
    >
      <Alerts />
    </b-modal>
  </div>
</template>

<script>
import ls from "../helpers/localStorage";
import { EventBus } from "../helpers/event-bus";

export default {
  fetchOnServer: false,
  props: {
    isMapView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modelConfig: {
        isHideFooter: true,
        isHideHeader: true,
        isPostRequirementForm: false,
        isEnquiryForm: false,
        isAlert: false,
        isLoginForm: false,
        isPostPropertyForm: false,
      },
      authUser: {
        username: null,
      },
      isLoggedIn: false,
      showSignInModal: false,
      isPropertyAddClick: false,
      mdServiceLinks: [],
      bgColor: "#28a745",
      position: "bottom-right",
      fabActions: [
        {
          name: "chat",
          icon: "chat_bubble_outline",
        },
        {
          name: "alertMe",
          icon: "phone",
        },
      ],
      cities: [
        {
          name: "All India",
          value: null,
        },
        {
          name: "Bangalore",
          value: "bangalore",
        },
        {
          name: "Mumbai",
          value: "mumbai",
        },
        {
          name: "Delhi",
          value: "delhi",
        },
        {
          name: "Pune",
          value: "pune",
        },
        {
          name: "Chennai",
          value: "chennai",
        },
        {
          name: "Hyderabad",
          value: "hyderabad",
        },
        {
          name: "Kolkata",
          value: "kolkata",
        },
        {
          name: "Ahemdabad",
          value: "ahemdabad",
        },
      ],
      params: {
        activeCity: "All India",
        activeCityVal: "india",
      },
      toastConfig: {
        solid: true,
        toaster: "b-toaster-top-center",
        appendToast: false,
      },
    };
  },
  methods: {
    hideModal() {
      this.$refs["prop-model"].hide();
    },
    appendStyleToParent() {
      setTimeout(() => {
        $("body")
          .find(".modal")
          .parent()
          .attr("style", "position: absolute; z-index: 99999999 !important");
      });
    },
    getLocation() {
      const l = ls.get("loc") || {
        activeCity: "All India",
        activeCityVal: "india",
      };
      return l;
    },
    setLocation(location = null) {
      if (location) {
        ls.set("loc", {
          activeCity: location.name,
          activeCityVal: location.value,
        });
      }
      const l = this.getLocation();
      this.params.activeCity = l.activeCity;
      this.params.activeCityVal = l.activeCityVal;
      if (location) {
        EventBus.$emit("EVENT:setLocation", this.params.activeCityVal);
      }
    },
    getSession() {
      return localStorage.getItem("user");
    },
    userLoggedIn(session) {
      this.isLoggedIn = this.getSession() ? true : false;
      this.modelConfig.isLoginForm = false;
      // Populate session user
      this.authUser = { ...this.authUser, username: "demo" };
      this.$bvToast.toast("You have been succesfully logged in.", {
        title: "",
        variant: "success",
        ...this.toastConfig,
      });
    },
    logout() {
      this.isLoggedIn = false;
      localStorage.clear();
      this.$bvToast.toast("You have been succesfully logged out.", {
        title: "",
        variant: "warning",
        ...this.toastConfig,
      });
    },
    loadHotJarScript() {
      (function (h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function () {
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        h._hjSettings = { hjid: 2037924, hjsv: 6 };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
    },
  },
  async mounted() {
    this.setLocation();
    this.mdServiceLinks = await this.$content("services")
      .only(["title", "path"])
      .fetch();
    this.mdServiceLinks = this.mdServiceLinks.map((item) => {
      item.path = item.path.replace("services", "service");
      return item;
    });
    this.isLoggedIn = this.getSession() ? true : false;
    this.authUser = {
      ...this.authUser,
      username: this.getSession() ? "demo" : null,
    };
    this.loadHotJarScript();
  },
};
</script>
