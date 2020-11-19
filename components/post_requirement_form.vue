<template>
<form autocomplete="off">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4"> Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Full Name" />
    </div>
    <div class="form-group col-md-6">

      <label for="inputEmail4">Mobile</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="0987654321" />
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputEmail4">Location</label>
      <select class="form-control" id="sel1">
        <option>Location</option>
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>
        <option>Kochin</option>
      </select>
    </div>
    <div class="form-group col-md-6">
    <label for="inputEmail4">Property</label>
      <select class="form-control" id="sel1">
        <option>Property Type</option>
        <option>Apartment</option>
        <option>Villa</option>

      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputEmail4">Bedrooms</label>
      <select class="form-control" id="sel1">
        <option>Bedrooms</option>
        <option>1BHK</option>
        <option>2BHK</option>
        <option>3BHK</option>
        <option>4BHK</option>
      </select>

    </div>
    <div class="form-group col-md-6">
  <label for="inputEmail4">Budget</label>
      <select class="form-control" id="sel1">
        <option>Budget</option>
        <option>0 - 1 M</option>
        <option>1 M - 2.5 M</option>
        <option>2.5 M - 4 M</option>
        <option>4 M - 5 M</option>
      </select>

    </div>
    <div class="form-group col-md-12">
      <label for="inputEmail4">Descrption</label>

      <textarea id="w3review" class="form-control" name="w3review" rows="4" cols="50">
  </textarea>
    </div>
  </div>




  <center>
    <button type="submit" class="btn btn-success">Submit</button>
  </center>
</form>
</template>
