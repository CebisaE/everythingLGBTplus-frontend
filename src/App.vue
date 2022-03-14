<template>
<div id="nav">
 <Navbar/>
</div>
  <router-view/>
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
  text-align: center;
  color: #111;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bolder;
  font-size: 50px;
  color: #111;
}

#nav a.router-link-exact-active {
  color:#FF0000;
}
 /* #FFFF00 */
 /* #008000 */
 /* #800080 */
 /* #0000FF */
 /* #FF5D33 */
</style>
