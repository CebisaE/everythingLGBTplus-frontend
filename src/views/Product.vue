<template>
 <div class='container-fluid' v-for="product in products" :key="product.id">
    <div class="card mx-auto col-md-3 col-10 mt-5" v-if="products" > 
      <img class='mx-auto img-thumbnail' :src="product.img" width="96" height="100" alt="" />
        <div class="card-body text-center mx-auto">
            <div class='cvp'>
                <h5 class="card-title font-weight-bold">{{product.title}}</h5>
                <p class="card-text">{{product.price}}</p> <a href="#" class="btn details px-auto">view details</a><br /> 
                <a href="#" class="btn cart px-auto">ADD TO CART</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import addProductModal from "@/components/addProductModal.vue";
import editProductModal from "@/components/editProductModal.vue";
export default {
    name: "Products",
  components: {
    addProductModal,
    editProductModal,
  },
 data() {
     return{
        products: null
     } 
 },
mounted() {
    fetch(' https://everything-lgbt-plus.herokuapp.com/products')
    .then(res => res.json())
    .then(json=>{
        console.log(json);
        this.products =json;
    })
    .catch (err => console.log(err));
},
}
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