<style type="text/scss" lang="scss">
  @import "./styles/_variables.scss";

  .event {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    align-content: start;
    align-items: start;
    background: #fff;
    padding: 0.5rem;
    transition: all 200ms ease-in-out;
    transform: scale(1);
    box-shadow: none;
    pointer-events: none;

    &__image {
      height: 300px;
      width: 100%;
      object-fit: cover;
    }

    &__description {
      font-size: 2rem;
      font-weight: 900;
      text-align: center;
      padding: 0 1rem;
      line-height: 1.25;
    }

    &__price {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      font-weight: 300;
      color: $accent-color;
      background: lighten($accent-color, 50%);

      span {
        font-size: 0.4em;
        margin-left: 0.4rem;
        color: #333;
      }
    }

    &__details {
      line-height: 1.5;
      padding: 0 1rem;
    }

    &__add {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-self: center;
      margin: 1rem;
      margin-bottom: 2rem;
      font-family: "Lato", sans-serif;
      text-transform: uppercase;
      font-size: inherit;
      font-weight: inherit;
      padding: 1rem 2rem;
      background: #333;
      color: #fff;
      border: none;
      border-radius: 5rem;
      width: 95%;
      cursor: pointer;
      pointer-events: auto;
      transition: background 200ms ease-in-out;

      svg {
        margin-left: 0.5rem;
        height: 20px;
        width: auto;
        fill: none;

        path {
          stroke: #fff;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
    .event:hover {
      transform: scale(1.04);
      box-shadow: 5px 5px 10px 2px darken($background-color, 5%);
    }

    .event__add:hover {
      background: $accent-color;
    }
  }
</style>

<div class="event">
  <img src="/{event.image}" alt="{event.description}" class="event__image" />
  <span class="event__description">{event.description}</span>
  <div class="event__price">
    {formatPrice(event.price)}
    <span>{event.priceUnit}</span>
  </div>
  <p class="event__details">{event.details}</p>
  <button class="event__add" on:click="{() => addToCart(event)}">
    Add to cart
    <svg viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 11.5C4.77614 11.5 5 11.2761 5 11C5 10.7239 4.77614 10.5 4.5
        10.5C4.22386 10.5 4 10.7239 4 11C4 11.2761 4.22386 11.5 4.5 11.5Z"
      ></path>
      <path
        d="M11.5 11.5C11.7761 11.5 12 11.2761 12 11C12 10.7239 11.7761 10.5 11.5
        10.5C11.2239 10.5 11 10.7239 11 11C11 11.2761 11.2239 11.5 11.5 11.5Z"
      ></path>
      <path d="M0.5 0.5H2.5L4 9H12"></path>
      <path
        d="M4 7H11.795C11.8528 7.00004 11.9089 6.98004 11.9536 6.9434C11.9983
        6.90676 12.029 6.85576 12.0403 6.79906L12.9403 2.29906C12.9476 2.26278
        12.9467 2.22533 12.9377 2.18943C12.9288 2.15352 12.9119 2.12006 12.8885
        2.09145C12.865 2.06284 12.8355 2.03979 12.802 2.02398C12.7686 2.00816
        12.732 1.99997 12.695 2H3"
      ></path>
    </svg>
  </button>
</div>

<script>
  import EventCard from "./EventCard.svelte";
  import { addToCart } from "../../store/updateStore.js";
  import { formatPrice } from "../../helper/utils.js";

  export let event = [];
</script>
