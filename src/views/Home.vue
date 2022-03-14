<template>
<div>
        <div class="header-blue">
            <div class="container hero">
                <div class="row">
                    <div class="col-12 col-lg-6 col-xl-5 offset-xl-1 home-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Debitis soluta voluptatibus veniam officia ipsum quis ratione blanditiis ullam natus ipsa.</p>
                        <a href="/about">
                        <button class="btn btn-light btn-lg action-button" type="button">Get to know us</button>
                        </a>
                        </div>
                    <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-lg-block phone-holder">
                      <img src="https://i.postimg.cc/pX5DC3B8/2022.png" class="home-logo">
                </div>
            </div>
        </div>
        </div>
        </div>
<!-- <div class="container">
  <div class=home-text>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Debitis soluta voluptatibus veniam officia ipsum quis ratione blanditiis ullam natus ipsa.</p>
     <button class="btns"  href="/about">Get to know us</button>
  </div>
  <div class="home-img">
  <img src="https://i.postimg.cc/pX5DC3B8/2022.png" class="home-logo">
 </div>
  </div> -->
</template>

<script>
export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style>
.row {
  display:flex;
flex-wrap: wrap;
flex-direction: row;
justify-content:right;
}
.home-logo{
padding: 60px;
}
.home-text{
align-items: center;
}
</style>