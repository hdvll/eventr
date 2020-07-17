import { writable, derived } from "svelte/store";
import { eventList } from "./eventList";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));

export const events = writable(eventList);
export const errors = writable([]);
export const notifications = writable([]);
export const cart = writable(cartFromLocalStorage ? cartFromLocalStorage : []);

export const cart_price = derived(cart, ($cart) => {
  let totalPrice = 0;

  // Calculate total cost of cart
  $cart.map((item) => {
    totalPrice = totalPrice += item.price;
  });

  return totalPrice;
});

// export const cart_price = derived($cart, () => {
//   let totalPrice = 0;

//   // // Calculate total cost of cart
//   // $cart.map((item) => {
//   //   total = total += item.price;
//   // });

//   return totalPrice;
// });
