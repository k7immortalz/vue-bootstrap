<template>
  <div class="container">
    <form autocomplete="off">
      <h3>Set new property alerts</h3>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Looking For</legend>
          <div class="col-sm-10">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
              <label class="form-check-label" for="inlineRadio1">Residental</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2">Commerical</label>
            </div>
          </div>
        </div>   
      </fieldset>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">I Wish To</legend>
          <div class="col-sm-10">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
              <label class="form-check-label" for="inlineRadio1">Buy</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2">Rent</label>
            </div>
             <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
              <label class="form-check-label" for="inlineRadio2">Pg</label>
            </div>
          </div>
        </div>   
      </fieldset>
      <div class="form-group row">
        <div class="col-sm-2">Property Type</div>
        <div class="col-sm-5">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1">
            <label class="form-check-label" for="gridCheck1">
             Residential Apartment
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck2">
            <label class="form-check-label" for="gridCheck2">
             Residential Land
            </label>
          </div>
         
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck3">
            <label class="form-check-label" for="gridCheck3">
             Form House
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck4">
            <label class="form-check-label" for="gridCheck4">
             Studio Apartment
            </label>
          </div>
        </div>
        <div class="col-sm-5">
           <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1">
            <label class="form-check-label" for="gridCheck1">
             Independent House/Villa
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck2">
            <label class="form-check-label" for="gridCheck2">
             Independent Builder/Floor
            </label>
          </div>         
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck3">
            <label class="form-check-label" for="gridCheck3">
             Serviced Apartment
            </label>
          </div>
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Budget Prefencere</legend>
          <div class="col-sm-3">
            <div class="form-group">    
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Min</option>
                <option>2</option>
                 <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div class="col-sm-2 text-center">
            <p>to</p>
          </div>
          <div class="col-sm-3">
            <div class="form-group">    
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Max</option>
                <option>2</option>
                 <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>   
      </fieldset>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Choose Locatin</legend>
          <div class="col-sm-10">
            <div class="form-group">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>
        </div>   
      </fieldset>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Bedrooms</legend>
          <div class="col-sm-3">
            <div class="form-group">    
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Bedroom</option>
                <option>2</option>
                 <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>   
      </fieldset>
      <div class="form-group row">
        <div class="col-sm-2">Sale Type</div>
        <div class="col-sm-5">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1">
            <label class="form-check-label" for="gridCheck1">
             Relese
            </label>
          </div>
        </div>
        <div class="col-sm-5">
           <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1">
            <label class="form-check-label" for="gridCheck1">
             New Booking
            </label>
          </div>
        </div>
      </div>  
      <div class="form-group row">
        <div class="col-sm-2">Availability</div>
        <div class="col-sm-5">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1">
            <label class="form-check-label" for="gridCheck1">
             Under construction
            </label>
          </div>
        </div>
        <div class="col-sm-5">
           <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1">
            <label class="form-check-label" for="gridCheck1">
             Redy To Move
            </label>
          </div>
        </div>
      </div>
      <h3>Alert Preference</h3>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Alert Frequency</legend>
          <div class="col-sm-10">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
              <label class="form-check-label" for="inlineRadio1">Daily</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2">Weekly</label>
            </div>
             <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
              <label class="form-check-label" for="inlineRadio2">Twice a Month</label>
            </div>
             <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4">
              <label class="form-check-label" for="inlineRadio2">Monthly</label>
            </div>
          </div>
        </div>   
      </fieldset>
      <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Name Your Alert</label>
    <div class="col-sm-10">
      <input type="Text" class="form-control" id="input" placeholder="Property Alert">
    </div>
     </div> 
      <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="Text" class="form-control" id="input" placeholder="name">
    </div>
     </div> 
     <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="email">
    </div>
  </div>  
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Set My Email Alert</button>
    </div>
  </div>
    </form>
  </div>  
</template>