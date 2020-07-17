<style type="text/scss" lang="scss">
  @import "../../styles/_variables.scss";

  .cart-items {
    margin-top: 2rem;

    &__price {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
        font-family: "Lato", sans-serif;
        text-transform: uppercase;
        font-size: inherit;
        font-weight: inherit;
        padding: 1rem 2rem;
        background: #333;
        color: #fff;
        border: none;
        border-radius: 5rem;
        cursor: pointer;
        pointer-events: auto;
        transition: background 200ms ease-in-out;

        svg {
          margin-left: 0.5rem;
          height: 20px;
          width: auto;
          fill: white;

          path {
            stroke: #333;
          }
        }
      }

      span {
        margin-left: 0.5rem;
        font-size: 1.3rem;
        color: $accent-color;
      }
    }
  }
</style>

<div class="cart-items">
  <!-- <div class="cart-items__total-price">€ {formatPrice($cart_price)}</div> -->
  {#each $cart as item, index}
    <CartItem {item} customClass="{index % 2 === 0 ? 'grey-bg' : null}" />
  {/each}
  <div class="cart-items__price">
    Total price:
    <span>€ {formatPrice($cart_price)}</span>
    <button
      on:click="{() => alert('This is just a dummy page to show off how to build a simply cart checkout app in Svelte. Thanks for checking it out. More of my stuff on hdvll.com. -Magnus Hedvall')}"
    >
      Go to payment
      <svg viewBox="0 0 24 24">
        <path
          d="M20 8H4V6H20V8ZM20 18H4V12H20V18ZM20 4H4C2.89 4 2 4.89 2 6V18C2
          18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4
          20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22
          18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391
          4.21071 20.5304 4 20 4V4Z"
        ></path>
      </svg>

    </button>
  </div>
</div>

<script>
  import { cart, cart_price } from "../../store/store.js";
  import { formatPrice } from "../../helper/utils.js";
  import CartItem from "./CartItem.svelte";
</script>
