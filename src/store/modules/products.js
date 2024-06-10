export default {
    namespaced: true,
    state: () => ({
        products: [],
        quickViewVisible: false,
        quickViewProduct: {}
    }),
    mutations: {
        getProducts(state, products) {
            state.products = products
        },
        showQuickView(state, payload) {
            state.quickViewVisible = true
            state.quickViewProduct = payload
        },
        closeQuickView(state) {
            state.quickViewVisible = false
        }
    },
    actions: {
        async getProducts({ commit }) {
            const response = await fetch(import.meta.env.VITE_API_BASE_URL_PROD + '/products');
            const data = await response.json();
            commit('getProducts', data.content);
        },
        showQuickView({ commit }, payload) {
            commit('showQuickView', payload)
        },
        closeQuickView({ commit }) {
            commit('closeQuickView')
        }
    },
    getters: {
        products: state => state.products,
        getQuickViewVisible: state => state.quickViewVisible,
        getQuickViewProduct: state => state.quickViewProduct
    }
}