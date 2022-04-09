<template>
   <h1 class="head" style="font-weight: bold;color:#FFFF00">DASHBOARD</h1>
  <div class="border"></div>
  <div class="container">
    <div class="content d-flex" style="width:100%; ">

      <div class="stock" style="width:50%;">
        <h1>Products</h1>
        <div v-for="product in products" :key="product.id">
          <div class="productTitle" > 
            <div class="name" style="color:#111;font-size:20px;">
              {{product.title}}
            </div>

          </div>
        </div>
      </div>
    <!-- //list of customers//   -->
    <div class="clients" style="width:50%;">
          <h1>Registered Customers</h1>
          <div v-for="customer in customers" :key="customer.id">
            <div class="client" > 
              <div class="client_content" style="font-weight: 400;color:#b18044">
                <div class="cname"> <h6 style="font-weight: bold;color:#111"> Name:</h6> {{customer.name}}</div>
                <div class="email"> <h6 style="font-weight: bold;color:#111"> Email:</h6> {{customer.email}}</div>
                <div class="crole"> <h6 style="font-weight: bold;color:#111"> Role:</h6> {{customer.roles}}</div>
                 <button @click="changeProductToEdit(product.title)" class="btn" id="edit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
              <button @click="changeproductToEdit(product.title)" class="btn" id="delete" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
              </div>
            </div>
        </div>
    </div>

    </div>
</template>
<script>
import axios from "axios";
export default {
    components: {},
   data(){
            return {
                customers:[],
                products:[],
                updatedCustomer:{
                  name:"",
                },
                customerToEdit: ''
                
            }
        },
    mounted() {
   this.$store.dispatch('getProducts')
   this.$store.dispatch('getCustomers')
  },
    computed: {
    currentCustomer() {
      return this.$store.state.auth.customer
    },
    products(){
      return this.$store.state.products
    },
    customers(){
      return this.$store.state.customers
    },
  },
    created(){
        console.log(this.currentCustomer)
        if(!this.currentCustomer || this.currentCustomer.roles !== "admin") {
            alert("Not allowed to be here")
            this.$router.push('/login')
        }
    },
}

</script>
<style>
.fas{
  background: transparent;
}
.fas:hover{
  color: #FF5D33;
}
.head{
    padding-top:100px;
    
}
.border{
    border-top: 1px solid;
    width: 100px;
    display:inline-flex;
    justify-content: center;
}
@media only screen and (max-width: 600px) {
 .content{
   display:flex;
   flex-direction: column;
   align-items: center;
 }
}
.productTitle{
  padding: 0.5em;
  margin-bottom: 20px;
  border:1px solid #0000FF;
  border-radius:7px;
  margin-right: 5px;
}
.client{
  padding: 0.5em;
  margin-bottom: 20px;
  border:1px solid #111;
  border-radius:7px;
  margin-right: 5px;
  height: auto;
}
.name{
  background: transparent;
  padding: 0.5em;
  
}
.client_content{
  background: transparent;
  padding: 0.5em;
  
}
.cname, h6{
  background: transparent;
}
.email{
   background: transparent;
}
.crole{
  background: transparent;
}

</style>