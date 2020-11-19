<template>
  <main>
    <section class="hero_in general">
      <div class="wrapper">
        <div class="container">
          <h1 class="fadeInUp"><span></span>About PropertyCare</h1>
        </div>
      </div>
    </section>
    <!--/hero_in-->

    <div class="container margin_80_55">
      <div class="main_title_2">
        <span><em></em></span>
        <h2>Why Choose PropertyCare</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-medal"></i>
            <h3>+ 1000 Customers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-help2"></i>
            <h3>H24 Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-culture"></i>
            <h3>All Metros Presence</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-headphones"></i>
            <h3>Help Direct Line</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-credit"></i>
            <h3>Secure Payments</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-chat"></i>
            <h3>Support via Chat</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
      </div>
      <!--/row-->
    </div>
    <!-- /container -->

    <div class="bg_color_1">
      <div class="container margin_80_55">
        <div class="main_title_2">
          <span><em></em></span>
          <h2>Our Origins and Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="row justify-content-between">
          <div class="col-lg-6 wow" data-wow-offset="150">
            <figure class="block-reveal">
              <div class="block-horizzontal"></div>
              <img src="img/about_1.jpg" class="img-fluid" alt="" />
            </figure>
          </div>
          <div class="col-lg-5">
            <p>
              Lorem ipsum dolor sit amet, homero erroribus in cum. Cu eos
              <strong>scaevola probatus</strong>. Nam atqui intellegat ei, sed
              ex graece essent delectus. Autem consul eum ea. Duo cu fabulas
              nonumes contentiones, nihil voluptaria pro id. Has graeci
              deterruisset ad, est no primis detracto pertinax, at cum malis
              vitae facilisis.
            </p>
            <p>
              Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id
              usu zril tacimates neglegentur. Eam id legimus torquatos
              cotidieque, usu decore
              <strong>percipitur definitiones</strong> ex, nihil utinam recusabo
              mel no. Dolores reprehendunt no sit, quo cu viris theophrastus.
              Sit unum efficiendi cu.
            </p>
            <p><em>CEO Radha Krishnan</em></p>
          </div>
        </div>
        <!--/row-->
      </div>
      <!--/container-->
    </div>
    <!--/bg_color_1-->

    <div class="container margin_80_55">
      <div class="main_title_2">
        <span><em></em></span>
        <h2>Our Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div id="carousel" class="owl-carousel owl-theme">
        <div class="item">
          <a href="#0">
            <div class="title">
              <h4>Julia Holmes<em>CEO</em></h4>
            </div>
            <img src="img/1_carousel.jpg" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#0">
            <div class="title">
              <h4>Lucas Smith<em>Marketing</em></h4>
            </div>
            <img src="img/2_carousel.jpg" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#0">
            <div class="title">
              <h4>Paul Stephens<em>Business strategist</em></h4>
            </div>
            <img src="img/3_carousel.jpg" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#0">
            <div class="title">
              <h4>Pablo Himenez<em>Customer Service</em></h4>
            </div>
            <img src="img/4_carousel.jpg" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#0">
            <div class="title">
              <h4>Andrew Stuttgart<em>Admissions</em></h4>
            </div>
            <img src="img/5_carousel.jpg" alt="" />
          </a>
        </div>
      </div>
      <!-- /carousel -->
    </div>
    <!--/container-->
  </main>
</template>

	<script>
export default {
  mounted() {
    $(window).on("load", function () {
      "use strict";
      $(".owl-carousel").owlCarousel({
        autoPlay: 3000,
        items: 1, // THIS IS IMPORTANT
        responsive: {
          480: { items: 1 }, // from zero to 480 screen width 4 items
          768: { items: 2 }, // from 480 screen widthto 768 6 items
          1024: {
            items: 3, // from 768 screen width to 1024 8 items
          },
        },
      });
    });
  },
};
</script>	