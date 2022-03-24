import { createStore } from "vuex";
import { auth } from "./auth.module";
const store = createStore({
  state:{
  products: [],
  },
  mutations:{
    setProducts(state,products){
      state.products = products
    }
  },
  actions:{
  
  },
  modules: {
    auth,
  },
});
export default store;