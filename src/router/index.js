import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Register from '@/views/Register.vue'
import Profile from '@/views/Profile.vue'
import Products from '@/views/Product.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import Cart from '@/views/Cart.vue'
// import CartItem from '@//CartItem.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  // {
  //   path: '/cartitem',
  //   name: 'CartItem',
  //   component: CartItem
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login','/register','/profile','/','/products','/cart','/contact','/about'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('customer');
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router