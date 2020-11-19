<template>
  <div class="serve-box-form">
    <form method="post" id="contactform" autocomplete="off">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center">
            <h4><strong>Leave your house buying worries to us!</strong></h4>
            <p style="color: black">Check your eligibility instantly</p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              id="lastname_contact"
              name="lastname_contact"
              v-model="company_name"
              placeholder="Company Name"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              id="lastname_contact"
              name="lastname_contact"
              v-model="number_of_employees"
              placeholder="Email"
            />
          </div>
        </div>
      </div>

      <!-- <p class="add_top_30">
      <nuxt-link to="#" class="btn_1"><a @click="insert_function()">Submit</a></nuxt-link>
    </p>							 -->
      <center>
        <b-button id="show-btn" block variant="success">Submit</b-button>
        <b-button
          id="show-btn"
          block
          variant="success"
          @click="$bvModal.show('bv-modal-example'); appendStyleToParent()"
          >Get Customized Solutions</b-button
        >
        <!-- <span class="btn_1  bt-fix bt-m"> <i class="pe-7s-chat"></i></span> -->
        <b-modal
          id="bv-modal-example"
          class="mt-10"
          scrollable
          hide-footer
          title="Builders Form"
        >
          <div class="d-block text-center">
            <BuilderAgentForm />
          </div>
        </b-modal>
      </center>
    </form>
  </div>
</template><script>
export default {
  data() {
    return {
      email: "",
      company_name: "",
      number_of_employees: "",
    };
  },
  methods: {
    async insert_function() {
      const email = this.email;
      const company_name = this.company_name;
      const number_of_employees = this.number_of_employees;

      const res = await this.$apollo.mutate({
        mutation: require("@/graphQl/queries/corporate-form.gql"),
        variables: {
          email,
          company_name,
          number_of_employees,
        },
      });
      if (res) {
        alert("Inserted Success");
        console.log(res);
      }
    },
    appendStyleToParent() {
      setTimeout(() => {
        $("body")
          .find(".modal")
          .parent()
          .attr("style", "position: absolute; z-index: 99999999 !important");
      });
    }
  },
};
</script>