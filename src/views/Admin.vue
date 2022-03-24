<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{customer.name}}</h3>
    </header>
  </div>
</template>
<script>
import CustomerService from '../services/customer.service';
export default {
  name: 'Customer',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    fetch("https://everything-lgbt-plus.herokuapp.com/customer/")
      .then((res) => res.json())
       .then((data) => {
          console.log(data)
        this.products = data;
        this.filteredProducts = data;
      })
      .catch((err) => console.log(err));
  },
  }
</script>