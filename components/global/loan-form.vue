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
              placeholder="Loan Amount"
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
              placeholder="Mobile Number"
            />
          </div>
        </div>
      </div>

      <center>
        <b-button id="show-btn" block variant="success">Apply Now</b-button>
        <b-button
          id="show-btn"
          block
          variant="success"
          @click="$bvModal.show('bv-modal-loan'); appendStyleToParent()"
          mt-4
          >Get Customized Solutions</b-button
        >
        <b-modal
          id="bv-modal-loan"
          class="mt-10"
          centered
          hide-footer
          title="Apply Loan"
        >
          <div class="d-block text-center">
            <LoanEnquiryForm />
          </div>
        </b-modal>
      </center>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    appendStyleToParent() {
      setTimeout(() => {
        $("body")
          .find(".modal")
          .parent()
          .attr("style", "position: absolute; z-index: 99999999 !important");
      });
    },
  },
};
</script>