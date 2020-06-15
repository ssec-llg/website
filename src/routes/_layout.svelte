<script>
  import { windowWidth } from "../stores/app";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<Nav {segment} />

<main class="">
  <slot />
</main>