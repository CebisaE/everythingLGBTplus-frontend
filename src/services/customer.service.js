import axios from 'axios';
import authHeader from './auth-header';
const API_URL = '';
class CustomerService {
  getUserBoard() {
    return axios.get(API_URL + 'customer', { headers: authHeader() });
  }
}
export default new CustomerService();