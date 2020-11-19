<template>
<div class="list-v-box">
  <div class="box_list isotope-item popular" v-if="itemState">
    <div class="row no-gutters">
      <div class="col-lg-5 col-md-5 col-sm-5 col-5 col-xl-5">
        <figure>
          <small>{{itemState.property_type}}</small>
          <nuxt-link
            :to="
              '/property/' +
              item.id +
              '?pId=' +
              item.property_id +
              '&oid=' +
              item.id
            "
          >
            <img
              :src="itemState.image"
              class="img-fluid"
              alt
              width="800"
              height="533"
            />
            <div class="read_more">
              <span>Read more</span>
            </div>
          </nuxt-link>
        </figure>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-7 col-xl-7">
        <div class="wrapper">
          <span class="material-icons list-h-icon">visibility_off</span>
          <span class="material-icons list-a-icon">star_border</span>
          <span class="material-icons list-b-icon">block</span>         
          <h3>
            <nuxt-link
              :to="
                '/property/' +
                itemState.id +
                '?pId=' +
                itemState.property_id +
                '&oid=' +
                itemState.id
              "
              >{{
                itemState.marketing_title
              }}</nuxt-link
            >
          </h3>
          <p>
            {{ item.description || item.marketing_desc }}
          </p>
          <span class="price">
            From
            <strong>{{ item.square_footage }}</strong> /Sq Feet
          </span>
          <br>
          <div class="row">
           <div class="col-5">
           <p><strong>	&#x20B9; 5</strong> <small>Cr</small></p>
           <p><small>&#x20B9; 2,323/sq.ft.</small></p>
           </div>
           <div class="col-5">
            <p><strong>21,527</strong> <small>sq.ft.</small></p>
           <p><small>(2000 sq.m.) Plot Area</small></p>
           </div>
          </div>
          <br>
          <p class="mt-1">Lorem ipsum dolor sit amet consectetur,<span class="collapse" id="collapseExample">Lorem, 
          ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio vel dicta excepturi ea illum esse, 
          ipsum rem nemo minima maxime aliquid saepe. Tenetur accusamus possimus deserunt itaque dignissimos odit?</span>
           <a  data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
             more
           </a>
          </p>
          <br>
          <div class="badge badge-light"><small>REDY TO MOVE</small></div>
          <div class="badge badge-light"><small>RESALE</small></div>
          <div class="badge badge-light"><small>AGRICULTURAL/FARM LAND</small></div>
        </div> 
        <!-- <ul>
          <li><i class="icon_clock_alt"></i> Contact Us</li>
          <li>
            <div class="score">
              <span>
                Units
                <em> 35 Enquiries </em>
              </span>
              <strong>12</strong>
            </div>
          </li>
        </ul>        -->
      </div>
    </div>
  </div>
  <hr>
     <div class="row">
        <div class="col-lg-6 col-md-6 col-xl-6 mt-2">
          <p class="list-p"><small>Posted on 28th Oct, 2020 by</small></p>
          <p class="list-p"><strong>Dealer Shri Swami Samarth</strong></p>
        </div>
       <div class="col-lg-6 col-md-6 col-xl-6 mt-2">  
          <button type="button" class="btn_1 btn-light btn-md">View Phone Number</button>       
          <button type="submit" class="btn_1 btn-md mt-3">Contact Dealer</button>              
       </div>
     </div>
  </div>
  <!-- </div> -->
  <!-- /isotope-wrapper -->
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      itemState: this.item || null,
    };
  },
};
</script>
