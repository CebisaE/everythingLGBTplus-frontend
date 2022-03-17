<template>
  <MDBNavbar light bg="white" expand="lg" container>
    <MDBNavbarBrand href="#"><img src="https://i.postimg.cc/nryxFKvr/rsz-1download.png" class="logo">
        Everything LGBT+</MDBNavbarBrand>
   <MDBNavbarToggler
      target="#navbarRightAlignExample"
      @click="collapse5 = !collapse5"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse5" id="navbarRightAlignExample">
      <MDBNavbarNav right class="mb-2 mb-lg-0">
    <MDBNavbarItem router-link to="/">
          Home
        </MDBNavbarItem>
      <MDBNavbarItem router-link :to="{name:'About'}">
          About
        </MDBNavbarItem>
        
        <MDBNavbarItem router-link :to="{name:'Login'}">
          Login
        </MDBNavbarItem>
     <MDBNavbarItem router-link :to="{name:'Register'}">
          Register
        </MDBNavbarItem>
         <MDBNavbarItem router-link v-if="currentCustomer" :to="{name:'Profile'}">
          Profile
        </MDBNavbarItem> 
        <MDBNavbarItem router-link :to="{name:'Products'}">
          Products
        </MDBNavbarItem>
        <MDBNavbarItem router-link v-if="currentCustomer" :to="{name:'Cart'}">
          Cart
        </MDBNavbarItem>
          <MDBNavbarItem router-link :to="{name:'Contact'}">
          Contact
        </MDBNavbarItem>
        <button class="btn" v-if="currentCustomer" @click="logOut">Logout</button>
    </MDBNavbarNav>
       </MDBCollapse>
  </MDBNavbar>
</template>

<script>
 import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from 'mdb-vue-ui-kit';
   import { ref } from 'vue';
export default {
 components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem
    },
    setup() {
      const collapse6 = ref(false);
      const dropdown9 = ref(false);
      return {
        collapse6,
        dropdown9
      }
    },
    methods:{
        toggleNav() {
            this.isActive = !this.isActive;
        },
        logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
    },
    computed: {
    currentCustomer() {
      return this.$store.state.auth.customer;
    },
   
  }
}
</script>

<style>
.logout{
    border-radius: 50%;
    color: #0000FF;

}
</style>