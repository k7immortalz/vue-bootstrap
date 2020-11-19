<template>
  <main>


    <div class="container">
      <form autocomplete="off">
        <div class="row">
          <div class="step col-sm-12" id="step1">
            <ul class="users">
              <li
                v-for="user in projects"
                :key="user.value"
                :class="{ active: property.userType === user.value }"
              >
                <a @click="selectUser(user)">{{ user.name }}</a>
              </li>
              <li><a @click="others_project(user)">others</a></li>
            </ul>
          </div>

          <div class="col-sm-6">
            <div class="form-group" v-if="!projectshow">
              <select class="form-control">
                <option value="" data-imagesrc="img/icons_select/add_bed.svg">
                  Property Category
                </option>
                <option
                  value="Classic single"
                  data-imagesrc="img/icons_select/single_bed.svg"
                >
                  Classic single
                </option>
                <option
                  value="Luxury single"
                  data-imagesrc="img/icons_select/single_bed_lux.svg"
                >
                  Luxury single
                </option>
              </select>
            </div>
            <div class="form-group" v-if="projectshow">
<label>Location: {{ projectdata.address }} </label>
              
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group" v-if="!projectshow">
              <select class="form-control">
                <option value="" data-imagesrc="img/icons_select/add_bed.svg">
                  Property Category
                </option>
                <option
                  value="Classic single"
                  data-imagesrc="img/icons_select/single_bed.svg"
                >
                  Classic single
                </option>
                <option
                  value="Luxury single"
                  data-imagesrc="img/icons_select/single_bed_lux.svg"
                >
                  Luxury single
                </option>
              </select>
            </div>
            <div class="form-group" v-if="projectshow">
              <select class="form-control">
                <option value="" data-imagesrc="img/icons_select/add_bed.svg">
                  Property Category
                </option>
                <option
                  value="Classic single"
                  data-imagesrc="img/icons_select/single_bed.svg"
                >
                  Classic single
                </option>
                <option
                  value="Luxury single"
                  data-imagesrc="img/icons_select/single_bed_lux.svg"
                >
                  Luxury single
                </option>
              </select>
            </div>
          </div>
          <div class="col-sm-12">
              <ul class="users">
                         <li
                v-for="user in projectdata.amenities"
                :key="user.value"
              >
                {{ user }}
              </li></ul>
          </div>
          <div class="col-sm-12">
              		<div class="container margin_60_35">

			<div class="grid">
				<ul class="magnific-gallery">

					<li              v-for="user in projectdata.photos"
                :key="user.value">
						<figure>
							<img :src="user" alt="">
							<figcaption>
								<div class="caption-content">
									<a href="img/gallery/large/pic_1.jpg" title="Photo title" data-effect="mfp-zoom-in" width="400" height="267">
										<i class="pe-7s-albums"></i>
										<p>Your caption</p>
									</a>
								</div>
							</figcaption>
						</figure>
					</li>
	
				</ul>
			</div>
			<!-- /grid gallery -->
		</div>
          </div>
        </div>
      </form>
    </div>
    <div class="container-fluid wizard-layout">
      <div class="image-area flx-itm">here will be image</div>
      <div id="start" class="flx-itm">
        <div id="wizard_container">
          <div id="top-wizard"></div>
          <!-- /top-wizard -->
          <form id="wrapped" @submit.prevent="checkForm($event, property)">
            <input
              id="website"
              name="website"
              type="text"
              value=""
              class="d-none"
            />
            <!-- Leave for security protection, read docs for details -->

            <div id="middle-wizard">
              <!-- STEP 1-->
              <div class="step" id="step1">
                <h3 class="main_question">
                  Reach Out to 15 lacs buyers million of buyers in just 5
                  minutes
                </h3>
                <p style="text-align: center">You are</p>
                <ul class="users">
                  <li
                    v-for="user in userTypes"
                    :key="user.value"
                    :class="{ active: property.userType === user.value }"
                  >
                    <a @click="selectUser(user)">{{ user.name }}</a>
                  </li>
                </ul>
                <input
                  id="userType"
                  v-model="property.userType"
                  type="hidden"
                  value=""
                  class="d-none"
                  required
                />
              </div>
              <!-- /step-->

              <!-- STEP 2-->
              <!-- <div class="step" id="step2">
              <h3 class="main_question">
                Verify your identity
              </h3>
              <div class="row no-gutters pb-1">
                <div class="col-12 pr-2">
                  <div class="form-group">
                    <div class="qty-buttons">
                      <input
                        type="text"
                        v-model="property.mobile"
                        id="mobile"
                        value=""
                        class="qty form-control"
                        placeholder="Mobile Number"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row no-gutters pb-1">
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <div class="qty-buttons">
                      <input
                        type="text"
                        v-model="property.otp"
                        class="form-control input-field"
                        placeholder="Enter Otp"
                        id="otp"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="col-6 pl-2">
                  <div class="form-group">
                    <input
                      type="button"
                      value="Send Otp"
                      class="btn_1 rounded"
                    />
                  </div>
                </div>
              </div>
            </div> -->
              <!-- /step-->

              <!-- STEP 3-->
              <!-- <div class="step" id="step3">
              <h3 class="main_question">
                Basic Information and location
              </h3>

              <div class="row no-gutters pb-1">
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <select class="ddslick" v-model="property.category" id="categories" required>
                      <option
                        v-for="item in categories"
                        :key="item.value"
                        :value="item.value"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row no-gutters pb-1">
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <select class="ddslick" v-model="property.propertyType" id="propertyType" required>
                      <option
                        v-for="item in propertyTypes"
                        :key="item.value"
                        :value="item.value"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <select class="ddslick" v-model="property.projectStatus" id="projectStatus" required>
                      <option
                        v-for="item in projectStatusList"
                        :key="item.value"
                        :value="item.value"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row no-gutters pb-1">
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <input
                      type="text"
                      id="location"
                      value=""
                      class="qty form-control required"
                      placeholder="Location"
                      v-model="property.location"
                      required
                    />
                  </div>
                </div>
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <input
                      type="text"
                      id="mapCoordnates"
                      class="qty form-control required"
                      placeholder="Select Map Location"
                      v-model="property.mapCoordnates"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row no-gutters pb-1">
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <input
                      type="text"
                      name="address1"
                      id="address1"
                      class="qty form-control required"
                      placeholder="Address Line 1"
                      v-model="property.address1"
                      required
                    />
                  </div>
                </div>
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <input
                      type="text"
                      id="address2"
                      class="qty form-control required"
                      placeholder="Address Line 2"
                      v-model="property.address2"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row no-gutters pb-1">
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <input
                      type="text"
                      id="state"
                      value=""
                      class="qty form-control required"
                      placeholder="City/ state"
                      v-model="property.state"
                      required
                    />
                  </div>
                </div>
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <input
                      type="text"
                      id="landmark"
                      class="qty form-control required"
                      placeholder="Land Mark"
                      v-model="property.landmark"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row no-gutters pb-1">
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <input
                      type="text"
                      id="locality"
                      value=""
                      class="qty form-control required"
                      placeholder="Locality"
                      v-model="property.locality"
                      required
                    />
                  </div>
                </div>
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <input
                      type="text"
                      id="pincode"
                      class="qty form-control required"
                      placeholder="Pin Code"
                      v-model="property.pincode"
                      required
                    />
                  </div>
                </div>
              </div>
            </div> -->
              <!-- /step-->

              <!-- STEP 3-->
              <!-- <div class="step">
              <h3 class="main_question">
                <strong>3/{{ wizard.stepsPossible }}</strong>
                Enter your Booking details
              </h3>
              <div class="input-icons">
                <div class="icon">
                  <i class="icon-hotel-calendar_3 icon-m"></i>
                </div>
                <input
                  type="text"
                  name="dates"
                  v-model="property.checkIn"
                  class="form-control input-field"
                  placeholder="Check in - Check out"
                  required
                />
              </div>

              <div class="row no-gutters pb-1">
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <div class="qty-buttons">
                      <input
                        type="button"
                        value="+"
                        class="qtyplus"
                        name="adults"
                        @click="increment('adults')"
                      />
                      <input
                        type="number"
                        name="adults"
                        id="adults"
                        value=""
                        class="qty form-control required"
                        placeholder="Adults"
                        v-model="property.adults"
                        required
                      />
                      <input
                        type="button"
                        value="-"
                        class="qtyminus"
                        name="adults"
                        @click="decrement('adults')"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-6 pl-2">
                  <div class="form-group">
                    <div class="qty-buttons">
                      <input
                        type="button"
                        value="+"
                        class="qtyplus"
                        name="child"
                        @click="increment('child')"
                      />
                      <input
                        type="number"
                        name="child"
                        id="child"
                        value=""
                        class="qty form-control required"
                        placeholder="Child"
                        v-model="property.child"
                        required
                      />
                      <input
                        type="button"
                        value="-"
                        class="qtyminus"
                        name="child"
                        @click="decrement('child')"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <textarea
                  class="form-control notes"
                  placeholder="Special notes"
                ></textarea>
              </div>

              <div class="form-group">
                <select name="time" class="ddslick">
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
                <input
                  type="text"
                  v-model="property.prefferedDate"
                  class="form-control input-field"
                  id="preferredDate"
                  placeholder="Preferred date"
                  required
                />
              </div>
            </div> -->
              <!-- /step-->

              <!-- STEP 4-->
              <!-- <div class="step">
              <h3 class="main_question">
                <strong>3/{{ wizard.stepsPossible }}</strong>
                Select Booking Options
              </h3>
              <div class="form-group options clearfix">
                <i class="icon-hotel-bottle"></i
                ><em>Welcome drink <strong>+$24</strong></em>
                <label class="switch-light switch-ios float-right">
                  <input
                    type="checkbox"
                    value="Welcome drink"
                    name="options[]"
                  />
                  <span><span>No</span><span>Yes</span></span>
                  <a></a>
                </label>
              </div>
              <div class="form-group options clearfix">
                <i class="icon-hotel-coffee"></i
                ><em>Breakfast <strong>+$14</strong></em>
                <label class="switch-light switch-ios float-right">
                  <input
                    type="checkbox"
                    value="Breakfast included"
                    name="options[]"
                  />
                  <span><span>No</span><span>Yes</span></span>
                  <a></a>
                </label>
              </div>
              <div class="form-group options clearfix">
                <i class="icon-hotel-restaurant"></i
                ><em>Dinner <strong>+$18</strong></em>
                <label class="switch-light switch-ios float-right">
                  <input
                    type="checkbox"
                    value="Dinner included"
                    name="options[]"
                  />
                  <span><span>No</span><span>Yes</span></span>
                  <a></a>
                </label>
              </div>
              <div class="form-group options clearfix">
                <i class="icon-hotel-car"></i
                ><em>Pick up <strong>+$50</strong></em>
                <label class="switch-light switch-ios float-right">
                  <input
                    type="checkbox"
                    value="Pick up service"
                    name="options[]"
                  />
                  <span><span>No</span><span>Yes</span></span>
                  <a></a>
                </label>
              </div>
            </div> -->
              <!-- /step-->

              <!-- Step 5-->
              <!-- <div class="step">
              <h3 class="main_question">
                <strong>3/{{ wizard.stepsPossible }}</strong>
                Enter your Booking details
              </h3>
              <div class="input-icons">
                <div class="icon">
                  <i class="icon-hotel-calendar_3 icon-m"></i>
                </div>
                <input
                  type="text"
                  name="dates"
                  v-model="property.checkIn"
                  class="form-control input-field"
                  placeholder="Check in - Check out"
                  required
                />
              </div>

              <div class="row no-gutters pb-1">
                <div class="col-6 pr-2">
                  <div class="form-group">
                    <div class="qty-buttons">
                      <input
                        type="button"
                        value="+"
                        class="qtyplus"
                        name="adults"
                        @click="increment('adults')"
                      />
                      <input
                        type="number"
                        name="adults"
                        id="adults"
                        value=""
                        class="qty form-control required"
                        placeholder="Adults"
                        v-model="property.adults"
                        required
                      />
                      <input
                        type="button"
                        value="-"
                        class="qtyminus"
                        name="adults"
                        @click="decrement('adults')"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-6 pl-2">
                  <div class="form-group">
                    <div class="qty-buttons">
                      <input
                        type="button"
                        value="+"
                        class="qtyplus"
                        name="child"
                        @click="increment('child')"
                      />
                      <input
                        type="number"
                        name="child"
                        id="child"
                        value=""
                        class="qty form-control required"
                        placeholder="Child"
                        v-model="property.child"
                        required
                      />
                      <input
                        type="button"
                        value="-"
                        class="qtyminus"
                        name="child"
                        @click="decrement('child')"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <textarea
                  class="form-control notes"
                  placeholder="Special notes"
                ></textarea>
              </div>

              <div class="form-group">
                <select name="time" class="ddslick1">
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
                <input
                  type="text"
                  v-model="property.prefferedDate"
                  class="form-control input-field"
                  id="preferredDate"
                  placeholder="Preferred date"
                  required
                />
              </div>
            </div> -->

              <!-- Step 6 -->
              <div class="step">
                <h3 class="main_question">Amentiies</h3>
                <div class="row">
                  <div
                    class="col-lg-4 custom-col"
                    v-for="item in amentiesList"
                    :key="item.value"
                    @click="selectAmenties(item.value)"
                    :class="{ active: ifAmentiesSelected(item.value) }"
                  >
                    <a class="" href="#0">
                      <h4>{{ item.name }}</h4>
                    </a>
                  </div>
                  <input type="hidden" v-model="property.amenties" />
                </div>
              </div>

              <!-- Step 7 -->
              <div class="step"></div>

              <!-- STEP 5-->
              <div class="submit step" id="end">
                <h3 class="main_question">
                  <!-- <strong>4/{{ wizard.stepsPossible }}</strong> -->
                  Please fill with your details
                </h3>
                <div class="input-icons">
                  <div class="icon">
                    <i class="icon-user icon-m"></i>
                  </div>
                  <input
                    type="text"
                    name="first_name"
                    class="form-control input-field required"
                    placeholder="First Name"
                    id="inlineFormInputGroupUsername2"
                  />
                </div>

                <div class="input-icons">
                  <div class="icon">
                    <i class="icon-user icon-m"></i>
                  </div>
                  <input
                    type="text"
                    name="last_name"
                    class="form-control input-field required"
                    placeholder="Last Name"
                    id="inlineFormInputGroupUsername2"
                  />
                </div>

                <div class="input-icons">
                  <div class="icon">
                    <i class="icon-envelope icon-m"></i>
                  </div>
                  <input
                    type="email"
                    name="email"
                    class="form-control input-field required"
                    placeholder="Email"
                    id="inlineFormInputGroupUsername2"
                  />
                </div>

                <div class="input-icons">
                  <div class="icon">
                    <i class="icon-phone icon-m"></i>
                  </div>
                  <input
                    type="text"
                    name="telephone"
                    class="form-control input-field required"
                    placeholder="Telephone"
                    id="inlineFormInputGroupUsername2"
                  />
                </div>

                <div class="form-group terms">
                  <label class="container_check"
                    >Please accept our
                    <a href="#" data-toggle="modal" data-target="#terms-txt"
                      >Terms and conditions</a
                    >
                    <input
                      type="checkbox"
                      name="terms"
                      value="Yes"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <!-- /step-->
            </div>
            <!-- /middle-wizard -->
            <div id="bottom-wizard">
              <button type="button" name="backward" class="backward">
                Prev
              </button>
              <button type="button" name="forward" class="forward">Next</button>
              <button type="submit" name="process" class="submit">
                Submit
              </button>
            </div>
            <!-- /bottom-wizard -->
          </form>
        </div>
        <!-- /Wizard container -->
      </div>
      <!-- /content-right-->
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      projectshow: false,
      projects: [
        {
          name: "Casagrand",
          value: "casagrand",
          location: "Chennai",
          address: "casagrand Apartments, opposite to Valechery bus stand,velachaery, Chennai",
          amenities: ["Swimming pool","security","Maintenance Staff","Broadband","Cafteria"],
          floors: "12",
          photos: ["img/properties/prop1.jpg","img/properties/prop2.jpg","img/properties/prop3.jpg","img/properties/prop4.jpg"]
        },
        {
          name: "Galaxy",
          value: "galaxy",
          location: "Kochin",
          address: "Galaxy Apartments, opposite to Valechery bus stand,velachaery, Kochin",
          amenities: ["Garder","parking","security","Bank/ATM","Laundary"],
          floors: "10",
        photos: ["img/properties/prop5.jpg","img/properties/prop5.jpg","img/properties/prop5.jpg","img/properties/prop8.jpg"]

        },
        {
          name: "Asgaurd",
          value: "asgaurd",
          location: "bangalore",
          address: "Asgaurd Apartments, opposite to Valechery bus stand,velachaery, bangalore",
          amenities: ["Gym","parking","security","Intercom","temple"],
          floors: "15",
          photos: ["img/properties/prop9.jpg","img/properties/prop10.jpg","img/properties/prop11.jpg","img/properties/prop12S.jpg"]

        },
      ],
      property: {
        adults: "",
        child: "",
        checkIn: "",
        prefferedDate: "",
        preferredTime: "",
        userType: "",
        amenties: [],
        media: [],
      },
      projectdata: {
        name: "",
        value: "",
        location: "",
        amenities: "",
        floors: "",
        address: "",
        photos:""
      },
      amentiesList: [
        {
          name: "garder",
          value: "garden",
        },
        {
          name: "Swiming Pool",
          value: "swiming-pool",
        },
        {
          name: "Play Area",
          value: "play area",
        },
        {
          name: "Bank/Atm",
          value: "bank-atm",
        },
        {
          name: "Security",
          value: "security",
        },
        {
          name: "Library",
          value: "library",
        },
        {
          name: "Laundry Services",
          value: "laundry",
        },
      ],
      userTypes: [
        {
          name: "Owner",
          value: "owner",
        },
        {
          name: "Agent",
          value: "agent",
        },
        {
          name: "Builder",
          value: "builder",
        },
      ],
      categories: [
        {
          name: "For Sale: Houses & Apartments",
          value: "sale",
        },
        {
          name: "For Rent: Houses & Apartments",
          value: "rent",
        },
        {
          name: "Lands & Plots",
          value: "land",
        },
        {
          name: "For Rent: Shops & Offices",
          value: "rentOffice",
        },
        {
          name: "For Sale: Shops & Offices",
          value: "saleOffice",
        },
      ],
      propertyTypes: [
        {
          name: "Apartments",
          value: "APARTMENTS",
        },
        {
          name: "Builder Floors",
          value: "BUILDER_FLOOR",
        },
        {
          name: "Farm Houses",
          value: "FARM_HOUSES",
        },
        {
          name: "Houses & Villas",
          value: "HOUSE_VILLAS",
        },
        {
          name: "Furnished",
          value: "FURNISHED",
        },
        {
          name: "Semi-Furnished",
          value: "SEMI-FURNISHED",
        },
        {
          name: "Unfurnished",
          value: "UNFURNISHED",
        },
      ],
      projectStatusList: [
        {
          name: "New Launch",
          value: "NEW_LAUNCH",
        },
        {
          name: "Ready to Move",
          value: "READY_TO_MOVE",
        },
        {
          name: "Under Construction",
          value: "UNDER_CONSTRUCTION",
        },
      ],
      wizard: {
        stepsPossible: 0,
        curentIndex: 0,
        instance: "",
      },
      steps: {
        step1: {
          name: "Step 1",
          value: 1,
          slug: "USER",
        },
        step2: {
          name: "Step 2",
          value: 2,
          slug: "REGISTER",
        },
        step3: {
          name: "Step 3",
          value: 3,
          slug: "DETAIL1",
        },
        step4: {
          name: "Step 4",
          value: 1,
          slug: "DETAIL2",
        },
      },
    };
  },
  methods: {
    selectAmenties(item) {
      const amentiesExist = this.property.amenties.filter(
        (val) => val === item
      );
      if (amentiesExist.length) {
        this.property.amenties = this.property.amenties.filter(
          (val) => val !== item
        );
      } else {
        this.property.amenties.push(item);
      }
    },
    ifAmentiesSelected(item) {
      return this.property.amenties.indexOf(item) !== -1 ? true : false;
    },
    checkForm() {
      console.log("Form Data");
    },
    increment(field) {
      if (field === "child") {
        this.property.child++;
      }
      if (field === "adults") {
        this.property.adults++;
      }
    },
    decrement(field) {
      if (field === "child") {
        if (this.property.child >= 1) {
          this.property.child--;
        }
      }
      if (field === "adults") {
        if (this.property.adults >= 1) {
          this.property.adults--;
        }
      }
    },
    selectUser(user) {
      this.property.userType = user;
      this.projectshow = true;
      this.projectdata.name = user.name;
      this.projectdata.value = user.value;
      this.projectdata.location = user.location;
      this.projectdata.amenities = user.amenities;
      this.projectdata.floors = user.floors;
      this.projectdata.address = user.address;
      this.projectdata.photos = user.photos;
    },
    others_project(user) {
      this.projectshow = false;
    },
    initStepJs() {
      const vueInstance = this;
      this.wizard.instance = $("#wizard_container");
      // step wizard
      this.wizard.instance
        .wizard({
          stepsWrapper: "#wrapped",
          submit: ".submit",
          beforeSelect: function (event, state) {
            if ($("input#website").val().length != 0) {
              return false;
            }
            if (!state.isMovingForward) return true;
            var inputs = $(this).wizard("state").step.find(":input");
            return !inputs.length || !!inputs.valid();
          },
          afterSelect: function (event, state) {
            console.log(state);
            // vueInstance.wizard.instance.data("wizard").goTo();
            // vueInstance.wizard.curentIndex = state.stateIndex + 1;
            $("#progressbar").progressbar("value", state.percentComplete);
            $("#location").text(
              "(" + state.stepsComplete + "/" + state.stepsPossible + ")"
            );
          },
        })
        .validate({
          errorPlacement: function (error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
              error.insertBefore(element.next());
            } else {
              error.insertAfter(element);
            }
          },
        });
      $("#progressbar").progressbar();
    },
    initDateRanger() {
      //  date picker
      $('input[name="dates"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
          cancelLabel: "Clear",
        },
      });
      $("#preferredDate").daterangepicker({
        autoUpdateInput: false,
        drops: "up",
        locale: {
          cancelLabel: "Clear",
        },
      });
      const vueInstance = this; // vue componnet instance
      $('input[name="dates"]').on("apply.daterangepicker", function (
        ev,
        picker
      ) {
        vueInstance.property.checkIn =
          picker.startDate.format("MM-DD-YY") +
          " > " +
          picker.endDate.format("MM-DD-YY");
      });
      $('input[name="dates"]').on("cancel.daterangepicker", function (
        ev,
        picker
      ) {
        vueInstance.property.checkIn = "";
      });
      $("#preferredDate").on("apply.daterangepicker", function (ev, picker) {
        vueInstance.property.prefferedDate =
          picker.startDate.format("MM-DD-YY") +
          " > " +
          picker.endDate.format("MM-DD-YY");
      });
      $("#preferredDate").on("cancel.daterangepicker", function (ev, picker) {
        vueInstance.property.prefferedDate = "";
      });
    },
  },
  mounted() {
    setTimeout(() => {
      $("#categories").ddslick({
        selectText: "Select Category",
      });
      $("#propertyType").ddslick({
        selectText: "Select Property Type",
      });
      $("#projectStatus").ddslick({
        selectText: "Select Project Status",
      });

      // $("select.ddslick").each(function () {
      //   $(this).ddslick({
      //     showSelectedHTML: true,
      //   });
      // });
      this.initDateRanger();
      this.initStepJs();
      // this.wizard.stepsPossible = this.wizard.instance.data(
      //   "wizard"
      // )._currentState.stepsPossible;
      // this.wizard.curentIndex =
      //   this.wizard.instance.data("wizard")._currentState.stepIndex + 1;
      // })
    });
  },
};
</script>


<style scoped>
.wizard-layout {
  display: -webkit-flex;
  -webkit-flex-flow: column wrap;
  -webkit-align-items: center;
}
/* .flx-itm {
  width: 50%;
} */
.image-area {
  border: 1px solid #ccc;
  /* height: -webkit-fill-available; */
  margin-right: 25px;
  height: 500px;
  text-align: center;
  padding: 20px;
  width: 30%;
  background-color: #cbd4d4;
}
#start {
  width: 70%;
}
ul.users {
  display: flex;
  flex-direction: row;
}
ul.users li {
  width: 32%;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 20px;
}
.active {
  background-color: #faecd7;
}
.error {
  color: red;
}
.custom-col {
  border: 1px solid #ccc;
  padding: 20px;
}
#wizard_container {
  width: 100%;
}
</style>
