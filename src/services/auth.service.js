import axios from 'axios';
const API_URL = 'https:/everything-lgbt-plus.herokuapp.com/customer/';
class AuthService {
  login(customer) {
    return axios
      .patch(API_URL + 'signin', {
        name: customer.name,
        password: customer.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('customer', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('customer');
  }
  register(customer) {
    console.log(customer)
    console.log(API_URL + 'signup')
    return axios.post(API_URL + 'signup', {
      name: customer.name,
      email: customer.email,
      phone_number: customer.phone_number,
      password: customer.password
    });

  }
}
export default new AuthService();