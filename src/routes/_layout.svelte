<script>
  import "./_styles.svelte";
  import { windowWidth } from "../stores/app";
  import Nav from "../components/Navbar/Nav.svelte";

  export let segment;
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<Nav {segment} />

<main>
  <slot />
</main>
