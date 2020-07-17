<style type="text/scss" lang="scss">
  @import "../styles/_variables.scss";

  .price {
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.2rem;

    &__currency {
      margin-right: 0.2rem;
      font-weight: 300;
      font-size: 1rem;
    }
  }
</style>

<div class="price">
  {#if $cart_price > 0}
    <span class="price__currency">€</span>
    {formatPrice($cart_price)}
  {/if}
</div>

<script>
  import { formatPrice } from "../../helper/utils.js";
  import { cart_price } from "../../store/store.js";
</script>
