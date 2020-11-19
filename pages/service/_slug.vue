<template>
  <div>
    <section class="serv-background-img start_bg_zoom">
      <div class="wrapper warp-padding pb-5 serv-background-col">
        <div class="container">
          <div class="row">
            <div class="col-md-8 text-white">
              <small v-if="service.header_small">{{
                service.header_small
              }}</small>
              <h3 class="text-white">
                <strong>{{ service.header_title }}</strong>
              </h3>

              <p v-if="service.header_title_desc">
                {{ service.header_title_desc }}
              </p>
              <!-- <nuxt-link :to="service.header_button_link" class="btn_1" v-if="service.header_button && service.header_button_link">{{ service.header_button }}</nuxt-link> -->
              <b-button
                id="show-btn"
                variant="success"
                @click="$bvModal.show(service.modal1_name); appendStyleToParent()"
                v-if="service.modal1_name && service.modal1"
                >{{ service.modal1 }}</b-button
              >
              <b-button
                id="show-btn"
                variant="success"
                @click="$bvModal.show(service.modal2_name); appendStyleToParent()"
                v-if="service.modal2_name && service.modal2"
                >{{ service.modal2 }}</b-button
              >
              <b-modal
                id="bv-modal-owned"
                centered
                class="mt-10"
                hide-footer
                title="Apply For Insurance"
              >
                <div class="d-block text-center">
                  <InsuranceEnquiryForm />
                </div>
              </b-modal>
              <div class="d-block serv-h">
                <div>
                  <div class="d-flex">
                    <span class="material-icons"
                      ><h2 class="serv-icon">attach_money</h2></span
                    >
                    <p class="mt-2 ml-3">
                      <strong>Guaranteed Lowest Prices</strong>
                    </p>
                  </div>
                </div>
                <div>
                  <div class="d-flex">
                    <span class="material-icons"
                      ><h2 class="serv-icon">date_range</h2></span
                    >
                    <p class="mt-2 ml-3">
                      <strong>Upto 15 Years Warranty</strong>
                    </p>
                  </div>
                </div>
                <div>
                  <div class="d-flex">
                    <span class="material-icons"
                      ><h2 class="serv-icon">cloud_done</h2></span
                    >
                    <p class="mt-2 ml-3">
                      <strong>Only the best material and build quality​</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-white" v-if="component">
              <component v-bind:is="component"></component>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /header-video -->

    <!-- /container -->

    <div
      class="container margin_80_55"
      v-if="service.service_head && service.service_decs"
    >
      <div class="main_title_2">
        <span><em></em></span>
        <div class="text-center">
          <h2>{{ service.service_head }}</h2>
          <p>{{ service.service_decs }}</p>
        </div>
      </div>
      <div
        class="row"
        v-if="service.service_cont && service.service_cont.length"
      >
        <div
          class="col-lg-4 col-md-6"
          v-for="(data, index) of service.service_cont"
          :key="index"
        >
          <a class="box_feat" href="#0">
            <i class="pe-7s-medal"></i>
            <h3>{{ data.opt }}</h3>
            <p>{{ data.opt_desc }}</p>
          </a>
        </div>
      </div>
      <!--/row-->
    </div>

    <div
      class="container margin_80_55"
      v-if="
        service && service.how_it_works_cont && service.how_it_works_cont.length
      "
    >
      <div class="main_title_2">
        <span><em></em></span>
        <h2>{{ service.how_it_works_head }}</h2>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-md-6"
          v-for="(data, index) of service.how_it_works_cont"
          :key="index"
        >
          <a class="box_feat" href="#0">
            <figure>
              <img :src="data.img" width="40" height="40" />
            </figure>
            <i class="data.icon"></i>
            <h3>{{ data.opt }}</h3>
            <p>{{ data.opt_desc }}</p>
          </a>
        </div>
      </div>
    </div>
    <!-- /container -->

    <div class="row">
      <div class="col-lg-12">
        <center>
          <article>
            <nuxt-content :document="service" />
          </article>
        </center>
      </div>
    </div>

    <div class="container margin_80_55" v-if="service.video_head">
      <div class="main_title_2">
        <span><em></em></span>
        <h2>{{ service.video_head }}</h2>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              :src="service.video_url"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <!--/container-->

    <div class="bg_color_1" v-if="service.faq && service.faq.length">
      <div class="container margin_80_55">
        <div class="main_title_2">
          <span><em></em></span>
          <h2>{{ service.faq_head }}</h2>
          <p>{{ service.faq_desc }}</p>
        </div>
        <div class="row justify-content-between">
          <div class="col-lg-6">
            <div id="#app">
              <section v-for="(data, index) of service.faq_video" :key="index">
                <h2></h2>
                <!-- <youtube
                  :video-id="data"
                  @ready="ready"
                  @playing="playing"
                ></youtube> -->
              </section>
            </div>
          </div>
          <div class="col-lg-5">
            <h4 class="nomargin_top">FAQ</h4>
            <div role="tablist" class="add_bottom_45 accordion_2" id="payment">
              <div
                class="card"
                v-for="(data, index) of service.faq"
                :key="index"
              >
                <div class="card-header" role="tab">
                  <h5 class="mb-0">
                    <a
                      data-toggle="collapse"
                      href="#collapseOne_payment"
                      aria-expanded="true"
                      ><i class="indicator ti-minus"></i>{{ data.head }}</a
                    >
                  </h5>
                </div>

                <div
                  id="collapseOne_payment"
                  class="collapse show"
                  role="tabpanel"
                  data-parent="#payment"
                >
                  <div class="card-body">
                    <p>{{ data.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- /accordion payment -->
          </div>
        </div>
        <!--/row-->
      </div>
      <!--/container-->
    </div>
    <div
      class="container mt-4 mb-4 text-center"
      v-if="service.foot_head && service.foot_desc"
    >
      <h1>{{ service.foot_head }}</h1>
      <p>{{ service.foot_desc }}</p>
      <nuxt-link to="#" class="btn_1">{{ service.foot_button }}</nuxt-link>
      <nuxt-link to="#" class="btn_1">Cancel</nuxt-link>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  mounted() {
    $(window).on("load", function () {
      "use strict";
      $("#carousel_slider").flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 280,
        itemMargin: 25,
        asNavFor: "#slider",
      });
      $("#slider").flexslider({
        animation: "fade",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel_slider",
        start: function (slider) {
          $("body").removeClass("loading");
        },
      });
    });
  },
  head: {
    bodyAttrs: {
      id: "ssr-page",
    },
  },
  async asyncData({ $content, params }) {
    const service = await $content("services", params.slug).fetch();
    const component = (service.form_name && service.form_name) || null;
    return {
      service,
      component,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    appendStyleToParent() {
      setTimeout(() => {
        $("body")
          .find(".modal")
          .parent()
          .attr("style", "position: absolute; z-index: 99999999 !important");
      });
    },
  },
};
</script>

<style>
.nuxt-content img {
  width: 800px !important;
  margin-top: 20px;
}
.nuxt-content iframe {
  width: 800px !important;
  height: 600px !important;
  float: none;
}
.nuxt-content {
  overflow: hidden;
}
#ssr-page {
  overflow-x: hidden !important;
}
</style>
