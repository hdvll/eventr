<style type="text/scss" lang="scss">
  @import "../styles/_variables.scss";

  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    box-shadow: 0 0 5px 1px #cacaca;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background: #fff;
    border-bottom: 1px solid darken($background-color, 5%);
    --height: 30px;

    .logo {
      width: auto;
      height: calc(var(--height) * 1.1);
    }

    .nav {
      margin-left: auto;
      display: flex;
      align-items: center;
      list-style-type: none;

      &-link:not(:last-of-type) {
        margin-right: 2rem;
        font-size: 1.2em;
      }

      &-link {
        display: flex;
        align-items: center;
      }
    }
  }
</style>

<header>
  <img src="{logo}" alt="eventr logotype" class="logo" />
  <ul class="nav">
    <!-- <li class="nav-link">Events</li> -->
    <Price />
    <Cart {toggleCartModal} />
  </ul>
  {#if cartModal}
    <CartModal {toggleCartModal} />
  {/if}
</header>

<script>
  import Cart from "./Cart.svelte";
  import Price from "./Price.svelte";
  import CartModal from "../cart/CartModal.svelte";

  let logo = "assets/logo.svg";
  let cart = "assets/icon-cart.svg";
  let cartModal = false;

  const toggleCartModal = () => {
    cartModal = !cartModal;
    if (cartModal) document.body.style.position = "fixed";
    if (!cartModal) document.body.style.position = "";
  };
</script>
