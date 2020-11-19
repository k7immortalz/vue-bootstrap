<template>
  <div class="container">
    <form autocomplete="off">
     <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name">
      </div>
       <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Last Name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Mobile No.">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Your Email Id">
      </div>
       <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Service Locality">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Where do you us">
      </div>
     
      <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="vision" rows="2"></textarea>
  </div>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="profile" rows="2"></textarea>
  </div>
                  <b-button block variant="success">Submit</b-button>
            <b-button variant="danger" class="mt-3" block @click="$bvModal.hide('bv-modal-franc')">Cancel</b-button>
    </form>
  </div>
</template>