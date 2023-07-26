import { InjectionKey } from "vue"
import { createStore, useStore as useVuexStore, Store } from "vuex"

import products, { ProductsState } from "@/store/modules/products"
import cart, { CartState } from "@/store/modules/cart"

export interface State {
  products: ProductsState
}

export const key: InjectionKey<Store<State>> = Symbol()

export function useStore() {
  return useVuexStore(key)
}

export const store = createStore<State>({
  modules: {
    products
  }
})