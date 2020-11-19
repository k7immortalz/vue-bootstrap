<template>
  <div class="container">
    <form autocomplete="off">
     <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Full Name"  v-model="y_name">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Your Email Id"  v-model="y_email">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Mobile No."  v-model="y_mobile">
      </div>
       <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Friend's Full Name"  v-model="r_name">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Friend's Email Id"  v-model="r_email">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Friend's Mobile No."  v-model="r_mobile">
      </div>
            <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Friend's Skype ID"  v-model="r_skype">
      </div>
      <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

                <b-button block variant="success"  @click="insert_function()">Submit</b-button>
            <b-button variant="danger" class="mt-3" block @click="$bvModal.hide('bv-modal-refer')">Cancel</b-button>
    
    </form>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      r_name: "",
      y_name: "",
      r_mobile: "",
      y_mobile:"",
      r_email: "",
      y_email: "",
      r_skype: "",
      type: "referral"
    };
  },
  methods: {
    async insert_function() {
      const r_name = this.r_name; 
      const y_name = this.y_name;
      const r_mobile = this.r_mobile;
      const y_mobile = this.y_mobile;
      const r_email = this.r_email;
      const y_email = this.y_email;
      const r_skype = this.r_skype;
      const type = this.type;

      const res = await this.$apollo.mutate({
        mutation: require("@/graphQl/queries/refer-form.gql"),
        variables: {
          r_name,
          y_name,
          r_mobile,
          y_mobile,
          r_email,
          y_email,
          r_skype,
          type
        },
      });
                if(res){
        alert("Inserted Success")
        $('#bv-modal-refer').modal('hide')
        console.log(res)
      }
    },

  },
};
</script>