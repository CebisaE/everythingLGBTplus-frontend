<template>
    <div>
        <h1 class="dashboard">
        dashboard  
        </h1>
    </div>
</template>
<script>
export default {
    computed: {
    currentCustomer() {
      return this.$store.state.auth.customer;
    }
  },
    created(){
        console.log(this.currentCustomer)
        if(!this.currentCustomer || this.currentCustomer.roles !== "admin") {
            alert("Not allowed to be here")
            this.$router.push('/login')
        }
    }
}
</script>
<style>
    .dashboard{
        color: black;
    }
</style>