
  
<template>
  <MDBFooter
    bg="none"
    :text="['center', 'black']"
    style="background-color: #fff"
    
    class="footer"

  >
    <div
      class="footer-text"
    >
      © 2022 Copyright:
      <p class="text-black" 
        >Everything LGBT+</p> 
    </div>
  </MDBFooter>
</template>

<script>
  import { MDBFooter, MDBContainer, MDBBtn } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBFooter,
      MDBContainer,
      MDBBtn
    },
  };
</script>
<style>
.footer{
    padding-bottom: 0;
    position: fixed;
    bottom:15px;
    width: 100%;
}
.footer-text{
  font-size: 30px;
  font-weight: bold;
}
</style>