<template >
 
    <div id="products">
 <div v-for="product in products" :key="product.id"> 
    <div class="card  row col-10 mt-5" v-if="products" > 
      <div class="col-sm-3">  
      <img class=' img-thumbnail' :src="product.img" width="96" height="200" alt="" />
        <div class="card-body text-center">
            <div class='cvp'>
                <h5 class="card-title font-weight-bold">{{product.title}}</h5>
                <p class="card-text">R{{product.price}}</p> 
                <router-link :to="{name:'ProductDetails', params: {id: product._id}}">
                    VIEW PRODUCT
                </router-link>
            </div>
        </div>
      </div>
    </div>
</div>
</div>
</template>
<script>
export default {
  props: ["product", "idx"],
  mounted() {
    console.log(this.product);
  },
  data() {
    return {
      img: "https://picsum.photos/300/?random=" + this.idx,
    };
  },
};
</script>
<style>
    
</style>