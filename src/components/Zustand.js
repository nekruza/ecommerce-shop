import create from 'zustand'
import { devtools } from 'zustand/middleware'


const useStore = create(devtools(set => ({
  basket: [],
  addBasket: (product) => set(state => ({basket: [...state.basket, product]})),
  addToFavList: (product) => set(state => ({basket: [...state.basket, product]})),
  deleteItem: (value)=> set(state => ({basket: state.basket.filter(item => item.id !== value)})),
  increaseQuantity: (id)=>set(state => ( state.basket.map((item)=> item.id===id ? item.quantity++ : console.log('it is not working'))))
})))

export default useStore;
