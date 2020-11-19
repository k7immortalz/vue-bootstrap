<template>
  <div class="serve-box-form">
    <form method="post" id="contactform" autocomplete="off">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center">
            <!-- <p><strong>Leave your house buying worries to us!</strong></p> -->
            <h3><strong>NRI-Investors Enquiry</strong></h3>
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              id="name_contact"
              name="name_contact"
              placeholder="Approximate Budget"
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

      <span>
        <b-button id="show-btn" block variant="success">Submit</b-button>
        <b-button
          id="show-btn"
          block
          variant="success"
          @click="
            $bvModal.show('bv-modal-investor');
            appendStyleToParent();
          "
          >Get Customized Solutions</b-button
        >
        <b-modal
          id="bv-modal-investor"
          class="mt-10"
          centered
          hide-footer
          title="NRI Invenstors Form"
        >
          <div class="d-block text-center">
            <NriInvestorForm />
          </div>
        </b-modal>
      </span>
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
    }
  }
}
</script>