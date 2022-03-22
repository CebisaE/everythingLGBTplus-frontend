<template>
<div id="container">
  <div id="background"></div>

  <div class="section">
   <h1 id="title" class="margin-top">Everything LGBT+</h1>
   <h2 class="less-margin">Where <span class="highlight">Everything</span>  Is </h2><h2>Pride <span class="highlight">All day everyday</span>.</h2>

  <h1 class="look">shop your look</h1>
  <div class="alta">
    <img id="alta" src="">
    <div class="button yellow" id="yellow" onclick="yellowColor()"></div>
    <div class="button green" id="green" onclick="greenColor()"></div>
    <div class="button purple" id="purple" onclick="purpleColor()"></div>
    <div class="button blue" id="blue" onclick="blueColor()"></div>
   </div>
 </div>
  <p id="desc">Everything LGBT+ clothing store is a shop that allows you to imbrace who you are <br>and look good while at it.</p>
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
@import url("https://fonts.googleapis.com/css?family=Work+Sans:800|Open+Sans");
body {
  background: #EDEDED;
}

a {
  cursor: pointer;
}

#container {
  height: 600px;
  width: 900px;
  margin: 15% auto;
  position: relative;
  box-shadow: 4px 10px 20px rgba(55, 52, 73, 0.4);
}

#background {
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 50%;
  height: 100%;
  background: #FF7A6C;
  -webkit-clip-path: polygon(52% 0, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(52% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: -1;
  transition: all 0.8s ease;
}

/* navigation */
nav {
  display: block;
  float: right;
  margin: 1em;
  margin-top: 2.4em;
  font-family: "Open Sans", sans-serif;
  font-size: 11px;
}

.navbar a {
  padding: 10px;
  margin-left: 10px;
  border-radius: 25px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #373449;
}
.navbar a:hover {
  background: #FFDC7B;
  padding: 10px;
  border-radius: 25px;
  transition: all 0.5s ease;
}

.navbar a:last-child {
  background: #373449;
  color: #FFDC7B;
  padding: 10px;
  border-radius: 25px;
}
.navbar a:last-child:hover {
  color: #373449;
  background: #FFDC7B;
  transition: all 0.5s ease;
}

/* sections */
.section {
  position: absolute;
  margin-top: 5%;
  margin-left: 5%;
  width: 100%;
  height: 80%;
}

.button {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
.button:hover {
  transform: scale(1.1);
  transition: all 1s ease;
}

.yellow {
  background: #FFFF00;
}

.green {
  background: #008000;
  left: 35px;
}

.purple {
  background: #800080;
  left: 70px;
}

.blue {
  background: #0000FF;
  left: 105px;
}

/* text-styling */
h1 {
  font-family: "Work Sans", sans-serif;
  color: #FF7A6C;
  text-transform: uppercase;
  font-size: 3.5em;
  text-shadow: 2px 1px 0px rgba(55, 52, 73, 0.9);
}

#title {
  transition: all 1s ease;
}

h2 {
  font-size: 1.2em;
  text-transform: uppercase;
  margin-top: -20px;
  letter-spacing: 3px;
  font-family: "Open Sans", sans-serif;
  color: #373449;
}

p {
  font-family: "Open Sans", sans-serif;
  font-size: 0.8em;
  letter-spacing: 2px;
  display: inline-block;
  padding: 0 45px;
  text-transform: uppercase;
  color: #373449;
}

#desc {
  position: absolute;
  top: 77%;
}

.look {
  position: absolute;
  color: #EDEDED;
  opacity: 0.4;
  right: 5px;
  top: 185px;
  font-size: 2.3em;
  white-space: nowrap;
  transform: rotate(90deg);
}

.highlight {
  background-color: #FF0000;
}

.margin-top {
  margin-top: 135px;
}

.less-margin {
  margin-top: -35px;
  font-weight:bolder;
}

/* image */
.alta img {
  height: 370px;
  position: absolute;
  top: 50px;
  right: 140px;
  z-index: -1;
}

#alta img {
  transition: all 1s ease;
}

</style>