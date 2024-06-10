import { createStore } from 'vuex';
import products from './modules/products';
import shoppingCart from './modules/shoppingCart.js';

const store = createStore({
    modules: {
        products,
        shoppingCart
    }
});

export default store;
