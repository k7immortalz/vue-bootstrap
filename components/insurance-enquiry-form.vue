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

  
    <div class="form-group col-md-6">
      <select id="inputState" class="form-control">
        <option selected>Type of Property *</option>
        <option>...</option>
      </select>
    </div>

        <div class="form-group col-md-6">
      <select id="inputState" class="form-control">
        <option selected>Value of the Building *</option>
        <option>...</option>
      </select>
    </div>

        <div class="form-group col-md-6">
      <select id="inputState" class="form-control">
        <option selected>Value of the Content *</option>
        <option>...</option>
      </select>
    </div>
            <div class="form-group col-md-6">
      <select id="inputState" class="form-control">
        <option selected>Age of the Property *</option>
        <option>...</option>
      </select>
    </div>
            <div class="form-group col-md-12">
      <select id="inputState" class="form-control">
        <option selected>Policy terms *</option>
        <option>...</option>
      </select>
    </div>

            <div class="form-group col-md-12">

        <textarea id="w3review" placeholder="Short description here...!" class="form-control" name="w3review" rows="4" cols="50">
  </textarea>
      </div>

</div>
     <center>
                  <b-button variant="success" block>Submit</b-button>
          <b-button variant="danger" block @click="$bvModal.hide('bv-modal-owned')">Cancel</b-button>    </center>  
    </form>
  </div>
</template>