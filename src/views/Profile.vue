<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{current.name}}</strong> 
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{current.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{current.email}}
    </p>
        <p>
      <strong>Phone Number:</strong>
      {{current.phone_number}}
    </p>

  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentCustomer() {
      return this.$store.state.auth.customer;
    }
  },
  mounted() {
    if (!this.currentCustomer) {
      this.$router.push('/login');
    }
  }
};

</script>

<style>
h3{
  font-size:600px

}

</style>