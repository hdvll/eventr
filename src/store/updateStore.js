import { cart, errors, notifications } from "./store";
import { get } from "svelte/store";

export const addToCart = (event) => {
  const currentCart = get(cart);
  const itemInCart = currentCart.filter((item) => item.id == event.id).length;

  if (itemInCart > 0) {
    console.log("Item already exist in cart...");
    setError("cart", "Item already exist in cart");
    return;
  }

  cart.set([...get(cart), event]);
  localStorage.setItem("cart", JSON.stringify(get(cart)));
  setNotification("cart", "Event added to cart!");
  console.log(`Added ${event.description} to the cart...`);
};

export const removeFromCart = (event) => {
  const currentCart = get(cart);
  const newCart = currentCart.filter((item) => item.id != event.id);

  cart.set(newCart);
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(newCart));
  setNotification("cart", "Event removed from cart");
  console.log(`Removed event ${event.description} from the cart...`);
};

export const setError = (type, msg) => {
  errors.set([...get(errors), { type, msg }]);
  setTimeout(() => {
    errors.set([]);
  }, 5000);
};

export const setNotification = (type, msg) => {
  notifications.set([...get(notifications), { type, msg }]);
  setTimeout(() => {
    notifications.set([]);
  }, 5000);
};
