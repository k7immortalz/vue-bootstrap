<template>
  <main>
    <section class="hero_in general">
      <div class="wrapper">
        <div class="container">
          <h1 class="fadeInUp"><span></span>About PropertyCare</h1>
        </div>
      </div>
    </section>
    <br /><br />
    <div class="container">
      <form autocomplete="off">
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <select
                class="form-control"
                v-model="selected"
                @change="selectUser(selected)"
              >
                <option>
                  <a @click="others_project()"> Select Project</a>
                </option>
                <option
                  v-for="user in projects"
                  :key="user.value"
                  v-bind:value="user"
                >
                  {{ user.name }}
                </option>
                <option><a @click="others_project()">others</a></option>
              </select>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group" v-if="!projectshow">
              <select class="form-control">
                <option value="" data-imagesrc="img/icons_select/add_bed.svg">
                  Location
                </option>
                <option
                  value="Classic single"
                  data-imagesrc="img/icons_select/single_bed.svg"
                >
                  Classic single
                </option>
              </select>
            </div>
            <div class="form-group" v-if="projectshow">
              <label>Location: {{ projectdata.location }} </label>
            </div>
          </div>


         

          <div class="col-sm-12" >
            <div class="form-group" v-if="projectshow">
           <center> <h3 >Amenities</h3></center>
            <ul class="users">
              <li v-for="user in projectdata.amenities" :key="user.value">
                {{ user }}
              </li>
            </ul>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="container margin_60_35" v-if="projectshow">
              <div class="grid">
                <ul class="magnific-gallery">
                  <h3>Gallery</h3>
                  <li v-for="user in projectdata.photos" :key="user.value">
                    <figure>
                      <img :src="user" alt="" />
                      <figcaption>
                        <div class="caption-content">
                          <a
                            href="img/gallery/large/pic_1.jpg"
                            title="Photo title"
                            data-effect="mfp-zoom-in"
                            width="400"
                            height="267"
                          >
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
              <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
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
        <div class="col-sm-6"></div>
        <div class="col-sm-6">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              Property Type
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
        <div class="col-sm-6">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              Project Status
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
        <div class="col-sm-1">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              +91
            </option>
            <option value="+92" data-imagesrc="img/icons_select/single_bed.svg">
              +92
            </option>
          </select>
        </div>
        <div class="col-sm-5">
          <input
            type="text"
            class="form-control"
            placeholder="Mobile number"
            id="firstname_booking"
            name="firstname_booking"
          />
        </div>
        <div class="col-sm-6">
          <button type="button" class="btn btn-success">Get OTP</button>
        </div>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="Address Line 1"
            id="firstname_booking"
            name="firstname_booking"
          />
        </div>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="Address Line 2"
            id="firstname_booking"
            name="firstname_booking"
          />
        </div>
        <div class="col-sm-6">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              City/State
            </option>
            <option
              value="Tamilnadu"
              data-imagesrc="img/icons_select/single_bed.svg"
            >
              Tamilnadu
            </option>
          </select>
        </div>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="Land Mark"
            id="firstname_booking"
            name="firstname_booking"
          />
        </div>
        <div class="col-sm-6">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              Locality
            </option>
            <option
              value="adyar"
              data-imagesrc="img/icons_select/single_bed.svg"
            >
              Adyar
            </option>
          </select>
        </div>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="Pincode"
            id="firstname_booking"
            name="firstname_booking"
          />
        </div>
        <div class="col-sm-6">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              Block/Home Name/Phase
            </option>
            <option
              value="adyar"
              data-imagesrc="img/icons_select/single_bed.svg"
            >
              Adyar
            </option>
          </select>
        </div>
        <div class="col-sm-6">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              Floor
            </option>
            <option
              value="adyar"
              data-imagesrc="img/icons_select/single_bed.svg"
            >
              Adyar
            </option>
          </select>
        </div>
        <div class="col-sm-6">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              Total Floor
            </option>
            <option
              value="adyar"
              data-imagesrc="img/icons_select/single_bed.svg"
            >
              Adyar
            </option>
          </select>
        </div>
        <div class="col-sm-6">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              BHK
            </option>
            <option
              value="adyar"
              data-imagesrc="img/icons_select/single_bed.svg"
            >
              Adyar
            </option>
          </select>
        </div>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="Flat#"
            id="firstname_booking"
            name="firstname_booking"
          />
        </div>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="Facing"
            id="firstname_booking"
            name="firstname_booking"
          />
        </div>
        <div class="col-sm-6">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              Furnished Status
            </option>
            <option
              value="adyar"
              data-imagesrc="img/icons_select/single_bed.svg"
            >
              Adyar
            </option>
          </select>
        </div>
        <div class="col-sm-6">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              Parking
            </option>
            <option
              value="adyar"
              data-imagesrc="img/icons_select/single_bed.svg"
            >
              Adyar
            </option>
          </select>
        </div>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="Super Builtup Area"
            id="firstname_booking"
            name="firstname_booking"
          />
        </div>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="Carper Area"
            id="firstname_booking"
            name="firstname_booking"
          />
        </div>
        <div class="col-sm-6">
          <select class="form-control">
            <option value="" data-imagesrc="img/icons_select/add_bed.svg">
              Preferred Tenet
            </option>
            <option
              value="adyar"
              data-imagesrc="img/icons_select/single_bed.svg"
            >
              Adyar
            </option>
          </select>
        </div>
        <div class="col-sm-6"></div>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="Expected leace Amount"
            id="firstname_booking"
            name="firstname_booking"
          />
        </div>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="maintenance"
            id="firstname_booking"
            name="firstname_booking"
          />
        </div>
        <div class="col-sm-4">
          <p>Bachelor Allowed</p>
          <p class="radio-inline"
            ><input type="radio" name="optradio" />yes</p
          >
          <p class="radio-inline"
            ><input type="radio" name="optradio" checked />no</p
          >
        </div>
        <div class="col-sm-4">
          <p>Pet Allowed</p>
          <p class="radio-inline"
            ><input type="radio" name="optradio" checked />yes</p
          >
          <p class="radio-inline"
            ><input type="radio" name="optradio" />no</p
          >
        </div>
        <div class="col-sm-4">
          <p>Non-veg</p>
          <p class="radio-inline"
            ><input type="radio" name="optradio" />yes</p
          >
          <p class="radio-inline"
            ><input type="radio" name="optradio" checked />no</p
          >
        </div>
