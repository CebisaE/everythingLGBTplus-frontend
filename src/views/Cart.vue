<template>
  <div class="container" style="padding: 30px">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <a
          v-for="product in cart"
          :key="product.id"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <img :src="product.img" alt height="60" width="60" />
          <p class="h4">{{ product.title }}</p>
          <div class="row">
            <div class="mr-2">
              <p>Unique Price</p>
              <p>R{{ product.price }}</p>
            </div>
            <div class="mr-2">
              <p>Total Price</p>
              <p>R{{ price * quantity }}</p>
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
          @click="handlecheckout()"
          type="button"
          class="btn btn-primary btn-lg btn-block mt-4"
        >Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import Products from '../views/ProductDetails.vue';
// import Cart from '../views/Cart.vue';
export default {
  data() {
    return {
      page: 'cart',
      products: [],
      text: '',
      email: '',
      textarea: '',
      cart: JSON.parse(localStorage.getItem('cart'))

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
  components: {Products}
}

</script>
