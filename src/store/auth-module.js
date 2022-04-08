import AuthService from '../services/auth.service';
const customer = JSON.parse(localStorage.getItem('customer'));
const initialState = customer
  ? { status: { loggedIn: true }, customer }
  : { status: { loggedIn: false }, customer: null };
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, customer) {
      return AuthService.login(customer).then(
        customer => {
          commit('loginSuccess', customer);
          return Promise.resolve(customer);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, customer) {
      return AuthService.register(customer).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, customer) {
      state.status.loggedIn = true;
      state.customer = customer;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.customer = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.customer = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};