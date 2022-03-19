<template>
  <h1>this is the product details page</h1>
 <div class="card" style="width: 18rem;">
  <img :src="product.img" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.title}}</h5>
    <p>PRODUCT ID:{{product._id}}</p>
    <p class="card-text">{{product.description}}</p>
    <p class="card-text">{{product.price}}</p>
    <a href="#" class="btn btn-primary">ADD TO CART</a>
  </div>
</div>
</template>

<script>
export default {
data(){
    return{
        id: this.$route.params.id,
        product: {}
    }
},
mounted() {
    fetch("https://everything-lgbt-plus.herokuapp.com/products/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
        console.log(this.product);
      });
}
}
</script>

<style>

</style>