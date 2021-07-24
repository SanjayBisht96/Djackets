import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false,
  },
  mutations: {
    intializeStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = localStorage.getItem('cart');
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    addToCart(state, item) {
      const exists = state.cart.items.filter((i) => i.product.id === item.product.id);
      if (exists) {
        exists[0].quantity = parseInt(exists[0].quantity, 10) + parseInt(item.quantity, 10);
      } else {
        state.cart.items.push(item);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
  actions: {

  },
  modules: {

  },
});
