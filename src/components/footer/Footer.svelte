<style type="text/scss" lang="scss">
  @import "../styles/_variables.scss";

  footer {
    background: white;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-top: 1px solid darken($background-color, 5%);

    .footer__notice {
      max-width: 1100px;

      a {
        color: $accent-color;
      }
    }
  }
</style>

<footer>

  <div class="footer__notice">
    Please notice that this is just a dummy site. You cannot buy anything here
    :(
    <br />
    <br />
    I coded this site to show off how to set up a cart/checkout app in Svelte,
    spoiler, it's not very hard at all. You can play around with adding stuff to
    the cart and removing it. The site will also store some cart info in the
    browsers storage so make sure to clear that if you don't want that to be
    left when you leave the page. You can find more of my front-end web
    development projects at
    <a href="https://hdvll.com" target="_blank">hdvll.com</a>
    or at my Github,
    <a href="https://github.com/hdvll">github.com/hdvll</a>
  </div>

</footer>

<script>

</script>
