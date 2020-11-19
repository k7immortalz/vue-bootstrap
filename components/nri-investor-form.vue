<template>
  <form autocomplete="off">
    <div class="form-row">
                <div class="form-group col-md-12">

              <select class="form-control" id="sel1">
        <option>Buying a Property in India? Let us know Why.</option>
             <option>I love the country</option>
        <option>i need to invest this country</option>

      </select>

      </div>
                      <div class="form-group col-md-12">

              <select class="form-control" id="sel1">
        <option>How Soon are you looking to take possession ?</option>
             <option>3 months</option>
        <option>6 months</option>

      </select>

      </div>
                      <div class="form-group col-md-6">

              <select class="form-control" id="sel1">
        <option>Property Category</option>
             <option>I love the country</option>
        <option>i need to invest this country</option>

      </select>

      </div>
                      <div class="form-group col-md-6">

              <select class="form-control" id="sel1">
        <option>Property Type</option>
             <option>3 months</option>
        <option>6 months</option>

      </select>

      </div>
      <div class="form-group col-md-12">

        <input
          type="text"
          class="form-control"
          id="inputEmailc4"
          placeholder="Location"
        />
      </div>
      
      <div class="form-group col-md-6">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Maximun Budget"
        />
      </div>
      <div class="form-group col-md-6">

        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Minimum Budget"
        />
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




            <div class="form-group col-md-12">

        <textarea id="w3review" placeholder="Enter Your requirement..." class="form-control" name="w3review" rows="4" cols="50">
  </textarea>
      </div>
    </div>
    <center>
           <b-button variant="success" block>Submit</b-button>
          <b-button variant="danger" block @click="$bvModal.hide('bv-modal-investor')">Cancel</b-button> 
    </center>
  </form>
</template>