<br><br>
<div class="row">
<div class="col-sm-12">
    <center> <h3 >Amenities</h3></center>
</div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Garder</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Swimming pool</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Play Area</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Bank/ATM</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Recreational Facilities</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> 24hr backup</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Tennis court</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Security</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Intercom</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Community hall</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Broadband</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Library</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Laundary</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> RainWater Harvesting</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Gym</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Cafteria</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Badminton court</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Wifi</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Maintenance Staff</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> temple</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Basketball Court</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Club house</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Indoor Games</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Covered Parking</p
          >
        </div>
        <div class="col-sm-4">
          <p class="checkbox-inline"
            ><input type="checkbox" value="" /> Health Facilities</p
          >
        </div>
              </div>
        <div class="col-sm-8"></div>

        <div class="col-sm-6"><img src="/img/news_home_1.jpg" alt /><br><p> Extension</p></div>
        <div class="col-sm-6"><img src="/img/news_home_1.jpg" alt /><br><p> Inside View</p></div>
        <div class="col-sm-6"><img src="/img/news_home_1.jpg" alt /><br><p> Extension</p></div>
        <div class="col-sm-6"><img src="/img/news_home_1.jpg" alt /><br><p> Inside View</p></div>
        <div class="col-sm-6"><img src="/img/news_home_1.jpg" alt /><br><p> Extension</p></div>
        <div class="col-sm-6"><img src="/img/news_home_1.jpg" alt /><br><p> Inside View</p></div>
        <div class="col-sm-6"><img src="/img/news_home_1.jpg" alt /><br><p> Extension</p></div>
        <div class="col-sm-6"><img src="/img/news_home_1.jpg" alt /><br><p> Inside View</p></div>
      </div>
      </form>
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#" v-for="data of service" :key="data.slug">{{ data.title }}</a>

  </div>
    </div>
  </main>
</template>

<script>
const getProjects = () =>
  import("~/static/projects.json").then((m) => m.default || m);
export default {
  data() {
    return {
      selected: "Select Project",
      projectshow: false,
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
        photos: "",
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
  async asyncData() {
    return {
      projects: await getProjects(),
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
      this.projectshow = true;
      this.projectdata.name = user.name;
      this.projectdata.value = user.value;
      this.projectdata.location = user.location;
      this.projectdata.amenities = user.amenities;
      this.projectdata.floors = user.floors;
      this.projectdata.address = user.address;
      this.projectdata.photos = user.photos;
    },
    others_project() {
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
        async asyncData({ $content, params }) {

    const service = await $content("services", params.slug)
          .only(["title", "description", "img", "slug", "author","location","category","address"])
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      service
    };
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
