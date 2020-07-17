<style type="text/scss" lang="scss">
  @import "../styles/_variables.scss";

  .cart {
    position: relative;

    .cart__img {
      width: 30px;
      height: auto;
      cursor: pointer;
    }

    .cart__item-count {
      position: absolute;
      top: -5px;
      right: -5px;
      background: $accent-color;
      color: #fff;
      padding: 0.5rem;
      border-radius: 50%;
      width: 0.5rem;
      height: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
    }
  }
</style>

<li class="cart">
  <img
    src="{cartIcon}"
    alt="Shopping cart"
    class="cart__img"
    on:click="{toggleCartModal}"
  />
  <span class="cart__item-count">{$cart.length}</span>
</li>

<script>
  import { cart } from "../../store/store.js";
  let cartIcon = "assets/icon-cart.svg";
  export let toggleCartModal;
</script>
