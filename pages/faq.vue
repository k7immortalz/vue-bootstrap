<template>
    <div>
        		<section class="hero_in general">
			<div class="wrapper">
				<div class="container">
					<h1 class="fadeInUp"><span></span>Faq Section</h1>
				</div>
			</div>
		</section>
     		<div class="container margin_60_35">
			<div class="row">
				<aside class="col-lg-3" id="sidebar">
						<div class="box_style_cat" id="faq_box">
							<ul id="cat_nav" v-for="faq of faqs" :key="faq.index">
								<li><a href="#payment" class="active"><i class="icon_document_alt"></i>{{faq.title}}</a></li>
							</ul>
							<!-- <ul id="cat_nav">
								<li><a href="#payment" class="active"><i class="icon_document_alt"></i>Property Management</a></li>
								<li><a href="#tips"><i class="icon_document_alt"></i>Pricing &amp; Charges</a></li>
								<li><a href="#reccomendations"><i class="icon_document_alt"></i>Other Services</a></li>
								<li><a href="#terms"><i class="icon_document_alt"></i>Terms &amp; conditons</a></li>
								<li><a href="#booking"><i class="icon_document_alt"></i>Miscellaneous</a></li>
							</ul> -->
						</div>
						<!--/sticky -->
						<!-- <p><a href="#0" class="btn_1" data-toggle="modal" data-target="#exampleModal">Launch demo modal</a></p> -->
						<!-- Bootstap Modal -->
						<!-- <div class="menu_fixed modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						  <div class="modal-dialog modal-dialog-centered" role="document">
						    <div class="modal-content">
						      <div class="modal-header">
						        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
						        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <div class="modal-body">
						        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
						      </div>
						    </div>
						  </div>
						</div> -->
						<!-- /Bootstap Modal -->
				</aside>
				<!--/aside -->
				
				<div class="col-lg-9" id="faq" >
					<div v-for="faq of faqs" :key="faq.index">
										<h4 class="nomargin_top">{{faq.title}}</h4>
					<div role="tablist" class="add_bottom_45 accordion_2" :id="faq.id" v-for="data of faq.content" :key="data.index">
						<div class="card">
							<div class="card-header" role="tab">
								<h5 class="mb-0">
									<a data-toggle="collapse" href="#collapseOne_payment" aria-expanded="true"><i class="indicator ti-minus"></i>{{data.head}}</a>
								</h5>
							</div>

							<div id="collapseOne_payment" class="collapse show" role="tabpanel" data-parent="#payment">
								<div class="card-body">
									<p>{{data.head_desc}}</p>
								</div>
							</div>
						</div>
					</div>
					</div>

		
					<!-- /accordion payment -->
					
					<!-- /accordion Booking -->
				</div>

				<!-- /col -->
			</div>
			<!-- /row -->
		</div>   
		<!-- <b-button @click="makeToast()">Show Toast</b-button> -->
    </div>
	
</template>
<script>
export default {
	  async asyncData({ $content, params }) {
    const faqs = await $content("faq", params.slug).fetch();
    return {
      faqs,
    };
  },
	   methods: {

      makeToast(variant = null) {
        this.$bvToast.toast('Toast body content', {

          solid: true
        })
      }
  }
}
</script>