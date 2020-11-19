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

              <select class="form-control" id="sel1">
        <option>Use Company Name</option>
             <option>Wipro</option>
        <option>HCL</option>

      </select>

      </div>
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


        <div class="form-group col-md-12">

              <select class="form-control" id="sel1">
        <option>Services Offered</option>
             <option>Site Management</option>
        <option>Other Services</option>

      </select>
      </div>
            <div class="form-group col-md-12">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Company URL"
        />
      </div>
            <div class="form-group col-md-12">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Tags"
        />
      </div>


            <div class="form-group col-md-12">

        <textarea id="w3review" placeholder="Office Address" class="form-control" name="w3review" rows="4" cols="50">
  </textarea>
      </div>
    </div>
    <center>
           <b-button variant="success" block>Submit</b-button>
          <b-button variant="danger" block @click="$bvModal.hide('bv-modal-vendors')">Cancel</b-button> 
    </center>
  </form>
</template>

