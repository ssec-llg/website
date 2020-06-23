<script>
  import "./_styles.svelte";
  import { onMount } from "svelte";
  import { windowWidth } from "../stores/app";
  import Nav from "../components/Navbar/Nav.svelte";
  import Footer from "../components/Footer/Footer.svelte";

  let segment;
  let lift;

  function setNavLift() {
    if (process.browser && window) {
      lift = window.scrollY > 0;
    }
  }

  onMount(() => setNavLift());

  segment && console.log(segment);
  export { segment };
</script>

<svelte:window bind:innerWidth={$windowWidth} on:scroll={setNavLift} />

<header>
  <Nav {lift} />
</header>

<main>
  <slot />
</main>

<Footer />
