<template>
  <main>
    <section class="header-video adventure">
      <div id="hero_video">
        <div class="wrapper">
          <div class="container container-custom">
            <div class="row">
              <div class="col-md-8">
                <h3>Refer a Friend</h3>
                <p>
                  Earn Rs.100 in your
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu5iE2nID2-6WxFyqfXrgC9lrEDK0mo3MjGQ&usqp=CAU"
                    alt="paytm"
                    height="20"
                  />
                  Wallet for every property listing we publish
                </p>
              </div>
              <div class="bg-white col-md-4">
                <form method="post" id="contactform" autocomplete="off">
                  <div class="row">
                    <div class="col-md-12 pt-4">
                      <div class="form-group">
                        <label class="l-color">Name</label>
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
                        <label class="l-color">Mobile Number</label>
                        <input
                          class="form-control"
                          type="text"
                          id="lastname_contact"
                          name="lastname_contact"
                        />
                      </div>
                    </div>
                  </div>

                  <p>
                    <span>
                      <b-button id="show-btn" block variant="success"
                        >Refer A Friend</b-button
                      >
                      <b-button
                        id="show-btn"
                        block
                        variant="success"
                        @click="$bvModal.show('bv-modal-refer'); appendStyleToParent();"
                        mt-4
                        >Get Customized Solutions</b-button
                      >
                      <b-modal
                        id="bv-modal-refer"
                        class="mt-10"
                        centered
                        hide-footer
                        title="Refer Your Friend & Get Reward"
                      >
                        <div class="d-block text-center">
                          <ReferForm />
                        </div>
                      </b-modal>

                      <!-- <nuxt-link to="" data-toggle="modal" data-target="#ReferModal" class="btn_1"> Refer A Friend</nuxt-link>

              <div class="menu_fixed modal fade mt-5" id="ReferModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						  <div class="modal-dialog modal-dialog-centered" role="document">
						    <div class="modal-content">
						      <div class="modal-header">
						        <h5 class="modal-title" id="exampleModalLabel">Refer A Friend</h5>
						        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <div class="modal-body">
                   <ReferForm />
						      </div>
						    </div>
						  </div>
						</div> -->
                    </span>
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
    </section>
    <!-- /header-video -->

    <!-- <div class="container container-custom margin_80_55">
      <section class="add_bottom_45">
          <div class="row text-center">
            <div class="col-lg-6">
          <h1 class="h-cool-color"> Cool!How do I do it ?</h1>
          <img src="https://assets.nobroker.in/nb-new/public/Refer-And-Earn/enter-owner-details.png" alt="icon" class="img-fluid">
          <h2 class="mt-3">Share contact details of the house owner and get reward</h2>
          <nuxt-link to="" class="btn_1">Enter Owner Details</nuxt-link>
          </div>
          <div class="col-lg-6">
          <img src="https://assets.nobroker.in/nb-new/public/Refer-And-Earn/Camera.png" alt="icon" class="img-fluid">
          <h4>Alternatively, click and upload a picture of the 'TO LET' board outside any house in </h4><h2>Bangalore, Mumbai, Pune, Chennai, Gurgaon, Hydrabad, Delhi, Noida, Greater Noida, Ghaziabad,Faridabad</h2>
          <nuxt-link to="" class="btn_1"> Upload Photo</nuxt-link>
          <nuxt-link to="" class="btn_1"> Take Photo</nuxt-link>
          </div>
          </div>
        <div id="reccomended_adventure" class="owl-carousel owl-theme">
          <div class="item">
            <nuxt-link to="/adventure-detail" class="grid_item_adventure">
              <figure>
                <div class="score"><strong>7.9</strong></div>
                
                <div class="info">
                  <em>3 days in Patagonia</em>
                  <h3>Horseback ride through Valencia</h3>
                </div>
              </figure>
            </nuxt-link>
          </div>

          <div class="item">
            <nuxt-link to="/adventure-detail" class="grid_item_adventure">
              <figure>
                <div class="score"><strong>9.0</strong></div>
                <img
                  src="img/adventure_popular_2.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="info">
                  <em>2 days in Caribbean</em>
                  <h3>Horseback ride through Valencia</h3>
                </div>
              </figure>
            </nuxt-link>
          </div>

          <div class="item">
            <nuxt-link to="/adventure-detail" class="grid_item_adventure">
              <figure>
                <div class="score"><strong>9.5</strong></div>
                <img
                  src="img/adventure_popular_3.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="info">
                  <em>2 days in Caribbean</em>
                  <h3>Horseback ride through Valencia</h3>
                </div>
              </figure>
            </nuxt-link>
          </div>

          <div class="item">
            <nuxt-link to="/adventure-detail" class="grid_item_adventure">
              <figure>
                <div class="score"><strong>9.0</strong></div>
                <img
                  src="img/adventure_popular_4.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="info">
                  <em>2 days in Canada</em>
                  <h3>Horseback ride through Valencia</h3>
                </div>
              </figure>
            </nuxt-link>
          </div>

          <div class="item">
            <nuxt-link to="/adventure-detail" class="grid_item_adventure">
              <figure>
                <div class="score"><strong>9.0</strong></div>
                <img
                  src="img/adventure_popular_5.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="info">
                  <em>3 days in Norway</em>
                  <h3>Horseback ride through Valencia</h3>
                </div>
              </figure>
            </nuxt-link>
          </div>

          <div class="item">
            <nuxt-link to="/adventure-detail" class="grid_item_adventure">
              <figure>
                <div class="score"><strong>8.5</strong></div>
                <img
                  src="img/adventure_popular_6.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="info">
                  <em>3 days in Brasil</em>
                  <h3>Horseback ride through Valencia</h3>
                </div>
              </figure>
            </nuxt-link>
          </div>
        </div>

      </section>
    


      
    </div> -->
    <!-- /container -->

    <!-- <div class="container margin_80_55">
      <div class="main_title_2">
        <span><em></em></span>
        <h2>Why Choose PropertyCare</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-medal"></i>
            <h3>+ 1000 Customers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
        <div class="col-lg-6 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-help2"></i>
            <h3>H24 Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
        <div class="col-lg-6 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-culture"></i>
            <h3>All Metros Presence</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
        <div class="col-lg-6 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-headphones"></i>
            <h3>Help Direct Line</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
        <div class="col-lg-6 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-credit"></i>
            <h3>Secure Payments</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
        <div class="col-lg-6 col-md-6">
          <a class="box_feat" href="#0">
            <i class="pe-7s-chat"></i>
            <h3>Support via Chat</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </a>
        </div>
      </div>
    </div> -->

    <div class="bg_color_1">
      <div class="container container-custom margin_80_55">
        <div class="main_title_2">
          <h2>Referral Benefits</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="row adventure_feat">
          <div class="col-md-4">
            <img src="img/adventure_icon_1.svg" alt="" width="75" height="75" />
            <h3>Refer a Owner</h3>
            <p>
              Ius cu tamquam persequeris, eu veniam apeirian platonem qui, id
              aliquip voluptatibus pri.
            </p>
          </div>
          <div class="col-md-4">
            <img src="img/adventure_icon_2.svg" alt="" width="75" height="75" />
            <h3>Porst Vacant property pictures</h3>
            <p>
              His in harum errem dissentias, has mutat facilisi ea, ubique
              possim praesent eum ea.
            </p>
          </div>
          <div class="col-md-4">
            <img src="img/adventure_icon_3.svg" alt="" width="75" height="75" />
            <h3>Earn Reward</h3>
            <p>
              In ridens tamquam argumentum usu, ne ludus intellegebat vix. Eu
              inani omnes usu, an pri errem mucius.
            </p>
          </div>
        </div>
      </div>
      <!-- /container -->
    </div>
    <!-- /bg_color_1 -->

    <div class="container margin_80_55">
      <div class="main_title_2">
        <span><em></em></span>
        <h2>How it Works?</h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <a class="box_feat" href="#0">
            <figure>
              <img
                src="img/amenities/Builder and developer.svg"
                alt=""
                width="40"
                height="40"
              />
            </figure>
            <h3>Step 1</h3>
            <p>description in short</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6">
          <a class="box_feat" href="#0">
            <figure>
              <img
                src="img/amenities/Buyer.svg"
                alt=""
                width="40"
                height="40"
              />
            </figure>
            <h3>Step 2</h3>
            <p>description in short</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6">
          <a class="box_feat" href="#0">
            <figure>
              <img
                src="img/amenities/Franchise service.svg"
                alt=""
                width="40"
                height="40"
              />
            </figure>
            <h3>Step 3</h3>
            <p>description in short</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6">
          <a class="box_feat" href="#0">
            <figure>
              <img
                src="img/amenities/Happy customer.svg"
                alt=""
                width="40"
                height="40"
              />
            </figure>
            <h3>Step 4</h3>
            <p>description in short</p>
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
          <h2>FAQs</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="row justify-content-between">
          <!-- <div class="col-lg-6 " >

