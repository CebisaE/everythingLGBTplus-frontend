<template>
 <div class='container-fluid' v-for="product in products" :key="product.id"> 
    <div class="card mx-auto col-md-3 col-10 mt-5" v-if="products" > 
      <img class='mx-auto img-thumbnail' :src="product.img" width="96" height="100" alt="" />
        <div class="card-body text-center mx-auto">
            <div class='cvp'>
                <h5 class="card-title font-weight-bold">{{product.title}}</h5>
                <p class="card-text">{{product.price}}</p> 
                <router-link :to="{name:'ProductDetails', params: {id: product._id}}">
                    VIEW PRODUCT
                </router-link>
            </div>
        </div>
    </div>
</div>
<!-- <header>
      {{cart.length}} in cart
      <button v-on:click="navigateTo('cart')" class="btn btn-outline-danger w-100">view cart</button>
      <button v-on:click="navigateTo('products')" class="btn btn-outline-danger w-100">view products</button>
    </header> -->


    <!-- <div v-if="page === 'cart'">
   <Cart v-on:removeItem="removeItem" :cart="cart" />
    </div> -->

    <!-- <div v-if="page === 'product'">
    <Product v-on:addToCart="addToCart" />
    </div> -->
</template>

<script>
import addProductModal from "@/components/addProductModal.vue";
import editProductModal from "@/components/editProductModal.vue";
import Cart from '../Cart.vue';
export default {
  data() {
    return {
      page: 'product',
      products: [],
      cart: [],
    };
  },
  mounted() {
    fetch("https://everything-lgbt-plus.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        console.log(data, this.products);
      });
  },
   components: { Cart, addProductModal, editProductModal},
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
  let foundProducts = product.filter((product) => {
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
  console.log(sortedProduct);
  readProducts(product);
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

  };
</script>

<style>
.details {
    border: 1.5px solid grey;
    color: #212121;
    width: 100%;
    height: auto;
    box-shadow: 0px 0px 10px #212121
}

.cart {
    background-color: #212121;
    color: white;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 900;
    width: 100%;
    height: 39px;
    padding-top: 9px;
    box-shadow: 0px 5px 10px #212121
}

.card {
    width: fit-content
}

.card-body {
    width: fit-content
}

.btn {
    border-radius: 0
}

.img-thumbnail {
    border: none
}

.card {
    box-shadow: 0 20px 40px rgba(0, 0, 0, .2);
    border-radius: 5px;
    padding-bottom: 10px
}
</style>