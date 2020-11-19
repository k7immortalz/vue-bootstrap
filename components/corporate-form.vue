<template>
  <form autocomplete="off">
    <div class="form-row">
      <div class="form-group col-md-12">

        <input
          type="text"
          class="form-control"
          id="inputEmailc4"
          placeholder="Corporate Name"
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

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Mobile"
        />
      </div>
      <div class="form-group col-md-12">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Email"
        />
      </div>


            <div class="form-group col-md-12">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Google Location"
        />
      </div>



            <div class="form-group col-md-12">

        <textarea id="w3review" placeholder="Enter Your Property Stall, location requirement" class="form-control" name="w3review" rows="4" cols="50">
  </textarea>
      </div>
    </div>
    <center>
           <b-button variant="success" block>Submit</b-button>
          <b-button variant="danger" block @click="$bvModal.hide('bv-modal-corporate')">Cancel</b-button> 
    </center>
  </form>
</template>

