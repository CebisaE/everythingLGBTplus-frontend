<template>

<p>this is the filter</p>

    
    <!-- <div id="user-list">
      <Products
        v-for="(product, idx) of filteredProducts"
        :key="idx"
        :product="product"
        :idx="idx"
      />
    </div> -->
</template>

<script>
export default {
  name: "App",
  components: {

  },
  data() {
    return {
     
    };
  },
  mounted() {
    fetch("https://everything-lgbt-plus.herokuapp.com/products/")
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
        this.products = data;
        this.filteredProducts = data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
   
  },
};
</script>
<style >


#user-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>