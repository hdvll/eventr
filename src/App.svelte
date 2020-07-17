<style type="text/scss" lang="scss" global>
  @import "./styles/_variables.scss";

  .container {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding-top: calc(2rem + (30px * 1.1));
  }

  .error,
  .notification {
    border-radius: 3px;
    position: fixed;
    bottom: 5px;
    left: 5px;
    right: 5px;
    padding: 1rem;
    color: #fff;
    z-index: 99;
    box-shadow: 0 0 5px 3px #b9b9b9;
    text-align: center;
  }

  .error {
    background: $accent-color;
  }

  .notification {
    background: $notification-color;
  }

  @media screen and (min-width: 800px) {
    .error,
    .notification {
      width: 40%;
      max-width: 800px;
      margin: 0 auto;
    }
  }
</style>

<div class="app">
  <Header />
  <!-- Check for errors and display toaster -->
  {#if $errors.length > 0}
    {#each $errors as error}
      <div transition:slide="{{ delay: 150, duration: 300 }}" class="error">
        {error.msg}
      </div>
    {/each}
  {:else if $notifications.length > 0}
    {#each $notifications as notification}
      <div
        transition:slide="{{ delay: 150, duration: 300 }}"
        class="notification"
      >
        {notification.msg}
      </div>
    {/each}
  {/if}
  <div class="container">
    <Events events="{currentEvents}" />
  </div>
  <Footer />
</div>

<script>
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";
  import Header from "./components/header/Header.svelte";
  import Events from "./components/events/Events.svelte";
  import Footer from "./components/footer/Footer.svelte";
  import {
    events,
    cart,
    cart_price,
    errors,
    notifications
  } from "./store/store";

  let currentEvents = [];

  onMount(() => {
    // Get all events from the store and put them in a local variable
    currentEvents = $events;
  });
</script>
