<template>
  <form autocomplete="off">
    <div class="form-group">
      <label>Your Name</label>
      <input class="form-control" type="text" />
      <i class="ti-user"></i>
    </div>
    <div class="form-group">
      <label>Your Last Name</label>
      <input class="form-control" type="text" />
      <i class="ti-user"></i>
    </div>
    <div class="form-group">
      <label>Your Email</label>
      <input class="form-control" type="email" />
      <i class="icon_mail_alt"></i>
    </div>
    <div class="form-group">
      <label>Your password</label>
      <input class="form-control" type="password" id="password1" />
      <i class="icon_lock_alt"></i>
    </div>
    <div class="form-group">
      <label>Confirm password</label>
      <input class="form-control" type="password" id="password2" />
      <i class="icon_lock_alt"></i>
    </div>
    <div id="pass-info" class="clearfix"></div>
    <a href="#0" class="btn_1 rounded full-width add_top_30">Register Now!</a>
    <div class="text-center add_top_10">
      Already have an acccount?
      <strong>
        <nuxt-link to="/login">Sign In</nuxt-link>
      </strong>
    </div>
  </form>
</template>

<script>
export default {
  layout: "login",
  head: {
    title: "Register",
    bodyAttrs: {
      id: "register_bg"
    },
  },
};
</script>
