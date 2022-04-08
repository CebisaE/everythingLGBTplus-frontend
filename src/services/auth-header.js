export default function authHeader() {
    let customer = JSON.parse(localStorage.getItem('customer'));
    if (customer && customer.accessToken) {
      return { Authorization: "Bearer " + customer.accessToken };
    } else {
      return {};
    }
  }

