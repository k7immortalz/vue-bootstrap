<template>
               <form autocomplete="off">
            <div class="form-group">
          <center><h3>Role for {{ job.title }} </h3></center><br>
            </div>
        <div class="form-row">

    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="First Name" v-model="first_name">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name" v-model="last_name">
    </div>

    <div class="form-group col-md-6">
      <label for="inputEmail4">Mobile</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="0987654321" v-model="mobile">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Email ID</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="mail@email.com" v-model="email">
    </div>

    <div class="form-group col-md-6">
      <label for="inputEmail4">Qualification</label>
            <select class="form-control" v-model="qualification">
              <option>Select</option>
                     <option
            v-for="item in qualificat"
            :key="item.value"
            v-bind:value="item.value"
          >
            {{ item.name }}
          </option>
      </select>
    </div>
        <div class="form-group col-md-6">
      <label for="inputEmail4">Year of Passedout</label>
            <select class="form-control">
              <option>Select</option>
        <option> 2020</option>
         <option> 2019</option>
          <option>2018</option>
           <option>2017</option> <option>2016</option> <option>2015</option> <option>2014</option>
      </select>
    </div>
        <div class="form-group col-md-6">
      <label for="inputPassword4">Current Designation</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Software Developer" v-model="designation">
    </div>
            <div class="form-group col-md-6">
      <label for="inputPassword4">Current CTC</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Software Developer" v-model="ctc">
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Experience</label>
            <select class="form-control" v-model="experience">
              <option>Select</option>
                        <option
            v-for="item in experien"
            :key="item.value"
            v-bind:value="item.value"
          >
            {{ item.name }}
          </option>

      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Location <i class="icon_pin_alt"></i></label>
            <input type="number" class="form-control"  placeholder=""  v-model="location">
 </div>
            <div class="form-group col-md-6">
      <label for="inputPassword4">KeySkills</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="C, C++, Java, Python"  v-model="keyskills">
    </div>

  <div class="form-group col-md-6">
    <label for="exampleFormControlFile1">Upload CV</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>

         <div class="form-group col-md-12">
  <textarea class="form-control" placeholder="Tell about Yourself"  aria-label="With textarea"  v-model="desc"></textarea>
   </div>

       </div>

     <center>
               <nuxt-link to="" class="btn btn-success btn-lg btn-block"><a @click="insert_function()">Apply</a></nuxt-link>
                 <b-button variant="danger" block @click="$bvModal.hide('bv-modal-career')">Cancel</b-button>

     </center>

    </form>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
     qualificat: [
        { name: "BE", value: "BE" },
        { name: "BTech", value: "BTech" },
                { name: "MCA", value: "MCA" },
                        { name: "Bsc", value: "Bsc" },
      ],
      experien: [
        { name: "Fresher", value: "Fresher" },
        { name: "1 Yrs", value: "1 Yrs" },
            { name: "2 Yrs", value: "2 Yrs" },
                { name: "3 Yrs", value: "3 Yrs" },
                 { name: "3+ Yrs", value: "3+ Yrs" },
      ],
      job: this.item || null,
      title: this.item.title,
      funtional_area: this.item.functional_area,
      first_name:"",
      last_name:"",
      mobile:"",
      email:"",
      designation:"",
      ctc:"",
      location:"",
      keyskills:"",
      desc:"",
      qualification:"Select",
      yop:"Select",
      experience:"Select",
      data:""
    };
  },
    methods: {
   async insert_function() {

      const title = this.title;
      const funtional_area = this.funtional_area;
      const first_name = this.first_name;
      const last_name = this.last_name;
      const mobile = this.mobile;
      const email = this.email;
      const designation = this.designation;
      const ctc = this.ctc;
      const location = this.location;
      const keyskills = this.keyskills;
     const desc = this.desc;
      const qualification = this.qualification;
      const experience = this.experience;



      const res = await this.$apollo.mutate({
        mutation: require("@/graphQl/queries/careers-form.gql"),
        variables: {
          title,
		  first_name,
          last_name,
		  mobile,
          email,
		  designation,
          ctc,
		  location,
          keyskills,
          qualification,
          experience,
          desc,
          funtional_area

        },
      });
      if(res){
        alert("Inserted Success")
        console.log(res)
     
      }

    },
//       processFile(event) {
//     this.data = event.target.files[0]
//   }
  }
};
</script>