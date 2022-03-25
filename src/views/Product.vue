<template>
<div class="contained">
<div class="sortBar">
      <label>
        Sort Price:
        <select v-model="price" @change="sortPrice(price)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <label>
        Sort Name:
        <select v-model="name" @change="sortName(name)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
 
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
</div>
</template>

<script>
import addProductModal from "@/components/addProductModal.vue";
import editProductModal from "@/components/editProductModal.vue";

export default {
  props: ["product", "idx"],
  data() {
    return {
      page: 'product',
      ascending: true,
      sortBy: 'alphabetically',
      searchValue: '',
       product: null,
      filteredProducts: null,
      price: "",
      name: "",
      category: "",
    };
  },
  mounted() {
   this.$store.dispatch('getProducts')
   this.$store.dispatch('filteredproducts')
  },
  computed:{
    products(){
      return this.$store.state.products
    },
    filteredproducts(){
      return this.$store.state.filteredproducts
    },
  },

   components: { addProductModal, editProductModal},
methods:{
  navigateTo(page){
    this.page = page;
  },
   sortPrice(dir) {
      this.$store.commit('sortPrice', dir)
    },
    sortName(dir){
      this.$store.commit('sortName', dir)
    }
},
  
}

</script>

<style>
 a {
    color: #4fc08d;
  }
  
  h2 {
    margin-top: 0;
  }

  button,
  select,
  input {
    color: #4fc08d;
    background: none;
    border: solid 1px;
    border-radius: 2em;
    font: inherit;
    padding: 0.75em 2em;
    cursor: pointer;
  }

  #sorting-bar {
    margin: 2rem 0;
      }
    .search-wrapper {
      display: inline-flex;
      align-items: center;
      position: relative;
          }
      .fa-search {
        position: absolute;
        right: 1rem;
        color: #4fc08d;
      }


  
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
#products{
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
}
.card {
    width: fit-content
}

.card-body {
    width: fit-content;
    justify-content:center;
}

.btn {
    border-radius: 0
}

.img-thumbnail {
    border: none;
    width: 50%;
    height: 50%
}

.card {
    box-shadow: 0 20px 40px rgba(0, 0, 0, .2);
    border-radius: 5px;
    padding-bottom: 10px
}
.sortBar {
  padding: 20px;
  margin-top: 10%;
}
</style>