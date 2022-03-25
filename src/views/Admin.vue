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
    
  },
  }
</script>