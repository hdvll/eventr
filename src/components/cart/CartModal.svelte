<style type="text/scss" lang="scss">
  .cart-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 998;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="cart-modal">
  <Cart {toggleCartModal} />
</div>

<script>
  import Cart from "./Cart.svelte";
  export let toggleCartModal;
</script>
