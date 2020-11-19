<template>
  <main>
    <section class="hero_single version_3">
      <div class="wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h3>Property care Franchisees</h3>
              <p>Franchisee for Property Management Services</p>
            </div>
            <div class="main_search col-md-4">
              <h3>Franchise Enquiry</h3>
              <form>
                <div class="custom-search-input-2">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder=" Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="dates"
                      placeholder="phone"
                    />
                  </div>
                </div>
                <span>
                  <b-button id="show-btn" block variant="success"
                    >Apply for Franchise</b-button
                  >
                  <!-- <nuxt-link to="" data-toggle="modal" data-target="#FranchiseModal" class="btn_1">Apply for Franchise</nuxt-link> -->
                  <b-button
                    id="show-btn"
                    block
                    variant="success"
                    @click="$bvModal.show('bv-modal-franc'); appendStyleToParent()"
                    mt-4
                    >Get Customized Solutions</b-button
                  >
                  <b-modal
                    id="bv-modal-franc"
                    class="mt-10"
                    centered
                    scrollable
                    hide-footer
                    title="Apply for Franchise"
                  >
                    <div class="d-block text-center">
                      <Franchiseform />
                    </div>
                  </b-modal>
                  <!-- <div class="menu_fixed modal fade mt-5" id="FranchiseModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						  <div class="modal-dialog modal-dialog-centered" role="document">
						    <div class="modal-content">
						      <div class="modal-header">
						        <h5 class="modal-title" id="exampleModalLabel">Franchise</h5>
						        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <div class="modal-body">
                   <Franchiseform />
						      </div>
						    </div>
						  </div>
						</div> -->
                </span>
                <!-- /row -->
              </form>
            </div>
            <!-- /main_search -->
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="header-video adventure">
      <div id="hero_video">
        <div class="wrapper">
          <div class="container container-custom">
            <div class="row">
              <div class="col-md-8">
                
                <h3>Do you know <span style="color : red">how much loan you can get?</span> Get maximum with NoBroke</h3>
                <p>We help you get the best loan offer for your new home purchase</p>
              </div>
              <div class=" col-md-4 ">
                <form method="post" id="contactform" autocomplete="off">
                  <div class="row">
                    <div class="col-md-12 mt-4">
                      <div class="text-center">
                      <p ><strong>Leave your house buying worries to us!</strong></p>
                      <p >Check your eligibility instantly</p>
                      </div>
                      <div class="form-group">
                        <label >Loan Amount</label>
                        <input
                          class="form-control"
                          type="text"
                          id="name_contact"
                          name="name_contact"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label >Mobile Number</label>
                        <input
                          class="form-control"
                          type="text"
                          id="lastname_contact"
                          name="lastname_contact"
                        />
                      </div>
                    </div>
                  </div>

                  <p class="add_top_30">
                    <nuxt-link to="/adventure-detail" class="btn_1"
                      >Apply Now</nuxt-link
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="img/video_fix.png"
        alt=""
        class="header-video--media"
        data-video-src="video/adventure"
        data-teaser-source="video/adventure"
        data-provider=""
        data-video-width="1920"
        data-video-height="960"
      />
    </section> -->
    <!-- /header-video -->
    <div class="container margin_80_55">
      <p>
        Where before your property management business may have been
        one-dimensional, Property care creates the opportunity for you to expand
        your service offerings into additional pillars and scale your business
        with minimal risk thanks to unparalleled expertise and support.
      </p>
      <div class="card p-5" style="width: 70rem">
        <img
          src="img\services\16_Franchise_Opportunities_Process.jpg"
          class="card-img-top img-fluid"
          alt="..."
        />
        <div class="card-body"></div>
      </div>
      <br />
    </div>

    <div class="container margin_80_55">
      <div class="main_title_2">
        <span><em></em></span>
        <div class="text-center">
          <h2>Benefits of Associating with PropertyCare</h2>
          <p>lorem ipsum dolor sit lorem ipsum dolor sit...</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-medal"></i>
            <h3>Proven Success</h3>
            <p>Get disbursal with minimal documentation sitting at home.</p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-help2"></i>
            <h3>Open disclodure</h3>
            <p>
              Choose from our 30+ partner banks and NBFCs you already know and
              trust for years.
            </p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-culture"></i>
            <h3>Legal Considerations</h3>
            <p>
              Get disbursal on priority for being a NoBroker previliged
              customer.
            </p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-headphones"></i>
            <h3>Initial Training</h3>
            <p>
              With completely transparent charge structure, you can make an
              informed decision beforehand.
            </p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-credit"></i>
            <h3>Ongoing Support</h3>
            <p>
              Get your home loan hassle free with end to end guidance from our
              Home Loan Experts.
            </p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-chat"></i>
            <h3>Hassle Free Process</h3>
            <p>
              Get your home loan hassle free with end to end guidance from our
              Home Loan Experts.
            </p>
          </a>
        </div>
      </div>
      <!--/row-->
    </div>

    <div class="container margin_80_55">
      <div class="main_title_2">
        <span><em></em></span>
        <h2>How it Works</h2>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/8aNC3d3WANk"
              allowfullscreen
            ></iframe>
          </div>

          <!-- <youtube :video-id="www.youtube.com/embed/tgbNymZ7vqY"></youtube> -->
        </div>
      </div>
      <!--/row-->
    </div>
    <!--/container-->

    <!--/bg_color_1-->

    <div class="main_title_2">
      <span><em></em></span>
      <div class="text-center">
        <h2>Services you can manage with PropertyCare Association</h2>
        <p>lorem ipsum dolor sit lorem ipsum dolor sit...</p>
      </div>
    </div>
    <div class="container margin_80_55">
      <div class="row">
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure><img src="img\amenities\Aerobics.svg" alt="" /></figure>
          </a>
          <p>Rent Agreement</p>
        </div>
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure>
              <img src="img\amenities\Agent Service.svg" alt="" />
            </figure>
          </a>
          <p>Home Loan</p>
        </div>
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure><img src="img\amenities\Agent.svg" alt="" /></figure>
          </a>
          <p>Home Cleaning</p>
        </div>
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure><img src="img\amenities\Agreement.svg" alt="" /></figure>
          </a>
          <p>Sanitization</p>
        </div>
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure><img src="img\amenities\atm.svg" alt="" /></figure>
          </a>
          <p>Pest Control</p>
        </div>
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure><img src="img\amenities\Badminton.svg" alt="" /></figure>
          </a>
          <p>Vastu</p>
        </div>
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure><img src="img\amenities\Basketball.svg" alt="" /></figure>
          </a>
          <p>Property Inspection</p>
        </div>
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure>
              <img src="img\amenities\Beauty parlor.svg" alt="" />
            </figure>
          </a>
          <p>Tenat Verification</p>
        </div>
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure>
              <img src="img\amenities\Builder and developer.svg" alt="" />
            </figure>
          </a>
          <p>Design & Decor</p>
        </div>
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure><img src="img\amenities\Buyer.svg" alt="" /></figure>
          </a>
          <p>Rental Furniture</p>
        </div>
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure>
              <img src="img\amenities\Childrens park.svg" alt="" />
            </figure>
          </a>
          <p>Pay Rent Comming Soon</p>
        </div>
        <div class="col-lg-2 col-md-3 mb-0 text-center">
          <a class="box_feat amunity-icon" href="#0">
            <figure><img src="img\amenities\Clinc.svg" alt="" /></figure>
          </a>
          <p>Legal services Comming Soon</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  methods: {
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