<style type="text/scss" lang="scss">
  .events {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    width: 95%;
    margin: 2rem auto;
  }

  @media screen and (min-width: 800px) {
    .events {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-gap: 2rem;
      width: 100%;
      padding: 2rem 1rem;
    }
  }
</style>

<div class="events">
  {#each events as event}
    <EventCard {event} />
  {/each}
</div>

<script>
  import EventCard from "./EventCard.svelte";
  export let events = [];
</script>
