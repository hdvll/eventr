<style type="text/scss" lang="scss">
  @import "../../styles/_variables.scss";

  .cart {
    z-index: 999;
    width: 90%;
    max-width: 1100px;
    min-height: 95%;
    padding: 1rem;
    background: #fff;
    overflow-y: hidden;

    &__heading {
      font-family: "Lato", sans-serif;
      display: flex;
      font-size: 2rem;

      h1 {
        font-weight: inherit;
        font-size: inherit;
        margin: 0;
        font-weight: 900;
      }

      span {
        margin-left: auto;
        cursor: pointer;
        color: $accent-color;
      }
    }

    &__empty {
      margin-top: 2rem;
    }
  }
</style>

<div class="cart">
  <div class="cart__heading">
    <h1>This is your cart</h1>
    <span on:click="{toggleCartModal}">X</span>
  </div>
  {#if $cart.length > 0}
    <CartItems />
  {:else}
    <div class="cart__empty">The cart is empty</div>
  {/if}
</div>

<script>
  import { cart } from "../../store/store.js";
  import CartItems from "./CartItems.svelte";

  export let toggleCartModal;
</script>
