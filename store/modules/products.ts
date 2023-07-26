import { ActionContext } from "vuex"
import { Category, Product } from "@prisma/client"

export interface ProductsState {
  all: Array<Product>
  categories: Array<Category>
}

const state: ProductsState = {
  all: [],
  categories: []
}

const getters = {
  products: (state: ProductsState) => state.all,
  categories: (state: ProductsState) => state.categories
}

const mutations = {
  setProducts (state: ProductsState, products: Array<Product>) {
    state.all = products
  },
  setCategories (state: ProductsState, categories: Array<Category>) {
    state.categories = categories
  }
}

const actions = {
  fetchAllProducts ({ commit }: ActionContext<ProductsState, any>) {
    const { data } = useFetch("/api/products/all")
    commit("setProducts", data)
  },
  fetchAllCategories ({ commit }: ActionContext<ProductsState, any>) {
    const { data } = useFetch("/api/categories/all")
    commit("setCategories", data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}