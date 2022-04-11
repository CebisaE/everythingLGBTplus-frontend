<template>
  <h1>this is the product details page</h1>
<section class="product">
    <div class="card" style="width: 18rem;">
  <img :src="product.img" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.title}}</h5>
    <p class="card-text">{{product.description}}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">R{{product.price}}</li>
    <li class="list-group-item">ID:{{product._id}}</li>
  </ul>
   <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">M</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">L</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">XL</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">L</label>
            </div>
            <h3>Colors</h3>
            <form action="color">
              <select name="Color" id="Color">
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
                <option value="Brown">Brown</option>
              </select>
            </form>
            <div class="card-body">
    <button @click="AddToCart()" class="btn btn-outline-danger w-100">Add To Cart</button>
  </div>
          </div>
  
  <div v-if="page === 'product'">
    <ProductDetails v-on:addToCart="addToCart" />
    </div>
<!-- </div> -->
</section>
</template>

<script>
import Cart from '../views/Cart.vue';
import ProductDetails from '../views/ProductDetails.vue';
export default {
data(){
    return{
        id: this.$route.params.id,
        product: {},
       cart: JSON.parse(localStorage.getItem('cart')) || []
    }
},
computed: {Cart},
mounted() {
    fetch("https://everything-lgbt-plus.herokuapp.com/products/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
      });
},
   components: {Cart},
methods:{
   removeItem(product){
    this.cart.splice(this.cart.indexOf(product),1);
  },
 AddToCart(){
  this.cart.push(this.product);
  console.log(this.cart)
  localStorage.setItem('cart', JSON.stringify(this.cart));
  localStorage.getItem('cart');
  console.log(console.log(JSON.parse(localStorage.getItem('cart'))));
  }
 }
}
</script>

<style>
.product{
  align-items: center;
}
</style>