<style type="text/scss" lang="scss">
  @import "../../styles/_variables.scss";

  .grey-bg {
    background: $background-color;
  }

  .cart-item {
    padding: 1rem 0.5rem;
    border-bottom: 1px solid darken($background-color, 10%);

    &__info {
      display: flex;
      align-items: center;

      svg {
        cursor: pointer;
      }
    }

    &__details {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;

      h4 {
        span {
          font-weight: 300;
          margin-right: 0.2rem;
        }
      }
    }

    &__image {
      max-width: 75px;
      height: 75px;
      object-fit: cover;
      border-radius: 3px;
    }

    &__description {
      margin-left: 0.5rem;
      max-width: 150px;
      line-height: 1.1;
    }

    &__trash {
      width: 25px;
      height: 25px;
      margin-left: auto;
    }
  }
</style>

<div class="cart-item" class:grey-bg="{customClass}">
  <div class="cart-item__info">
    <img src="{item.image}" alt="{item.description}" class="cart-item__image" />
    <span class="cart-item__description">{item.description}</span>
    <svg
      viewBox="0 0 24 24"
      class="cart-item__trash"
      on:click="{() => removeFromCart(item)}"
    >
      <path
        d="M20.37 8.91L19.37 10.64L7.24 3.64L8.24 1.91L11.28 3.66L12.64
        3.29L16.97 5.79L17.34 7.16L20.37 8.91ZM6 19V7H11.07L18 11V19C18 19.5304
        17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16
        21H8C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6
        19.5304 6 19Z"
        fill="#C12A2A"
      ></path>
    </svg>
  </div>
  <div class="cart-item__details">
    <h4>
      <span>Event price: €</span>
      {formatPrice(item.price)}
    </h4>
  </div>

</div>

<script>
  import { removeFromCart } from "../../store/updateStore.js";
  import { formatPrice } from "../../helper/utils.js";

  export let item;
  export let customClass;
</script>
