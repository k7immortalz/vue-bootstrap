<template>
  <div class="serve-box-form">
    <form method="post" id="contactform" autocomplete="off">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center">
            <h4><strong>Leave your house buying worries to us!</strong></h4>
            <p style="color: black">Check your eligibility instantly</p>
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              id="name_contact"
              name="name_contact"
              v-model="email"
              placeholder="Corporate Name"
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
              v-model="company_name"
              placeholder="Email"
            />
          </div>
        </div>
      </div>

      <center>
        <b-button id="show-btn" block variant="success"
          ><a @click="insert_function()">Submit</a></b-button
        >

        <b-button
          id="show-btn"
          block
          variant="success"
          @click="$bvModal.show('bv-modal-corporate'); appendStyleToParent()"
          >Get Customized Solutions</b-button
        >
        <b-modal
          id="bv-modal-corporate"
          class="mt-10"
          centered
          hide-footer
          title="Corporates Form"
        >
          <div class="d-block text-center">
            <CorporateForm />
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