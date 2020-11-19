<template>
  <div class="container">
    <form autocomplete="off">
      <div class="form-group">
        <select class="form-control" id="sel1" v-model="enquiry_type">
          <option>Type *</option>
          <option
            v-for="item in type"
            :key="item.value"
            v-bind:value="item.value"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <select class="form-control" id="sel1" v-model="enquiry_Category">
          <option>Category *</option>
          <option
            v-for="item in Category"
            :key="item.value"
            v-bind:value="item.value"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <select class="form-control" id="sel1" v-model="enquiry_sub_Category">
          <option>Sub Category *</option>
          <option
            v-for="item in sub_Category"
            :key="item.value"
            v-bind:value="item.value"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-sm-6">
            <input
              class="form-control"
              placeholder="First Name *"
              type="text"
              v-model="first_name"
            />
          </div>
          <div class="col-sm-6">
            <input
              class="form-control"
              placeholder="Last Name *"
              type="text"
              v-model="last_name"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-sm-3">
            <select class="form-control" id="sel1" v-model="enquiry_country_code">
              <option>+91</option>
          <option
            v-for="item in country_code"
            :key="item.value"
            v-bind:value="item.value"
          >
            {{ item.name }}
          </option>
            </select>
          </div>

          <div class="col-sm-9">
            <input
              class="form-control"
              placeholder=""
              type="text"
              v-model="mobile"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <input
          class="form-control"
          placeholder="Email *"
          type="text"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          placeholder="Location *"
          type="text"
          v-model="location"
        />
      </div>
      <div class="form-group">
        <textarea
          class="form-control"
          placeholder="Description"
          aria-label="With textarea"
          v-model="desc"
        ></textarea>
      </div>
      <div class="form-group">
        <select class="form-control" id="sel1" v-model="enquiry_find_us">
          <option>Where did you find us ? *</option>
          <option
            v-for="item in find_us"
            :key="item.value"
            v-bind:value="item.value"
          >
            {{ item.name }}
          </option>
        </select>
      </div>

      <button type="button" class="btn btn-success btn-block"   @click="insert_function()" >Submit</button>

      <button
        type="button"
        class="btn btn-danger btn-block"
        data-dismiss="modal"
      >
        Cancel
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: [
        { name: "sell", value: "sell" },
        { name: "rentout", value: "rentout" },
      ],
      Category: [
        { name: "sell", value: "sell" },
        { name: "rentout", value: "rentout" },
      ],
      sub_Category: [
        { name: "sell", value: "sell" },
        { name: "rentout", value: "rentout" },
      ],
      find_us: [
        { name: "sell", value: "sell" },
        { name: "rentout", value: "rentout" },
      ],
      country_code: [
        { name: "+92", value: "+92" },
        { name: "+93", value: "+93" },
      ],
      enquiry_type: "Type *",
      enquiry_Category: "Category *",
      enquiry_sub_Category: "Sub Category *",
      enquiry_find_us: "Where did you find us ? *",
      enquiry_country_code:"+91",
      first_name: "",
      last_name: "",
      mobile: "",
      email: "",
      location: "",
      desc: ""
    };
  },
  methods: {
    async insert_function() {
      const enquiry_type = this.enquiry_type; 
      const enquiry_Category = this.enquiry_Category;
      const enquiry_sub_Category = this.enquiry_sub_Category;
      const enquiry_find_us = this.enquiry_find_us;
      const enquiry_country_code = this.enquiry_country_code;
      const name = this.first_name + " "+ this.last_name;
      const mobile = this.mobile;
      const email = this.email;
      const location = this.location;
      const desc = this.desc;
      const service = "enquiry";
      const loan_amount = 0;

      const res = await this.$apollo.mutate({
        mutation: require("@/graphQl/queries/enquiry-form.gql"),
        variables: {
          enquiry_type,
          enquiry_find_us,
          enquiry_country_code,
          name,
          mobile,
          email,
          enquiry_Category,
          enquiry_sub_Category,
          location,
          desc,
          service,
          loan_amount
        },
      });
                if(res){
        alert("Inserted Success")
        $('#enquiryModal').modal('hide')
        console.log(res)
      }
    },

  },
};
</script>