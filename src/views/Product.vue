<template>

    <div id="sorting-bar">
      
      <button @click="ascending = !ascending" class="sort-button">
        <span v-if="ascending">ascending <i class="fa fa-sort-up"></i></span>
        <span v-else>descending <i class="fa fa-sort-down"></i></span>
      </button>
      
      <select name="sortBy" id="select" v-model="sortBy">
        <option value="alphabetically">Alphabetically</option>
        <option value="price">price</option>
      </select>
      
      <div class="search-wrapper">
        <input type="text" v-model="searchValue" placeholder="Search Event" id="search-input"/> 
        <i class="fa fa-search"></i>
      </div>
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
</template>

<script>
import addProductModal from "@/components/addProductModal.vue";
import editProductModal from "@/components/editProductModal.vue";

export default {
  data() {
    return {
      page: 'product',
      products: [],
      ascending: true,
      sortBy: 'alphabetically',
      searchValue: '',
    };
  },
  mounted() {
    fetch("https://everything-lgbt-plus.herokuapp.com/products/")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        console.log(data, this.products);
      });
  },
   components: { addProductModal, editProductModal},
methods:{
  navigateTo(page){
    this.page = page;
  },
},
  computed: {
    filteredProducts() {
      let tempProducts =this.products
      
      if(this.searchValue != '' && this.searchValue) {
        tempProducts = tempProducts.filter((item) => {
          return item.title.toLowerCase().includes(this.searchValue.toLowerCase()) || item.description.toLowerCase().includes(this.searchValue.toLowerCase())
        })
      }
      
      tempProducts = tempProducts.sort((a, b) => {
        if (this.sortBy == 'alphabetically') {
          let fa = a.title.toLowerCase(), fb = b.title.toLowerCase()

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1 
          }
          return 0
        }
      })
      
      if (!this.ascending) {
        tempProducts.reverse()
      }
      
      return tempProducts
    }
  }
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
</style>