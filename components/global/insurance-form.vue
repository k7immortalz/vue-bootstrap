<template>
  <form method="post" id="contactform" autocomplete="off">
    <div class="row">
      <div class="col-md-12 mt-4">
                <div class="text-center">
          <!-- <p><strong>Leave your house buying worries to us!</strong></p> -->
          <p>Insurance Enquiry</p>


 

    <span class="add_top_30">
		<b-button id="show-btn" variant="success" @click="$bvModal.show('bv-modal-owned')">For Owned</b-button>
  		<b-button id="show-btn" variant="success" @click="$bvModal.show('bv-modal-owned')">For Rented</b-button>
  <b-modal id="bv-modal-owned" class="mt-10" centered hide-footer title="Insurance"> 
    <div class="d-block text-center">
       <InsuranceEnquiryForm />
    </div>
  </b-modal>

<!-- 
      <nuxt-link to="" data-toggle="modal" data-target="#ownedModal" class="btn_1">For Owned </nuxt-link>
            <nuxt-link to="" data-toggle="modal" data-target="#rentedModal" class="btn_1">For Rented</nuxt-link>

  
    					
              


              <div class="menu_fixed modal fade mt-5" id="ownedModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						  <div class="modal-dialog modal-dialog-centered" role="document">
						    <div class="modal-content">
						      <div class="modal-header">
						        <h5 class="modal-title" id="exampleModalLabel">Insurance For Owned Property</h5>
						        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <div class="modal-body">
                   <InsuranceEnquiryForm />
						      </div>
						    </div>
						  </div>
						</div>
                                      <div class="menu_fixed modal fade mt-5" id="rentedModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						  <div class="modal-dialog modal-dialog-centered" role="document">
						    <div class="modal-content">
						      <div class="modal-header">
						        <h5 class="modal-title" id="exampleModalLabel">Insurance For Rented Property</h5>
						        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <div class="modal-body">
                   <InsuranceEnquiryForm />
						      </div>
						    </div>
						  </div>
						</div> -->
                          </span>
          
    </div>
            </div>
      </div>
  </form>
</template>
