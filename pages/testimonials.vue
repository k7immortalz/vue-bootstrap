<template>
    <div>
        		<section class="hero_in general">
			<div class="wrapper">
				<div class="container">
					<h1 class="fadeInUp"><span></span>Testimonials</h1>
				</div>
			</div>
		</section>
     		<div class="container margin_60_35">
			<div class="row">
			
				
				<div class="col-lg-8" id="faq">
					<h4 class="nomargin_top">Testimonials</h4>
					<div role="tablist" class="add_bottom_45 accordion_2" id="payment" v-for="item in response.testimonials" :key="item.id">
						<div class="card" >
							<div class="card-header" role="tab">
								<h5 class="mb-0">
									<a data-toggle="collapse" href="#collapseOne_payment" aria-expanded="true"><i class="indicator ti-minus"></i><img src="img/thumb_blog.jpg" alt="" /><span class="pl-3"> {{item.name}}</span><span class="pl-3"> &nbsp; {{item.location}}</span></a>
								</h5>
							</div>

							<div id="collapseOne_payment" class="collapse show" role="tabpanel" data-parent="#payment">
								<div class="card-body">
									<p>{{item.description}}</p>
								</div>
							</div>
						</div>




						<!-- /card -->
					</div>
					<!-- /accordion payment -->			
				</div>
				<!-- /col -->
					<aside class="col-lg-4 " id="sidebar">
						<div class="box_detail box-detail-b booking">
              <div class>
                <h3>
                  <span>Request Call back</span>
                </h3>
              </div>
              <div class="form-group input-type">
               <div class="custom-file mb-3">
				    <span>Click Photo Or</span>
				  <input type="button" id="loadFileXml" value="Upload Photo" class="btn btn-secondary" onclick="document.getElementById('file').click();" />
                  <input type="file" style="display:none;" id="file" name="file"/>
                  
                </div>
              </div>
              <div class="form-group input-type">
                <input class="form-control" type="text" id="name" name="name" placeholder="Name" v-model="name" />
               
              </div>
			  <div class="form-group input-type">
                <input class="form-control" type="text" id="city" name="city" placeholder="City" v-model="location" />
               
              </div>
			   <div class="form-group">
                 <label for="exampleFormControlTextarea1">Testimonials</label>
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description"></textarea>
                </div>
				<!-- <div id="app">
                
                 
                 <star-rating></star-rating>
				 </div> -->
				         <button type="button" class="btn btn-success btn-block"   @click="insert_function()" >Submit</button>
              <!-- <a href="#" class="btn_1 full-width purchase">Sumbit</a> -->
              
              
            </div>
            <ul class="share-buttons">
              <li>
                <a class="fb-share" href="#0">
                  <i class="social_facebook"></i> Share
                </a>
              </li>
              <li>
                <a class="twitter-share" href="#0">
                  <i class="social_twitter"></i> Tweet
                </a>
              </li>
              <li>
                <a class="gplus-share" href="https://api.whatsapp.com/send?phone=918095063070&text=Hey">
                  <i class="social_wordpress"></i> Share
                </a>
              </li>
            </ul>
						<!-- Bootstap Modal -->
						<div class="menu_fixed modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
						</div>
						<!-- /Bootstap Modal -->
								
				</aside>
				<!--/aside -->
			</div>
			<!-- /row -->
		</div>   
    </div>
</template>
<script>
import gql from "graphql-tag";
export default {
	data(){
		return {
	    response: {
        testimonials: [],
        count: 0,
        loader: false,
	  },
	  testimonials: [],
	  name:"",
	  location:"",
	  description:""
		}
	},
	  methods: {
    async fetchData() {
		this.response.loader = true
      await this.$apollo
        .query({
		  query: require("@/graphQl/queries/testimonials/get.gql"),
		  fetchPolicy: "network-only"
        })
        .then(({ data }) => {
          const { testimonials = [] } = data;
          this.response.testimonials = [
            ...this.response.testimonials,
            ...testimonials,
          ];
          setTimeout(() => {
            this.response.loader = false;
          }, 1000);
		});
		 console.log(this.response.testimonials)
	},
	    async insert_function() {
      const name = this.name; 
      const location = this.location;
      const description = this.description;

      const res = await this.$apollo.mutate({
        mutation: require("@/graphQl/queries/testimonials/post.gql"),
        variables: {
          name,
          location,
          description
        },
      });
                if(res){
		alert("Inserted Success")
		this.$router.go()
        console.log(res)
      }
    },
  },
    watch: {
    "$route.query": {
      handler(newValue) {
        this.response.testimonials = [];
        this.fetchData();
      },
      immediate: true,
    },
  },
}
</script>
 