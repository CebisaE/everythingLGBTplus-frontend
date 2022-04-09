<template>
  <nav class="navbar navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand">Everything LGBT+</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="https://i.postimg.cc/nryxFKvr/rsz-1download.png" class="logo">Everything LGBT+</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'About'}">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"  id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Join Us
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><router-link class="dropdown-item" :to="{name:'Login'}">Login</router-link></li>
              <li><router-link class="dropdown-item" :to="{name:'Register'}">Register</router-link></li>
              <li><router-link class="dropdown-item" :to="{name:'Dashboard'}">Dashboard</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  :to="{name:'Products'}">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  v-if="currentCustomer" :to="{name:'Cart'}">Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  :to="{name:'Profile'}">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  :to="{name:'Contact'}">Contact</router-link>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
</template>

<script>
   import { ref } from 'vue';
export default {
//  computed: {
//     currentCustomer() {
//       return this.$store.state.auth.customer;
//     },
   
//   },
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

    },
   
}
</script>

<style>
</style>