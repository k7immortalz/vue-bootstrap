<template>
  <form autocomplete="off">
    <div class="form-row">
      <div class="form-group col-md-6">

        <input
          type="text"
          class="form-control"
          id="inputEmailc4"
          placeholder="Company Name"
        />
      </div>
        <div class="form-group col-md-6">
    <input type="file" class="form-control-file" id="exampleFormControlFile1" placeholder="Update LOGO"><label style="color:black">Update Logo</label>
  </div>

      <!-- <div class="form-group col-md-6">

              <label for="inputEmail4">Mobile</label>
        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="0987654321"
        />
      </div> -->
    </div>
        <div class="form-row">
      <div class="form-group col-md-6">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="First Name"
        />
      </div>
      <div class="form-group col-md-6">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Last Name"
        />
      </div>
    </div>
            <div class="form-row">
      <div class="form-group col-md-6">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Mobile"
        />
      </div>
      <div class="form-group col-md-6">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Email"
        />
      </div>
                            <div class="form-group col-md-12">

              <select class="form-control" id="sel1">
        <option>Deals Info</option>
             <option>I love the country</option>
        <option>i need to invest this country</option>

      </select>

      </div>
    </div>
            <div class="form-row">
      <div class="form-group col-md-6">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="GST No"
        />
      </div>
      <div class="form-group col-md-6">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Google Locality"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-4">
        <label style="color:black; margin-top:10px">Operating Since</label>
      </div>
            <div class="form-group col-md-2">
                      <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Month"
        />
      </div>
            <div class="form-group col-md-2">
                      <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Year"
        />
      </div>
                <div class="form-group col-md-4">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Company URL"
        />
      </div>
    </div>

            <div class="form-row">

      <div class="form-group col-md-12">

         <textarea id="w3review" placeholder="About Company"  class="form-control" name="w3review" rows="4" cols="50">
  </textarea>
      </div>
            <div class="form-group col-md-12">

        <textarea id="w3review" placeholder="Office Address" class="form-control" name="w3review" rows="4" cols="50">
  </textarea>
      </div>
    </div>
       <div class="form-row">
               <div class="form-group col-md-6">
        <label style="color:black; margin-top:10px">Office & billing Address are same</label>
      </div>
            <div class="form-group col-md-6">
    <div class="radio">
      <label style="color:black;"><input type="radio" name="optradio"  @click="address_close()" checked>&nbsp;Yes</label>
    </div>
    <div class="radio">
      <label style="color:black;"><input type="radio" name="optradio" @click="address_open()">&nbsp;No</label>
    </div>
      </div>

       </div>
                   <div class="form-row" v-if="billing">
      <div class="form-group col-md-12">

         <textarea id="w3review" placeholder="Billing Address"  class="form-control" name="w3review" rows="4" cols="50">
  </textarea>
      </div>
    </div>
    <center>

                  <b-button block variant="success">Submit</b-button>
            <b-button variant="danger" class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Cancel</b-button>
    </center>
  </form>
</template>
<script>
export default {
  data(){
    return{
      billing:false
    }
  },
  methods:{
address_open(){
  this.billing=true;
},
address_close(){
  this.billing=false;
}
  }
}
</script>

