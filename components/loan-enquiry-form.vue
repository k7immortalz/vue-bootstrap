<template>
  <div class="container">
    <form autocomplete="off">
        <div class="form-row">
    <div class="form-group col-md-6">

      <input type="text" class="form-control" id="inputEmail4" placeholder="First Name">
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name">
    </div>

    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="inputEmail4" placeholder="Mobile">
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="inputPassword4" placeholder="Email ID">
    </div>
        <div class="form-group col-md-12">
      <input type="text" class="form-control" id="inputPassword4" placeholder="City">
    </div>
  
    <div class="form-group col-md-12">
      <select id="inputState" class="form-control">
        <option selected>Employment Status</option>
        <option>...</option>
      </select>
    </div>

        <div class="form-group col-md-12">
      <select id="inputState" class="form-control">
        <option selected>Gross Monthly Income</option>
        <option>...</option>
      </select>
    </div>

        <div class="form-group col-md-12">
      <select id="inputState" class="form-control">
        <option selected>Property Identified</option>
        <option>...</option>
      </select>
    </div>

      <div class="form-group col-md-12">
    <input type="text" class="form-control" id="inputAddress" placeholder="Loan Amount">
  </div>

        <div class="form-group col-md-12">
      <select id="inputState" class="form-control">
        <option selected>Loan Tenure Year</option>
        <option>...</option>
      </select>
    </div>
</div>
     <center>
           <b-button variant="success" block>Submit</b-button>
          <b-button variant="danger" block @click="$bvModal.hide('bv-modal-loan')">Cancel</b-button>     </center>  
    </form>
  </div>
</template>