<template>
    	<main>
	<div class="container-fluid full-height">
		<div class="row row-height">
			<div class="col-lg-5 content-left order-md-last order-sm-last order-last">
			<div id="results_map_view">
		   <div class="container-fluid">
			   <div class="row">
				   <div class="col-10">
					   <h4><strong>145</strong> results</h4>
				   </div>
				   <div class="col-2">
					   <a href="#0" class="search_map btn_search_map_view"></a> <!-- /open search panel -->
				   </div>
			   </div>
			   <!-- /row -->
				<div class="search_map_wp">
					<div class="custom-search-input-2 map_view">
						<div class="form-group">
							<input class="form-control" type="text" placeholder="What are you looking for...">
							<i class="icon_search"></i>
						</div>
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Where">
							<i class="icon_pin_alt"></i>
						</div>
						<select class="wide">
							<option>All Categories</option>	
							<option>Shops</option>
							<option>Properties</option>
							<option>proptys</option>
							<option>Bars</option>
							<option>Events</option>
							<option>Fitness</option>
						</select>
						<input type="submit" value="Search">
					</div>
				</div>
				<!-- /search_map_wp -->
		   </div>
		   <!-- /container -->
	   </div>
	   <!-- /results -->
		
		<div class="filters_listing version_3">
			<div class="container-fluid">
				<ul class="clearfix">
					<li>
						<div class="switch-field">
							<input type="radio" id="all" name="listing_filter" value="all" checked>
							<label for="all">All</label>
							<input type="radio" id="popular" name="listing_filter" value="popular">
							<label for="popular">Popular</label>
							<input type="radio" id="latest" name="listing_filter" value="latest">
							<label for="latest">Latest</label>
						</div>
					</li>
					<li><a class="btn_filt_map" data-toggle="collapse" href="#filters" aria-expanded="false" aria-controls="filters" data-text-swap="Less filters" data-text-original="More filters">More filters</a></li>
				</ul>
			</div>
			<!-- /container -->
		</div>
		<!-- /filters -->
				
		<div class="collapse map_view" id="filters">
			<div class="container-fluid margin_30_5">
				<h6>Category</h6>
					<div class="row">
					    <div class="col-md-6">
					    	<div class="filter_type">
					        	<ul>
								    <li>
								        <label class="container_check">All <small>(945)</small>
								            <input type="checkbox">
								            <span class="checkmark"></span>
								        </label>
								    </li>
								    <li>
								        <label class="container_check">Plot <small>(45)</small>
								            <input type="checkbox">
								            <span class="checkmark"></span>
								        </label>
								    </li>
								    <li>
								        <label class="container_check">Apartments <small>(30)</small>
								            <input type="checkbox">
								            <span class="checkmark"></span>
								        </label>
								    </li>
								</ul>
					    	</div>
					    </div>
					    <div class="col-md-6">
					    	<div class="filter_type">
						       	<ul>
								    <li>
								        <label class="container_check">Villa <small>(25)</small>
								            <input type="checkbox">
								            <span class="checkmark"></span>
								        </label>
								    </li>
								    <li>
								        <label class="container_check">Builder Floor <small>(56)</small>
								            <input type="checkbox">
								            <span class="checkmark"></span>
								        </label>
								    </li>
								</ul>
					    	</div>
					    </div>
					</div>
					<div class="row">
					<div class="col-md-12">
						<div class="add_bottom_30">
							<h6>Distance</h6>
							<div class="distance"> Radius around selected destination <span></span> km</div>
							<input type="range" min="10" max="100" step="10" value="30" data-orientation="horizontal">
						</div>
					</div>
					</div>
				<!-- /row -->
			</div>
		</div>
		<!-- /Filters -->

		<div class="box_list map_view">
		    <div class="row no-gutters add_top_20">
		        <div class="col-4">
		            <figure>
		                <small>Museum</small>
		                <a href="project-detail.html"><img src="img/prjct_1.jpg" class="img-fluid" alt="" width="800" height="533"></a>
		            </figure>
		        </div>
		        <div class="col-8">
		            <div class="wrapper">
		                <a href="#0" class="wish_bt"></a>
		                <h3><a href="project-detail.html">Property 1</a></h3>
		                <span class="price">From <strong>INR 5400</strong> /Sq Feet</span>
		            </div>
		            <ul>
		               <li>
		                	<a href="#0" data-id="1" class="address">On Map</a>
		                </li>
		                <li>
		                    <div class="score"><span>Units<em>35 Enquiries</em></span><strong>12</strong></div>
		                </li>
		            </ul>
		        </div>
		    </div>
		</div>
		<!-- /box_list -->

		<div class="box_list map_view">
		    <div class="row no-gutters">
		        <div class="col-4">
		            <figure>
		                <small>Villa</small>
		                <a href="project-detail.html"><img src="img/prjct_2.jpg" class="img-fluid" alt="" width="800" height="533"></a>
		            </figure>
		        </div>
		        <div class="col-8">
		            <div class="wrapper">
		                <a href="#0" class="wish_bt"></a>
		                <h3><a href="project-detail.html">Property 2</a></h3>
		                <span class="price">From <strong>INR 4124</strong> /Sq Feet</span>
		            </div>
		            <ul>
		                <li>
		                	<a href="#0" data-id="2" class="address">On Map</a>
		                </li>
		                <li>
		                    <div class="score"><span>Units<em>35 Enquiries</em></span><strong>12</strong></div>
		                </li>
		            </ul>
		        </div>
		    </div>
		</div>
		<!-- /box_list -->

		<div class="box_list map_view">
		    <div class="row no-gutters">
		        <div class="col-4">
		            <figure>
		                <small>Builder Floor</small>
		                <a href="project-detail.html"><img src="img/prjct_3.jpg" class="img-fluid" alt="" width="800" height="533"></a>
		            </figure>
		        </div>
		        <div class="col-8">
		            <div class="wrapper">
		                <a href="#0" class="wish_bt"></a>
		                <h3><a href="project-detail.html">Property 3</a></h3>
		                <span class="price">From <strong>INR 5200</strong> /Sq Feet</span>
		            </div>
		            <ul>
		                <li>
		                    <a href="#0" data-id="3" class="address">On Map</a>
		                </li>
		                <li>
		                    <div class="score"><span>Units<em>35 Enquiries</em></span><strong>12</strong></div>
		                </li>
		            </ul>
		        </div>
		    </div>
		</div>
		<!-- /box_list -->

		<div class="box_list map_view">
		    <div class="row no-gutters">
		        <div class="col-4">
		            <figure>
		                <small>Builder Floor</small>
		                <a href="project-detail.html"><img src="img/prjct_4.jpg" class="img-fluid" alt="" width="800" height="533"></a>
		            </figure>
		        </div>
		        <div class="col-8">
		            <div class="wrapper">
		                <a href="#0" class="wish_bt"></a>
		                <h3><a href="project-detail.html">Project Name 5</a></h3>
		                <span class="price">From <strong>INR 4725</strong> /Sq Feet</span>
		            </div>
		            <ul>
		                <li>
		                    <a href="#0" data-id="4" class="address">On Map</a>
		                </li>
		                <li>
		                    <div class="score"><span>Units<em>35 Enquiries</em></span><strong>17</strong></div>
		                </li>
		            </ul>
		        </div>
		    </div>
		</div>
		<!-- /box_list -->

		<div class="box_list map_view">
		    <div class="row no-gutters">
		        <div class="col-4">
		            <figure>
		                <small>Builder Floor</small>
		                <a href="project-detail.html"><img src="img/prjct_5.jpg" class="img-fluid" alt="" width="800" height="533"></a>
		            </figure>
		        </div>
		        <div class="col-8">
		            <div class="wrapper">
		                <a href="#0" class="wish_bt"></a>
		                <h3><a href="project-detail.html">Property 4</a></h3>
		                <span class="price">From <strong>INR 6750</strong> /Sq Feet</span>
		            </div>
		            <ul>
		                <li>
		                    <a href="#0" data-id="5" class="address">On Map</a>
		                </li>
		                <li>
		                    <div class="score"><span>Units<em>35 Enquiries</em></span><strong>17</strong></div>
		                </li>
		            </ul>
		        </div>
		    </div>
		</div>
		<!-- /box_list -->			
			
		<p class="text-center add_top_30"><a href="#0" class="btn_1 rounded"><strong>Load more</strong></a></p>
		</div>
		<!-- /content-left-->

		<div class="col-lg-7 map-right">
			<div id="map"></div>
			<!-- map-->
		</div>
		<!-- /map-right-->

		</div>
		<!-- /row-->
	</div>
	<!-- /container-fluid -->	
		
	</main>
</template>