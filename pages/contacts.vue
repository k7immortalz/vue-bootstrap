<template>
    	<main>
		<section class="hero_in contacts">
			<div class="wrapper">
				<div class="container">
					<h1 class="fadeInUp"><span></span>Contact Us</h1>
				</div>
			</div>
		</section>
		<!--/hero_in-->

		

		<div class="bg_color_1">
			<div class="container margin_80_55">
				<div class="row">
					<div class="col-lg-12">
						<div class="map_contact">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5183661587694!2d77.63843391464411!3d12.874354690919697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b4de9a1d79b%3A0x41b70b6ae9b0b684!2sProperty%20Care!5e0!3m2!1sen!2sin!4v1602592038876!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
						</div>
					</div>
				</div>
				<div class="row justify-content-between mt-5">
					<div class="col-lg-6">
						<h4>Send a message</h4>
						<p>Ex quem dicta delicata usu, zril vocibus maiestatis in qui.</p>
						<div id="message-contact"></div>
						<form method="post" action="assets/contact.php" id="contactform" autocomplete="off">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label>First name</label>
										<input class="form-control" type="text" id="name_contact" name="name_contact"  v-model="f_name">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Last name</label>
										<input class="form-control" type="text" id="lastname_contact" name="lastname_contact"  v-model="l_name">
									</div>
								</div>
							</div>
							<!-- /row -->
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label>MObile</label>
										<input class="form-control" type="email" id="email_contact" name="email_contact"  v-model="mobile">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Email</label>
										<input class="form-control" type="text" id="phone_contact" name="phone_contact"  v-model="email">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label>Skype ID</label>
										<input class="form-control" type="email" id="email_contact" name="email_contact"  v-model="skype">
									</div>
								</div>
							</div>
							<!-- /row -->
							<div class="form-group">
								<label>Message</label>
								<textarea class="form-control" id="message_contact" name="message_contact" style="height:150px;"  v-model="message"></textarea>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label>Are you human? 3 + 1 =</label>
										<input class="form-control" type="text" id="verify_contact" name="verify_contact">
									</div>
								</div>
							</div>
							<p class="add_top_30">        <button type="button" class="btn btn-success btn-block"   @click="insert_function()" >Submit</button></p>
						</form>
					</div>
					<div class="col-lg-5 address-b pt-5">
					<div class="address-p-m">
					<p><strong>Registered Office:</strong></p>
					<h5>	
					<p>Property Care<br>
					#45, Manipal County Road,<br>
                    Singasandra, Off Hosur Road<br>
					Bangalore, India - 560 068</p>
					 </h5>
					 <h6 class="mt-4">
					 <p>(Landmark: Near Manipal County Club</p>
                     <p>Indian Oil petrol bunk/Five Star Chicken Shop) </p>
					 <p>Mobile: +91-96639 33100 / 98458 44181</p>
					 <p>E-mail: info@propertycare.co.in</p>
					 </h6>
                     </div>	



						
						
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /bg_color_1 -->
		<div class="contact_info">
			<div class="container">				
				<ul class="clearfix">
					<li>
						<i class="pe-7s-map-marker"></i>
						<h4>Address</h4>
						<span>123, 3rd block, HSR Layout,<br>Bangalore, India</span>
					</li>
					<li>
						<i class="pe-7s-mail-open-file"></i>
						<h4>Email address</h4>
						<span>support@propertycare.co.in - info@propertycare.co.in<br><small>Monday to Friday 9am - 7pm</small></span>

					</li>
					<li>
						<i class="pe-7s-phone"></i>
						<h4>Contacts info</h4>
						<span>+ 91 98765 43210 + 91 98765 43210<br><small>Monday to Friday 9am - 7pm</small></span>
					</li>
				</ul>
			</div>
		</div>
		<!--/contact_info-->
	</main>
</template>
<script>
export default {
  data() {
    return {
      f_name: "",
      l_name: "",
      mobile: "",
      email: "",
      message: "",
      skype: "",
      type: "ContactUs"
    };
  },
  methods: {
    async insert_function() {
      const f_name = this.f_name; 
      const l_name = this.l_name;
      const mobile = this.mobile;
      const email = this.email;
      const message = this.message;
      const skype = this.skype;
      const type = this.type;

      const res = await this.$apollo.mutate({
        mutation: require("@/graphQl/queries/contact-form.gql"),
        variables: {
          f_name,
          l_name,
          mobile,
          email,
          message,
          skype,
          type
        },
      });
                if(res){
        alert("Inserted Success")
        console.log(res)
      }
    },

  },
};
</script>