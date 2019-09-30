<template>
  <div class="pa-5 my-5">
    <h1 class="headline">Sign Up</h1>
    <ValidationObserver v-slot="{ passes }">
      <b-form class="col-md-6" @submit.prevent="passes(onSubmit)" @reset.prevent="onReset">
        <ValidationProvider rules="required|email" name="Email" v-slot="{ valid, errors }">
          <b-form-group
            label="Email address:"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              type="email"
              v-model="form.email"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Enter email"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          rules="required"
          name="Password"
          vid="password"
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="Password:"
            description="We'll never share your password with anyone else."
          >
            <b-form-input
              type="password"
              v-model="form.password"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Enter password"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          rules="required|confirmed:password"
          name="Password confirmation"
          v-slot="{ valid, errors }"
        >
          <b-form-group label="Confirm Password:" label-for="exampleInput1">
            <b-form-input
              type="password"
              v-model="form.confirmation"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Confirm Password"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>
        <b-button type="submit" class="mr-3" variant="outline-success">Submit</b-button>
        <b-button type="reset" variant="outline-primary">Reset</b-button>
      </b-form>
    </ValidationObserver>
  </div>
</template>
          
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "SignUp",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        confirmation: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("Form submitted yay!");
    },
    resetForm() {
      this.form.email = "";
      this.form.password = "";
      this.form.confirmation = "";
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }
  }
};
</script>