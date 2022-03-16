<template>
<div class="containers">
  <div class="column">
  <div id="register">
    <Form @submit="handleRegister" >
      <div v-if="!successful">
      <div class="form-group">
        <label for="name"></label>
        <Field name="name" placeholder="name" class="form-control"/>
          <ErrorMessage name="name" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="email"></label>
        <Field name="email"  placeholder="email address" class="form-control"
        type="email"/>
          <ErrorMessage name="email" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="phone_number"></label>
        <Field name="phone_number"  class="form-control"
        placeholder="phone number" type="number"/>
          <ErrorMessage name="phone_number" class="error-feedback" />
      </div>
      
      <div class="form-group">
        <label for="password"></label>
        <Field name="password"  class="form-control"
        placeholder="password" type="password"/>
          <ErrorMessage name="password" class="error-feedback" />
      </div>
    <button class="btn btn-primary btn-" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Register</span>
          </button>
          <br>
            <p style="color: black;" class="login">Already a member? <a href="/login">Login to your account</a></p>
            </div>
    </Form>
     <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
    </div>
</div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
     phone_number: yup
        .string()
        .required("Password is required!")
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(customer) {
      console.log("we made it")
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", customer).then(
        (data) => {
          console.log(data)
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          console.log(error.message)
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>

<style>
#register{
  border: 5px solid black;
  width: 35%;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
}
#register input {
  margin: 20px;
  border: none;
  border-bottom: 2px solid black;
  background-color:transparent
}
.login a{
  color: red;
  transition: 0.3s;
}
.login a:hover {
  color: rgb(73, 73, 73);
  transition: 0.3s;
}
.form-control{
  color:#fff;
  font-size: 20px;
}
</style>