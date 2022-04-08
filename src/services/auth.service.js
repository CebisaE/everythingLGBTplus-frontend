import axios from "axios";
const API_URL = "https://everything-lgbt-plus.herokuapp.com/customer/";

class AuthService {
  //  login(customer) {
  //   const response = axios.post(`${API_URL} + signin`, {
  //     email: customer.email,
  //     password: customer.password,
  //   });
  //   if (response.data.accessToken) {
  //     localStorage.setItem("customer", JSON.stringify(response.data));
  //   }
  //   console.log(response)
  //   return response.data;
  // }
  // logout() {
  //   localStorage.removeItem("customer");
  // }
  // register(customer) {
  //   return axios.post(`${API_URL} + signup`, {
  //     name: customer.name,
  //     email:customer.email,
  //     phone_number: customer.phone_number,
  //     password: customer.password,
  //   });
  // }
  login(customer) {
    return  axios.post(API_URL + 'signin', {
      email: customer.email,
      password: customer.password,
    })
    .then(response => {
      if(response.data.accessToken) {
        localStorage.setItem('customer' , JSON.stringify(response.data))
      }
      return response.data
    })
  }
  logout() {
    localStorage.removeItem('customer');
  }
  register(customer) {
    return axios.post(API_URL + 'signup', {
      name: customer.name,
      email: customer.email,
      phone_number: customer.phone_number,
      password: customer.password

    });
  }
}

export default new AuthService();