<template>
<div>
    		<main>

			<section class="hero_in prjcts">
				<div class="wrapper">
					<div class="container">
						<h1 class="fadeInUp"><span></span>Projects in HSR Layout</h1>
					</div>
				</div>
			</section>
			<!--/hero_in-->

			<div class="filters_listing sticky_horizontal">
				<div class="container">
					<ul class="clearfix">
						<li>
							<div class="switch-field">
								<input type="radio" id="all" name="listing_filter" value="all" checked data-filter="*"
									class="selected">
								<label for="all">All</label>
								<input type="radio" id="popular" name="listing_filter" value="popular"
									data-filter=".popular">
								<label for="popular">Popular</label>
								<input type="radio" id="latest" name="listing_filter" value="latest"
									data-filter=".latest">
								<label for="latest">Latest</label>
							</div>
						</li>
						<li>
							<div class="layout_view">
								<a href="projects-grid.html"><i class="icon-th"></i></a>
								<a href="#0" class="active"><i class="icon-th-list"></i></a>
							</div>
						</li>
						<li>
							<a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false"
								aria-controls="collapseMap" data-text-swap="Hide map"
								data-text-original="View on map">View on map</a>
						</li>
					</ul>
				</div>
				<!-- /container -->
			</div>
			<!-- /filters -->

			<div class="collapse" id="collapseMap">
				<div id="map" class="map"></div>
			</div>
			<!-- End Map -->
		
		</main>
		<!--/main-->	


		<!-- wizard start -->
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-3">
					<div class="content-left-wrapper bg_hotel">
						<div class="wrapper">
							<!-- <a href="index.html" id="logo"><img src="img/logo.svg" alt="" width="45" height="40"></a> -->
							<!-- <div id="social">
								<ul>
									<li><a href="#0"><i class="social_facebook"></i></a></li>
									<li><a href="#0"><i class="social_twitter"></i></a></li>
									<li><a href="#0"><i class="social_instagram"></i></a></li>
								</ul>
							</div> -->
							<!-- /social -->
							<div class="left_title">
								<h3>Post a Property</h3>
								<!-- <p>Rooms Starting from 70$ per night</p> -->
							</div>
						</div>
					</div>
					<!--/content-left-wrapper -->
				</div>
				<!-- /content-left -->
	
				<div class="col-lg-9 content-right" id="start">
					<div id="wizard_container">
						<div id="top-wizard">
								
							</div>
							<!-- /top-wizard -->
							 <form id="wrapped" method="POST">
								<input id="website" name="website" type="text" value="" class="d-none">
								<!-- Leave for security protection, read docs for details -->
								
								<div id="middle-wizard">
									<div class="step">
										<h3 class="main_question"><strong>1/3</strong>Enter your Booking details</h3>
										<div class="input-icons">
											<div class="icon">
												<i class="icon-hotel-calendar_3 icon-m"></i>
											</div>
											<input type="text" name="dates" class="form-control input-field required" placeholder="Check in - Check out">
											
										</div>
											
										

										<div class="form-group">
											
												
												 <select class="required ddslick" name="room_type">
													<option value="" data-imagesrc="img/icons_select/add_bed.svg">Select Room type</option>
													<option value="Classic single" data-imagesrc="img/icons_select/single_bed.svg">Classic single</option>
													<option value="Luxury single" data-imagesrc="img/icons_select/single_bed_lux.svg">Luxury single</option>
													<option value="Classic Double" data-imagesrc="img/icons_select/double_bed.svg">Classic Double</option>
													<option value="Luxury Double" data-imagesrc="img/icons_select/double_bed_lux.svg">Luxury Double</option>
												</select>
										
										</div>
										<div class="row no-gutters pb-1">
											<div class="col-6 pr-2">
												<div class="form-group">
													<div class="qty-buttons">
														<input type="button" value="+" class="qtyplus" name="adults">
														<input type="text" name="adults" id="adults" value="" class="qty form-control required" placeholder="Adults">
														<input type="button" value="-" class="qtyminus" name="adults">
													</div>
												</div>
											</div>
											<div class="col-6 pl-2">
												<div class="form-group">
													<div class="qty-buttons">
														<input type="button" value="+" class="qtyplus" name="child">
														<input type="text" name="child" id="child" value="" class="qty form-control required" placeholder="Child">
														<input type="button" value="-" class="qtyminus" name="child">
													</div>
												</div>
											</div>
										</div>
										<div class="form-group">
											<textarea class="form-control notes" placeholder="Special notes"></textarea>
										</div>
										<div class="form-group">
											

												<select class="required ddslick" name="time">
													<option value="">Preferred time</option>
													<option value="07.30 PM">07.30 PM</option>
													<option value="08.00 PM">08.00 PM</option>
													<option value="08.30 PM">08.30 PM</option>
													<option value="09.00 PM">09.00 PM</option>
													<option value="09.30 PM">09.30 PM</option>
													<option value="10.00 PM">10.00 PM</option>
												</select>
											
										</div>
 
										<div class="input-icons">
											<div class="icon">
												<i class="icon-hotel-calendar_3 icon-m"></i>
											</div>
											<input type="text" name="dates" class="form-control input-field required" id="inlineFormInputGroupUsername2" placeholder="Preferred date">
											
										</div>

									</div>
									<!-- /step-->
									
									<div class="step">
										<h3 class="main_question"><strong>2/3</strong>Select Booking Options</h3>
										<div class="form-group options clearfix">
											<i class="icon-hotel-bottle"></i><em>Welcome drink <strong>+$24</strong></em>
											<label class="switch-light switch-ios float-right">
												<input type="checkbox" value="Welcome drink" name="options[]">
												<span><span>No</span><span>Yes</span></span>
												<a></a>
											</label>
										</div>
										<div class="form-group options clearfix">
											<i class="icon-hotel-coffee"></i><em>Breakfast <strong>+$14</strong></em>
											<label class="switch-light switch-ios float-right">
												<input type="checkbox" value="Breakfast included" name="options[]">
												<span><span>No</span><span>Yes</span></span>
												<a></a>
											</label>
										</div>
										<div class="form-group options clearfix">
											<i class="icon-hotel-restaurant"></i><em>Dinner <strong>+$18</strong></em>
											<label class="switch-light switch-ios float-right">
												<input type="checkbox" value="Dinner included" name="options[]">
												<span><span>No</span><span>Yes</span></span>
												<a></a>
											</label>
										</div>
										<div class="form-group options clearfix">
											<i class="icon-hotel-car"></i><em>Pick up <strong>+$50</strong></em>
											<label class="switch-light switch-ios float-right">
												<input type="checkbox" value="Pick up service" name="options[]">
												<span><span>No</span><span>Yes</span></span>
												<a></a>
											</label>
										</div>
									</div>
									<!-- /step-->
									
									<div class="submit step">
										<h3 class="main_question"><strong>3/3</strong>Please fill with your details</h3>
										<div class="input-icons">
											<div class="icon">
												<i class="icon-user icon-m"></i>
											</div>
											<input type="text" name="first_name" class="form-control input-field required" placeholder="First Name" id="inlineFormInputGroupUsername2">
											
										</div>

										<div class="input-icons">
											<div class="icon">
												<i class="icon-user icon-m"></i>
											</div>
											<input type="text" name="last_name" class="form-control input-field required" placeholder="Last Name" id="inlineFormInputGroupUsername2">																						
											
										</div>
										
										<div class="input-icons">
											<div class="icon">
												<i class="icon-envelope icon-m"></i>
											</div>
											<input type="email" name="email" class="form-control input-field required" placeholder="Email" id="inlineFormInputGroupUsername2">
											
										</div>

										<div class="input-icons">
											<div class="icon">
												<i class="icon-phone icon-m"></i>
											</div>
											<input type="text" name="telephone" class="form-control input-field required" placeholder="Telephone" id="inlineFormInputGroupUsername2">
											
										</div>
										
										
										<div class="form-group terms">
											<label class="container_check">Please accept our <a href="#" data-toggle="modal" data-target="#terms-txt">Terms and conditions</a>
												<input type="checkbox" name="terms" value="Yes" class="required">
												<span class="checkmark"></span>
											</label>
										</div>
									</div>
									<!-- /step-->
									
								</div>
								<!-- /middle-wizard -->
								<div id="bottom-wizard">
									<button type="button" name="backward" class="backward">Prev</button>
									<button type="button" name="forward" class="forward">Next</button>
									<button type="submit" name="process" class="submit">Submit</button>
								</div>
								<!-- /bottom-wizard -->
							</form>
						</div>
						<!-- /Wizard container -->
				</div>
				<!-- /content-right-->
			</div>
			<!-- /row-->
		</div>
		<!-- /container-fluid -->
</div>
</template>