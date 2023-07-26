import { ActionContext } from "vuex"

export interface CartStoreItem {
  id: string
  quantity: number
}

export interface CartState {
  items: Array<CartStoreItem>
  checkoutStatus: boolean | null
}

const state: CartState = {
  items: [],
  checkoutStatus: null
}

const getters = {
  cartItems: (state: CartState, getters: any, rootState: any) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find((product: any) => product.id === id)
      return {
        id: product.id,
        image: product.image,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity
      }
    })
  },

  cartTotal: (state: CartState, getters: any) => {
    return getters.cartItems.reduce((total: number, product: any) => {
      return total + product.price * product.quantity
    }, 0).toFixed(2)
  },

  cartQuantity: (state: CartState, getters: any) => {
    return state.items.reduce((total: number, cartItem: CartStoreItem) => {
      return cartItem.quantity + total;
    }, 0)
  }
}

const mutations = {
  pushProductToCart (state: CartState, { id }: { id: string }) {
    state.items.push({ id, quantity: 1 })
  },

  incrementItemQuantity (state: CartState, { id }: { id: string }) {
    const cartItem = state.items.find(item => item.id === id)
    if (cartItem) {
      cartItem.quantity++
    }
  },

  decrementItemQuantity (state: CartState, { id }: { id: string }) {
    const cartItem = state.items.find(item => item.id === id)
    if (cartItem) {
      cartItem.quantity--
    }
  },

  setCartItems (state: CartState, { items }: any) {
    state.items = items
  },

  setCheckoutStatus (state: CartState, status: boolean) {
    state.checkoutStatus = status
  }
}

const actions = {
  checkout ({ commit, state }: ActionContext<CartState, any>, products: any) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
  },
  
  addProductToCart ({ state, commit }: ActionContext<CartState, any>, product: any) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}