<template>
<div id="home">
<div class="container">
  <h1 id="title" class="margin-top">Everything LGBT+</h1>
  <h2 class="less-margin">Where <span class="highlight">Everything</span>  Is Pride <span class="highlight">All day everyday</span>. </h2>
  <p id="desc">Everything LGBT+ clothing store is a shop that allows you to Embrace who you are and look good while at it.</p>
  <a href="/about" class="btn">
  <button class="button-h" type="button">About Us</button>
  </a>
</div>
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
#home {
  height: 40rem;
}
/* #container {
  height: 600px;
  width: 900px;
  margin: 7% auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(1, 1, 1, 0.5);
} */

.button-h {
  height: 10%;
  padding:15px;
  border-radius: 90%;
  color: #111;
}

/* text-styling */
h1 {
  font-family: "Work Sans", sans-serif;
  color: #fff;
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
  /* position: absolute; */
  /* top: 77%; */
  padding: 2rem;
  color:#fff;
  font-size:25px;
  font-weight: bold;
}


/* .margin-top {
  margin-top: 100px;
} */

.less-margin {
  margin-top: -35px;
  font-weight:bolder;
  font-size:30px;
  gap:10px;
  padding-top: 20px;
  color: #fff;
}
/* .less-margins {
  font-weight:bolder;
  font-size:30px;
  color: #008000;
} */

</style>