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
  /* text-align: center; */
  color: #111;
  /* overflow-y: hidden; */
}



#nav a {
  font-weight: bolder;
  font-size: 30px;
  /* color: #111; */
}

#nav a.router-link-exact-active {
  color:#FF0000;
}

main{
  margin-top: 115px
}
 /* #FFFF00 */
 /* #008000 */
 /* #800080 */
 /* #0000FF */
 /* #FF5D33 */
</style>
