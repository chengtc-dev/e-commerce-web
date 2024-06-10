import { useToast } from 'vue-toastification'

const toast = useToast()

export default {
    namespaced: true,
    state: () => ({
        cartVisible: false,
        cart: [],
        subAmount: 0
    }),
    mutations: {
        toggleCart(state) {
            state.cartVisible = !state.cartVisible;
        },
        addToCart(state, payload) {
            const productIndex = state.cart.findIndex(item => item.sku === payload.sku);
            if (productIndex !== -1) {
                state.cart[productIndex].quantity++
            } else {
                payload.quantity = 1
                state.cart.push(payload)
            }
            state.subAmount += payload.price
            toast.success("Add to cart successful!")
        },
        removeFromCart(state, payload) {
            const productIndex = state.cart.findIndex(item => item.sku === payload.sku);
            if (productIndex !== -1) {
                const amount = state.cart[productIndex].price * state.cart[productIndex].quantity
                state.subAmount -= amount;
                state.cart.splice(productIndex, 1);
            }
            toast.warning("Product has been removed!")
        }
    },
    actions: {
        toggleCart({ commit }) {
            commit('toggleCart');
        },
        addToCart({ commit }, payload) {
            commit('addToCart', payload)
        },
        removeFromCart({ commit }, payload) {
            commit('removeFromCart', payload)
        }
    },
    getters: {
        getCartVisible: state => state.cartVisible,
        getCart: state => state.cart,
        getSubAmount: state => state.subAmount < 0 ? 0 : state.subAmount.toFixed(2)
    }
}
