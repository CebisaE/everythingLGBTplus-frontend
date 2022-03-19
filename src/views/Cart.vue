<template>
  <div class="container" style="padding: 30px">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <a
          v-for="product in cart"
          :key="product.id"
          href="#"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <img :src="product.imageUrl" alt height="60" width="60" />
          <p class="h4">{{ product.title }}</p>
          <div class="row">
            <div class="mr-2">
              <p>Unique Price</p>
              <p>${{ product.price }}</p>
            </div>
            <div class="mr-2">
              <p>Total Price</p>
              <p>${{ product.price * item.quantity }}</p>
            </div>
            <div>
              <p>Quantity</p>
              <p>{{ product.quantity }}</p>
            </div>
          </div>
        </a>
        <div
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <p class="h4">Total</p>
          <div>
            <p>Total Price</p>
            <p>${{ totalPrice }}</p>
          </div>
        </div>
         <button class="btn btn-danger" @click="deleteCart()">remove</button>
        <button
          @click="checkout()"
          type="button"
          class="btn btn-primary btn-lg btn-block mt-4"
        >Checkout</button>
      </div>
    </div>
  </div>
    <!-- <div v-if="page === 'cart'">
      <Cart v-on:removeItem="removeItem" :cart="cart" />
    </div> -->

    <!-- <div v-if="page === 'product'">
      <Products v-on:addToCart="addToCart" />
    </div> -->
</template>

<script>
// import Products from '../views/Product.vue';
// import Cart from '../views/Cart.vue';
export default {
  data() {
    return {
      page: 'movies',
      movies: [],
      cart: [],
    };
  },
  mounted() {
    fetch("https://everything-lgbt-plus.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        console.log(data, this.movies);
      })
  },
methods:{
   removeItem(product){
    this.cart.splice(this.cart.indexOf(product),1);
  },
  addToCart(product){
    this.cart.push(product);
  },
  navigateTo(page){
    this.page = page;
  },
// SORT BY CATEGORY
 sortCategory() {
  let category = document.querySelector("#sortCategory").value;
  if (category == "All") {
    return readProducts(product);
  }
  let foundProducts = products.filter((products) => {
    return product.category == category;
  });
  readProducts(foundProduct);
  console.log(foundProduct);
},
// SORT BY NAME
 sortName() {
  let direction = document.querySelector("#sortName").value;
  let sortedProduct = product.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedProduct.reverse();
  console.log(sortedProducts);
  readProducts([product]);
},
// SORT BY PRICE
 sortPrice() {
  let direction = document.querySelector("#sortPrice").value;
  let sortedProduct = Product.sort((a, b) => a.price - b.price);
  console.log(sortedProduct);
  if (direction == "descending") sortedProduct.reverse();
  readProducts(sortedProduct);
}

}
}
</script>
