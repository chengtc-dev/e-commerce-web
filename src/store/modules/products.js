// store/modules/products.js
const state = {
    products: []
};

const mutations = {
    setProducts(state, products) {
        state.products = products;
    }
};

const actions = {
    async fetchProducts({ commit }) {
        const response = await fetch(import.meta.env.VITE_API_BASE_URL_PROD + '/products');
        const data = await response.json();
        commit('setProducts', data.content);
    }
};

const getters = {
    allProducts(state) {
        return state.products;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
