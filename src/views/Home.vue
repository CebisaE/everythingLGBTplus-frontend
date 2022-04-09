<template>
<div id="container">
  <div class="section">
  <h1 id="title" class="margin-top">Everything LGBT+</h1>
  <h2 class="less-margin">Where <span class="highlight">Everything</span>  Is </h2>
  <h2 class="less-margins">Pride <span class="highlight">All day everyday</span>.</h2>
  <a href="/about">
  <button class="button" type="button">About Us</button>
  </a>
  <h1 class="look">shop your look</h1>
</div>
  <p id="desc">Everything LGBT+ clothing store is a shop that allows you to imbrace who you are 
  <br>and look good while at it.</p>
</div>
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
a {
  cursor: pointer;
}

#container {
  background-color: #111;
  height: 600px;
  width: 900px;
  margin: 7% auto;
  position: relative;
  box-shadow: 4px 10px 20px rgba(55, 52, 73, 0.4);
}

#background {
  position: fixed;
  width: 50%;
  height: 100%;
}

/* sections */
.section {
  margin-top: 2%;
  margin-left: 5%;
  width: 90%;
  height: 80%;
  padding: 10px;
}

.button {
  height: 10%;
  border-radius: 90%;
  color: #FFFF00;
}

/* text-styling */
h1 {
  font-family: "Work Sans", sans-serif;
  color: #111;
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
  color: #111;
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
  color:#FF0000;
  font-size:15px;
  font-weight: bold;
}

.look {
  position: absolute;
  color:  #800080; 
  right: 5px;
  top: 185px;
  font-size: 2.3em;
  white-space: nowrap;
  transform: rotate(90deg);
}

.margin-top {
  margin-top: 135px;
  color:#800080;
}

.less-margin {
  margin-top: -35px;
  font-weight:bolder;
  font-size:30px;
  gap:10px;
}
.less-margins {
  /* margin-top: -25px; */
  font-weight:bolder;
  font-size:30px;
}

</style>