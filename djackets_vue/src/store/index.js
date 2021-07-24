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
        state.cart = JSON.parse(localStorage.getItem('cart'));
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    addToCart(state, item) {
      if (state.cart.items.length > 0) {
        const exists = state.cart.items.filter((i) => i.product.id === item.product.id);
        if (exists) {
          console.log(exists);
          exists[0].quantity = parseInt(exists[0].quantity, 10) + parseInt(item.quantity, 10);
        }
      } else {
        state.cart.items.push(item);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    setLoadingStatus(state, status) {
      state.isLoading = status;
    },
  },
  actions: {

  },
  modules: {

  },
});
