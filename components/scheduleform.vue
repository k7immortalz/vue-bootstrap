<template>
  <div class="container">
    <form autocomplete="off">
        <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="First Name">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name">
    </div>
  </div>
        <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Mobile</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="0987654321">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Email ID</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="mail@email.com">
    </div>
  </div>

     <div class="form-group col-md-12">
      
       <select class="required ddslick" name="time">
          <option value="">Preferred time</option>
          <option value="07.30 PM">07.30 PM</option>
          <option value="08.00 PM">08.00 PM</option>
          <option value="08.30 PM">08.30 PM</option>
          <option value="09.00 PM">09.00 PM</option>
          <option value="09.30 PM">09.30 PM</option>
          <option value="10.00 PM">10.00 PM</option>
        </select>
    </div>
         <div class="form-group col-md-12">
<input type="date" id="birthday" name="birthday">
         </div>

     <center><button type="submit" class="btn btn-success">Submit</button></center>
    </form>
  </div>
</template>