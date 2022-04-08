import { createStore } from "vuex";
import { auth } from "./auth-module";
const store = createStore({
  state:{
    products: [],
    filteredproducts:[],
    customers:[]
  },
  mutations:{
    setProducts(state,products){
      state.products = products
    },
    setCustomer(state,customers){
    state.customers = customers
    },
    setfilteredproducts(state,filteredproducts){
      state.filteredproducts = filteredproducts
    },
    sortPrice(state, dir){
      console.log(state.filteredproducts)
      state.filteredproducts = state.filteredproducts.sort(
        (a, b) => a.price- b.price
      );
      if (dir == "desc") state.filteredproducts.reverse();
    },
    sortName(state, dir) {
      state.filteredproducts = state.filteredproducts.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
          
    });
    if (dir == "desc") state.filteredproducts.reverse();
    }
  
  },
  actions:{
    getProducts({commit}){
      fetch("https://everything-lgbt-plus.herokuapp.com/products/")
      .then((res) => res.json())
       .then((data) => {
          console.log(data)
          commit("setProducts", data)
          commit("setfilteredproducts",data)
      })
      .catch((err) => console.log(err));
    },
    getCustomers({commit}){
    fetch("https://everything-lgbt-plus.herokuapp.com/customers")
      .then((res) => res.json())
       .then((data) => {
          console.log(data)
          commit("setCustomer", data)
      })
      .catch((err) => console.log(err));
    }
  },
  modules: {
    auth
  },
});
export default store;