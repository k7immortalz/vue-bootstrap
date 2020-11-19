<template>
  <div class="container-fluid">
    <form-wizard
      @on-complete="onComplete"
      shape="circle"
      color="#20a0ff"
      error-color="#ff4949"
      title=""
      subtitle=""
    >
      <!-- STEP -->
      <tab-content
        title="Personal details"
        icon="ti-user"

        :before-change="validateUser"
      >
        <div :model="user" :rules="userRules" ref="userForm">
          <div class="row">
            <div class="col-12 align-center">You are</div>
            <div
              class="col-4 users"
              @click="selectUser(userT.value)"
              v-for="userT in userTypes"
              :key="userT.value"
              :class="{ active: user.userType === userT.value }"
            >
              <span>{{ userT.name }}</span>
              <input
                id="userType"
                v-model="user.userType"
                type="hidden"
                required
              />
            </div>
          </div>
        </div>
      </tab-content>
      <!-- END -->

      <!-- STEP -->
      <tab-content
        title="Verification"
        icon="ti-settings"
        v-if="!isLoggedIn"
        :before-change="validateUserVerification"
      >
        <div :model="userVerification" :rules="userVerificationRules">
          <div class="row no-gutters pb-1" v-if="!isOtpSent">
            <div class="col-6 pr-2">
              <div class="form-group">
                <div class="">
                  <input
                    type="tel"
                    v-model="userVerification.mobile"
                    id="mobile"
                    value=""
                    class="qty form-control input-align"
                    placeholder="Mobile Number"
                    maxlength="10"
                    minlength="10"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="col-6 pl-2">
              <div class="form-group">
                <input
                  type="button"
                  value="Send OTP"
                  class="btn_1 rounded"
                  @click="verification('SEND')"
                />
              </div>
            </div>
          </div>
          <div class="row no-gutters pb-1" v-if="isOtpSent">
            <div class="col-6 pr-2">
              <div class="form-group">
                <div class="">
                  <input
                    type="tel"
                    v-model="userVerification.otp"
                    class="form-control input-field input-align"
                    placeholder="Enter OTP"
                    id="otp"
                    maxlength="6"
                    minlength="6"
                    required
                    :disabled="isOtpVerified"
                  />
                </div>
              </div>
            </div>
            <div class="col-6 pl-2">
              <div class="form-group">
                <input
                  type="button"
                  value="Confirm"
                  class="btn_1 rounded"
                  @click="verification('CONFIRM')"
                  v-if="!isOtpVerified"
                />
                <input
                  type="button"
                  value="Mobile Verified"
                  class="btn_1 rounded"
                  v-if="isOtpVerified"
                />
              </div>
            </div>
          </div>
        </div>
      </tab-content>
      <!-- END -->

      <!-- STEP -->
      <tab-content title="Basic Information and location" icon="ti-check">
        <div :model="property" :rules="propertyRules" ref="propertyForm">
          <div class="row no-gutters pb-1">
            <div class="col-6 pr-2">
              <div class="form-group">
                <select
                  class="ddslick"
                  v-model="property.category"
                  id="categories"
                  required
                >
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
                <select
                  class="ddslick"
                  v-model="property.propertyType"
                  id="propertyType"
                  required
                >
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
                <select
                  class="ddslick"
                  v-model="property.projectStatus"
                  id="projectStatus"
                  required
                >
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

          <!-- <div class="input-icons">
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
          </div> -->
          <!-- <div class="row no-gutters pb-1">
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
          </div> -->
          <!-- <div class="form-group">
            <textarea
              class="form-control notes"
              placeholder="Special notes"
            ></textarea>
          </div> -->
          <!-- <div class="form-group">
            <select name="time" class="ddslick1">
              <option value="">Preferred time</option>
              <option value="07.30 PM">07.30 PM</option>
              <option value="08.00 PM">08.00 PM</option>
              <option value="08.30 PM">08.30 PM</option>
              <option value="09.00 PM">09.00 PM</option>
              <option value="09.30 PM">09.30 PM</option>
              <option value="10.00 PM">10.00 PM</option>
            </select>
          </div> -->
          <!-- <div class="input-icons">
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
          </div> -->

          <div class="row no-gutters pb-1">
            <div class="col-12 pr-2">
              <div id="map" style="height: 180px"></div>
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
        </div>
      </tab-content>
      <!-- END -->

      <!-- STEP -->
      <tab-content
        title="Amenties"
        icon="ti-check"
        :before-change="validateAmenties"
      >
        <div class="row" :model="amentiesForm" :rules="amentiesFormRules">
          <div
            class="col-lg-2"
            v-for="item in amentiesList"
            :key="item.value"
            @click="selectAmenties(item.value)"
          >
            <a
              class="box_feat icon-p-sm"
              :class="{ active: ifAmentiesSelected(item.value) }"
            >
              <figure>
                <img :src="item.image" alt="" class="imgsize" />
              </figure>
              <p>
                <small>{{ item.name }}</small>
              </p>
            </a>
          </div>
          <input
            id="amenities"
            v-model="amentiesForm.amenties"
            type="hidden"
            required
          />
        </div>
      </tab-content>
      <!-- END -->

      <!-- STEP -->
      <tab-content title="Upload" icon="ti-check">
        <div id="drop-area">
          <form class="my-form">
            <p>
              Upload multiple files with the file dialog or by dragging and
              dropping images onto the dashed region
            </p>
            <input
              type="file"
              id="fileElem"
              multiple
              accept="image/*, video/*"
              @change="fileSelection"
            />
            <label class="button" for="fileElem">Select some files</label>
          </form>
          <!-- <progress id="progress-bar" max="100" value="0"></progress> -->
          <div id="gallery"></div>
        </div>
      </tab-content>

      <!-- STEP -->
      <tab-content title="Finish" icon="ti-check">
        <div class="finish">AL DONE</div>
      </tab-content>
      <!-- END -->

      <button type="primary" slot="prev" class="btn btn-warning">Back</button>
      <button type="primary" slot="next" class="btn btn-warning">Next</button>
      <button type="primary" slot="finish" class="btn btn-success">
        Finish
      </button>
    </form-wizard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      isOtpSent: false,
      isOtpVerified: false,
      dropArea: "",
      uploadProgress: [],
      progressBar: {},
      user: {
        userType: "",
      },
      userRules: {
        userType: [
          {
            required: true,
            message: "User Type is required",
            trigger: "blur",
          },
        ],
      },
      userVerification: {
        mobile: "",
        otp: "",
      },
      userVerificationRules: {
        mobile: [
          {
            required: true,
            message: "Mobile is required",
            trigger: "blur",
          },
        ],
        otp: [
          {
            required: true,
            message: "Otp is required",
            trigger: "blur",
          },
        ],
      },
      amentiesForm: {
        amenties: [],
      },
      amentiesFormRules: {
        amenties: [
          {
            required: true,
            message: "Amenties are required",
            trigger: "blur",
          },
        ],
      },
      property: {
        adults: "",
        child: "",
        checkIn: "",
        prefferedDate: "",
        preferredTime: "",
      },
      propertyRules: {
        adults: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
        child: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
        checkIn: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
        prefferedDate: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
        preferredTime: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
      },
      amentiesList: [
        {
          name: "Gym",
          value: "gym",
          image: "/img/amenities/gym.svg",
        },
        {
          name: "beauty-parlor",
          value: "Beauty parlor",
          image: "img/amenities/Beauty parlor.svg",
        },
        {
          name: "Lounge",
          value: "lounge",
          image: "/img/amenities/lounge.svg",
        },
        {
          name: "Managemen",
          value: "managemen",
          image: "/img/amenities/Management.svg",
        },
        {
          name: "Swimming pool",
          value: "swimming-pool",
          image: "/img/amenities/swimming pool.svg",
        },
        {
          name: "Parking",
          value: "parking",
          image: "img/amenities/Parking .svg",
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
    };
  },
  methods: {
    getSession() {
      return !!localStorage.getItem("user");
    },
    validateUser() {
      if (this.user.userType) {
        return true;
      }
      return false;
    },
    validateUserVerification() {
      if (this.userVerification.mobile && this.userVerification.otp) {
        return true;
      }
      return false;
    },
    verification(type) {
      if (type === "SEND") {
        if (this.userVerification.mobile) {
          this.isOtpSent = true;
        }
      }
      if (type === "CONFIRM") {
        if (this.userVerification.otp) {
          this.isOtpVerified = true;
        }
      }
    },
    validateAmenties() {
      if (this.amentiesForm.amenties && this.amentiesForm.amenties.length) {
        return true;
      }
      return false;
    },
    validateProperty() {
      let isInvalid = false;
      Object.keys(this.property).forEach((key) => {
        if (!this.property[key]) {
          isInvalid = true;
        }
      });
      if (!isInvalid) {
        return true;
      }
      return false;
    },
    onComplete: function () {
              this.$bvToast.toast('Toast body content', {
          solid: true
        })
      alert("Yay. Done!");
    },
    selectAmenties(item) {
      const amentiesExist = this.amentiesForm.amenties.filter(
        (val) => val === item
      );
      if (amentiesExist.length) {
        this.amentiesForm.amenties = this.amentiesForm.amenties.filter(
          (val) => val !== item
        );
      } else {
        this.amentiesForm.amenties.push(item);
      }
    },
    ifAmentiesSelected(item) {
      return this.amentiesForm.amenties.indexOf(item) !== -1 ? true : false;
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
      this.user.userType = user;
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
    preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    highlight(e) {
      this.dropArea.classList.add("highlight");
    },
    unhighlight(e) {
      this.dropArea.classList.remove("active");
    },
    handleDrop(e) {
      var dt = e.dataTransfer;
      var files = dt.files;
      this.handleFiles(files);
    },
    initializeProgress(numFiles) {
      this.progressBar.value = 0;
      this.uploadProgress = [];

      for (let i = numFiles; i > 0; i--) {
        this.uploadProgress.push(0);
      }
    },
    updateProgress(fileNumber, percent) {
      this.uploadProgress[fileNumber] = percent;
      let total =
        this.uploadProgress.reduce((tot, curr) => tot + curr, 0) /
        this.uploadProgress.length;
      console.debug("update", fileNumber, percent, total);
      this.progressBar.value = total;
    },
    handleFiles(files) {
      files = [...files];
      this.initializeProgress(files.length);
      // files.forEach(uploadFile);
      files.forEach(this.previewFile);
    },
    fileSelection(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.handleFiles(files);
    },
    previewFile(file) {
      let fileReader = new FileReader();
      if (file.type.match("image")) {
        fileReader.readAsDataURL(file);
        fileReader.onloadend = function () {
          let img = document.createElement("img");
          img.src = fileReader.result;
          img.width = "150";
          img.height = "150";
          img.style = "margin: 10px; border: 1px solid #ccc;";
          document.getElementById("gallery").appendChild(img);
        };
      } else {
        fileReader.onload = function () {
          var blob = new Blob([fileReader.result], { type: file.type });
          var url = URL.createObjectURL(blob);
          var video = document.createElement("video");
          var snapImage = function () {
            var canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas
              .getContext("2d")
              .drawImage(video, 0, 0, canvas.width, canvas.height);
            var image = canvas.toDataURL();
            var success = image.length > 100000;
            if (success) {
              var img = document.createElement("img");
              img.src = image;
              img.width = "150";
              img.height = "150";
              img.style = "margin: 10px; border: 1px solid #ccc;";
              document.getElementById("gallery").appendChild(img);
              URL.revokeObjectURL(url);
            }
            return success;
          };
          var timeupdate = function () {
            if (snapImage()) {
              video.removeEventListener("timeupdate", timeupdate);
              video.pause();
            }
          };
          video.addEventListener("loadeddata", function () {
            if (snapImage()) {
              video.removeEventListener("timeupdate", timeupdate);
            }
          });
          video.addEventListener("timeupdate", timeupdate);
          video.preload = "metadata";
          video.src = url;
          // Load video in Safari / IE11
          video.muted = true;
          video.playsInline = true;
          video.play();
        };
        fileReader.readAsArrayBuffer(file);
      }
    },
    upload() {
      const vueInstance = this;
      var url = "https://api.cloudinary.com/v1_1/joezimim007/image/upload";
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

      // Update progress (can be used to show progress indicator)
      xhr.upload.addEventListener("progress", function (e) {
        vueInstance.updateProgress(i, (e.loaded * 100.0) / e.total || 100);
      });

      xhr.addEventListener("readystatechange", function (e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
          vueInstance.updateProgress(i, 100); // <- Add this
        } else if (xhr.readyState == 4 && xhr.status != 200) {
          // Error. Inform the user
        }
      });

      formData.append("upload_preset", "ujpu6gyk");
      formData.append("file", file);
      xhr.send(formData);
    },
    media() {
      const vueInstance = this;
      // ************************ Drag and drop ***************** //
      vueInstance.dropArea = document.getElementById("drop-area");
      vueInstance.uploadProgress = [];
      vueInstance.progressBar = document.getElementById("progress-bar");
      debugger;

      // Prevent default drag behaviors
      ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
        vueInstance.dropArea.addEventListener(
          eventName,
          vueInstance.preventDefaults,
          false
        );
        document.body.addEventListener(
          eventName,
          vueInstance.preventDefaults,
          false
        );
      });

      // Highlight drop area when item is dragged over it
      ["dragenter", "dragover"].forEach((eventName) => {
        vueInstance.dropArea.addEventListener(
          eventName,
          vueInstance.highlight,
          false
        );
      });

      ["dragleave", "drop"].forEach((eventName) => {
        vueInstance.dropArea.addEventListener(
          eventName,
          vueInstance.unhighlight,
          false
        );
      });

      // Handle dropped files
      vueInstance.dropArea.addEventListener(
        "drop",
        vueInstance.handleDrop,
        false
      );
    },
    geoJson() {
      var map = L.map("map").setView([12.9716, 77.5946], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
      }).addTo(map);

      L.marker([12.9121, 77.6446])
        .addTo(map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();
    },
  },
  mounted() {
    this.isLoggedIn = this.getSession();
    setTimeout(() => {
      this.geoJson();
      $("#categories").ddslick({
        selectText: "Select Category",
      });
      $("#propertyType").ddslick({
        selectText: "Select Property Type",
      });
      $("#projectStatus").ddslick({
        selectText: "Select Project Status",
      });
      this.initDateRanger();
    });
  },
};
</script>
<style scoped>
.custom-col {
  border: 1px solid #ccc;
  padding: 20px;
}
div.users {
  cursor: pointer;
  padding: 20px;
  border: 1px solid #ccc;
  margin-top: 20px;
  text-align: center;
}
.active {
  background: rgb(32, 160, 255) !important;
}
.align-center {
  text-align: center;
}
.w100 {
  width: 100%;
}
.finish {
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 20px;
}
.input-align {
  text-align: inherit !important;
}
#drop-area {
  border: 2px dashed #ccc;
  border-radius: 20px;
  width: 480px;
  font-family: sans-serif;
  margin: 100px auto;
  padding: 20px;
}
#drop-area.highlight {
  border-color: purple;
}
p {
  margin-top: 0;
}
.my-form {
  margin-bottom: 10px;
}
#gallery {
  margin-top: 10px;
}
#gallery img {
  width: 150px;
  margin-bottom: 10px;
  margin-right: 10px;
  vertical-align: middle;
}
.button {
  display: inline-block;
  padding: 10px;
  background: #ccc;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.button:hover {
  background: #ddd;
}
#fileElem {
  display: none;
}
</style>
