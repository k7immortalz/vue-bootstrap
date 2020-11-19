<template>
    	<main>
		<div class="hero_in cart_section">
			<div class="wrapper">
				<div class="container">
					<div class="bs-wizard clearfix">
						<div class="bs-wizard-step">
							<div class="text-center bs-wizard-stepnum">Add Property</div>
							<div class="progress">
								<div class="progress-bar"></div>
							</div>
							<!-- <a href="addprop.html" class="bs-wizard-dot"></a> -->
							 <nuxt-link to="/addprop" class="bs-wizard-dot"></nuxt-link>
						</div>

						<div class="bs-wizard-step active">
							<div class="text-center bs-wizard-stepnum">Addl Details</div>
							<div class="progress">
								<div class="progress-bar"></div>
							</div>
							<a href="add.html" class="bs-wizard-dot"></a>
						</div>

						<div class="bs-wizard-step disabled">
							<div class="text-center bs-wizard-stepnum">Finish!</div>
							<div class="progress">
								<div class="progress-bar"></div>
							</div>
							<a href="#0" class="bs-wizard-dot"></a>
						</div>
					</div>
					<!-- End bs-wizard -->
				</div>
			</div>
		</div>
		<!--/hero_in-->

		<div class="bg_color_1">
			<div class="container margin_60_35">
				<div class="row">
					<div class="col-lg-8">
						<div class="box_cart">
						<div class="message">
							<p>Exisitng Customer? <a href="#0">Click here to login</a></p>
						</div>
						<div class="form_title">
							<h3><strong>1</strong>Your Details</h3>
							<p>
								Mussum ipsum cacilds, vidis litro abertis.
							</p>
						</div>
						<div class="step">
							<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<label>First name</label>
									<input type="text" class="form-control" id="firstname_booking" name="firstname_booking">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label>Last name</label>
									<input type="text" class="form-control" id="lastname_booking" name="lastname_booking">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<label>Email</label>
									<input type="email" id="email_booking" name="email_booking" class="form-control">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label>Confirm email</label>
									<input type="email" id="email_booking_2" name="email_booking_2" class="form-control">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<label>Telephone</label>
									<input type="text" id="telephone_booking" name="telephone_booking" class="form-control">
								</div>
							</div>
						</div>
						</div>
						<hr>
						<!--End step -->

						<div class="form_title">
							<h3><strong>2</strong>Payment Information</h3>
							<p>
								Mussum ipsum cacilds, vidis litro abertis.
							</p>
						</div>
						<div class="step">
							<div class="form-group">
							<label>Name on card</label>
							<input type="text" class="form-control" id="name_card_bookign" name="name_card_bookign">
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<div class="form-group">
									<label>Card number</label>
									<input type="text" id="card_number" name="card_number" class="form-control">
								</div>
							</div>
							<div class="col-md-6 col-sm-12">
								<img src="img/cards_all.svg" alt="Cards" class="cards-payment">
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<label>Expiration date</label>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<input type="text" id="expire_month" name="expire_month" class="form-control" placeholder="MM">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<input type="text" id="expire_year" name="expire_year" class="form-control" placeholder="Year">
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label>Security code</label>
									<div class="row">
										<div class="col-4">
											<div class="form-group">
												<input type="text" id="ccv" name="ccv" class="form-control" placeholder="CCV">
											</div>
										</div>
										<div class="col-8">
											<img src="img/icon_ccv.gif" width="50" height="29" alt="ccv"><small>Last 3 digits</small>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--End row -->
						</div>
						<hr>
						<!--End step -->

						<div class="form_title">
							<h3><strong>3</strong>Property Address</h3>
							<p>
								Mussum ipsum cacilds, vidis litro abertis.
							</p>
						</div>
						<div class="step">
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<label>Country</label>
										<div class="custom-select-form">
										<select class="wide add_bottom_15" name="country" id="country">
											<option value="" selected>Select your country</option>
											<option value="Europe">Europe</option>
											<option value="United states">United states</option>
											<option value="South America">South America</option>
											<option value="Oceania">Oceania</option>
											<option value="Asia">Asia</option>
										</select>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<label>Street line 1</label>
										<input type="text" id="street_1" name="street_1" class="form-control">
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<label>Street line 2</label>
										<input type="text" id="street_2" name="street_2" class="form-control">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6 col-sm-12">
									<div class="form-group">
										<label>City</label>
										<input type="text" id="city_booking" name="city_booking" class="form-control">
									</div>
								</div>
								<div class="col-md-3 col-sm-6">
									<div class="form-group">
										<label>State</label>
										<input type="text" id="state_booking" name="state_booking" class="form-control">
									</div>
								</div>
								<div class="col-md-3 col-sm-6">
									<div class="form-group">
										<label>Postal code</label>
										<input type="text" id="postal_code" name="postal_code" class="form-control">
									</div>
								</div>
							</div>
							<!--End row -->
						</div>
						<hr>
						<!--End step -->
						</div>
					</div>
					<!-- /col -->
					
					<aside class="col-lg-4" id="sidebar">
						<div class="box_detail">
							<div id="total_cart">
								lorem ipsum <span class="float-right">lorem</span>
							</div>
							<ul class="cart_details">
								<li>lorem <span>02-11-18</span></li>
								<li>lorem ipsum<span>04-11-18</span></li>
								<li>lorem ipsum<span>2</span></li>
								<li>lorem <span>1</span></li>
							</ul>
							<a href="cart-3.html" class="btn_1 full-width purchase">Action</a>
							<div class="text-center"><small>Footnote</small></div>
						</div>
					</aside>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /bg_color_1 -->
	</main>
</template>