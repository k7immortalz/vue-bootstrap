<template>
  <div class="container-fluid">
    <form @submit.prevent="login()">
      <div class="access_social">
        <a href="#0" class="social_bt facebook">Login with Facebook</a>
        <a href="#0" class="social_bt google">Login with Google</a>
      </div>
      <div class="divider">
        <span>Or</span>
      </div>
      <div
        class="form-group"
        :class="{ 'form-group--error mb-0': $v.formBody.email.$error }"
      >
        <label>Email</label>
        <input
          type="email"
          class="form-control"
          v-model.trim="$v.formBody.email.$model"
          id="email"
          placeholder="Enter Email address"
        />
      </div>
      <p class="v-error" v-if="$v.$error">
        <span v-if="!$v.formBody.email.required"> Email is required </span>
        <span v-if="!$v.formBody.email.email"> Email address is invalid </span>
      </p>
      <div
        class="form-group"
        :class="{ 'form-group--error mb-0': $v.formBody.password.$error }"
      >
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          v-model.trim="$v.formBody.password.$model"
          id="password"
          placeholder="Enter Password"
        />
      </div>
      <p class="v-error" v-if="$v.$error">
        <span v-if="!$v.formBody.password.required">
          Password is required
        </span>
        <span v-if="!$v.formBody.password.minLength">
          Password must be aleast 4 characters
        </span>
      </p>
      <div class="clearfix add_bottom_30">
        <div class="checkboxes float-left">
          <label class="container_check">
            Remember me
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="float-right mt-1">
          <a id="forgot" href="javascript:void(0);">Forgot Password?</a>
        </div>
      </div>
      <button type="submit" class="btn_1 rounded full-width">
        Login to PropertyCare
      </button>
      <div class="text-center add_top_10">
        New to PropertyCare?
        <strong>
          <nuxt-link to="/register"
            ><a @click="userLoggedIn()"> Sign Up</a></nuxt-link
          >
        </strong>
      </div>
    </form>
  </div>
</template>
<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      formBody: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    formBody: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(4)
      },
    },
  },
  methods: {
    userLoggedIn() {
      $("#signIn").toggle();
    },
    login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const credentails = {
          email: "demo@gmail.com",
          password: "demo",
        };
        if (
          credentails.email === this.formBody.email &&
          credentails.password === this.formBody.password
        ) {
          localStorage.setItem("user", JSON.stringify(credentails));
          this.$emit("user-logged", credentails);
        } else {
          alert("Invalid Credentials");
        }
      }
    },
  },
};
</script>

<style>
.v-error {
  margin-bottom: 10px;
  color: red;
  font-size: 12px;
}
.mb-0 {
  margin-bottom: 0px;
}
</style>
