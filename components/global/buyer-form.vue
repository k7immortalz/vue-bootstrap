<template>
<div class="serve-box-form">

  <form method="post" id="contactform" autocomplete="off">
    <div class="row">
      <div class="col-md-12 mt-4">
        <div class="text-center">
          <p><strong>Leave your house buying worries to us!</strong></p>
          <p>Check your eligibility instantlyy</p>
        </div>
        <div class="form-group">
          <label>Loan Amount</label>
          <input
            class="form-control"
            type="text"
            id="name_contact"
            name="name_contact"
            v-model="loan_amount"
          />
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>Mobile Number</label>
          <input
            class="form-control"
            type="text"
            id="lastname_contact"
            name="lastname_contact"
             v-model="mobile"
          />
        </div>
      </div>
    </div>

    <p class="add_top_30">
      <nuxt-link to="#" class="btn_1"><a @click="insert_function()">Apply Now</a></nuxt-link>
      <!-- <span class="btn_1 bt-fix"> <i class="pe-7s-chat"></i></span> -->
    </p>
  </form>
</div>
</template>
<script>

export default {
  data(){
    return{
      loan_amount:"",
      mobile:""
    }
  },
  methods: {
   async insert_function() {

      const loan_amount = this.loan_amount;
      const mobile = this.mobile;

      const res = await this.$apollo.mutate({
        mutation: require("@/graphQl/queries/enquiry-form.gql"),
        variables: {
          loan_amount,
          mobile
        },
      });
      if(res){
        alert("Inserted Success")
        console.log(res)
      }

    },
  }
}
</script>