<iframe width="420" height="200"
src="https://www.youtube.com/embed/8aNC3d3WANk">
</iframe> -->
          <!-- <youtube :video-id="www.youtube.com/embed/tgbNymZ7vqY"></youtube> -->
          <!-- </div> -->
          <div class="col-lg-12">
            <!-- <p>
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
            <p><em>CEO Radha Krishnan</em></p> -->
            <!-- <h4 class="nomargin_top">FAQ</h4> -->
            <div role="tablist" class="add_bottom_45 accordion_2" id="payment">
              <div class="card">
                <div class="card-header" role="tab">
                  <h5 class="mb-0">
                    <a
                      data-toggle="collapse"
                      href="#collapseOne_payment"
                      aria-expanded="true"
                      ><i class="indicator ti-minus"></i>Faq Question about
                      specific service?</a
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
                    <p>
                      Nihil anim keffiyeh helvetica, craft beer labore wes
                      anderson cred nesciunt sapiente ea proident. Ad vegan
                      excepteur butcher vice lomo. Leggings occaecat craft beer
                      farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore
                      sustainable VHS.
                    </p>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </p>
                  </div>
                </div>
              </div>
              <!-- /card -->
              <div class="card">
                <div class="card-header" role="tab">
                  <h5 class="mb-0">
                    <a
                      class="collapsed"
                      data-toggle="collapse"
                      href="#collapseTwo_payment"
                      aria-expanded="false"
                    >
                      <i class="indicator ti-minus"></i>Faq Question about
                      specific service?</a
                    >
                  </h5>
                </div>
                <div
                  id="collapseTwo_payment"
                  class="collapse"
                  role="tabpanel"
                  data-parent="#payment"
                >
                  <div class="card-body">
                    <p>
                      Nihil anim keffiyeh helvetica, craft beer labore wes
                      anderson cred nesciunt sapiente ea proident. Ad vegan
                      excepteur butcher vice lomo. Leggings occaecat craft beer
                      farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore
                      sustainable VHS.
                    </p>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </p>
                  </div>
                </div>
              </div>
              <!-- /card -->
              <div class="card">
                <div class="card-header" role="tab">
                  <h5 class="mb-0">
                    <a
                      class="collapsed"
                      data-toggle="collapse"
                      href="#collapseThree_payment"
                      aria-expanded="false"
                    >
                      <i class="indicator ti-minus"></i>Faq Question about
                      specific service?</a
                    >
                  </h5>
                </div>
                <div
                  id="collapseThree_payment"
                  class="collapse"
                  role="tabpanel"
                  data-parent="#payment"
                >
                  <div class="card-body">
                    <p>
                      Nihil anim keffiyeh helvetica, craft beer labore wes
                      anderson cred nesciunt sapiente ea proident. Ad vegan
                      excepteur butcher vice lomo. Leggings occaecat craft beer
                      farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore
                      sustainable VHS.
                    </p>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </p>
                  </div>
                </div>
              </div>
              <!-- /card -->
            </div>
            <!-- /accordion payment -->
          </div>
        </div>
        <!--/row-->
      </div>
      <!--/container-->
    </div>
    <!--/bg_color_1-->

    <div class="call_section adventure">
      <div class="container clearfix">
        <div class="col-lg-5 col-md-6 float-right wow" data-wow-offset="250">
          <div class="block-reveal">
            <div class="block-vertical"></div>
            <div class="box_1">
              <h3>Manage Your property in few clicks</h3>
              <p>
                Ius cu tamquam persequeris, eu veniam apeirian platonem qui, id
                aliquip voluptatibus pri. Ei mea primis ornatus disputationi.
                Menandri erroribus cu per, duo solet congue ut.
              </p>
              <a href="#0" class="btn_1 rounded">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--/call_section-->
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
  }
};
</script>