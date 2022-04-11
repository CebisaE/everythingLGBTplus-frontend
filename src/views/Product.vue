<template>
<div class="container">
  <h1>WELCOME TO THE THE PRODUCTS SECTION</h1>
<div class="sortBar">
      <label class="sort">
        Sort Price:
        <select v-model="price" @change="sortPrice(price)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <label class="sort">
        Sort Name:
        <select v-model="name" @change="sortName(name)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
       <label>
        <input type="search" placeholder="Search" aria-label="Search">
        <button type="submit">Search</button>
      </label>
    </div>
    
</div>
 <div id="products">
   <div class="container">
<div v-for="product in products" :key="product.id"> 
    <div class="card" style="width: 18rem;" v-if="products" >
  <img :src="product.img" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.title}}</h5>
    <p class="card-text">R{{product.price}}</p>
    <a><router-link :to="{name:'ProductDetails', params: {id: product._id}}">
                    VIEW PRODUCT
    </router-link></a>
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

<style scoped>
 a {
    color: #4fc08d;
  }
  
  h2 {
    margin-top: 0;
  }

  button,
  select,
  input {
    color: #fff;
    background: none;
    border: solid 9px;
    border-radius: 2em;
    font: inherit;
    font-size: 20px;
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

.container{
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: space-evenly;
  gap:10px
}

.btn {
    border-radius: 0
}

.img-thumbnail {
    border: none;
    width: 50%;
    height: 10%
}

.card {
    box-shadow: 0 20px 40px rgba(0, 0, 0, .2);
    border-radius: 5px;
}
.sortBar {
  padding: 20px;
}
.sort{
  color: #fff;
}
</style>