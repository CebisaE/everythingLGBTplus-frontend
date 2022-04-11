<template>
<div id="nav">
 <Navbar/>
</div>
  <main>

  <router-view/>
  </main>
<div id="footer">
  <Footer/>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/footer.vue"
export default {
  components: {
    Navbar,
    Footer
  }
}



</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #111; */
  background: url("https://images.unsplash.com/photo-1545231097-cbd796f1d95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  /* max-height: 100vh; */
}



#nav a {
  font-weight: bolder;
  font-size: 30px;
}

#nav a.router-link-exact-active {
  color:#FF0000;
}

main{
  margin-top: 115px
}
 /* #FFFF00 yellow */
 /* #008000 green*/
 /* #800080 purple*/
 /* #0000FF blue */
 /* #FF5D33 orange */
</style>
