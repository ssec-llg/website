<script>
  import "./_styles.svelte";
  import { fade } from "svelte/transition";
  import { windowWidth, navLift } from "../stores/app";
  import Nav from "../components/Navbar/Nav.svelte";

  export let segment;
  segment && console.log(segment);
</script>

<svelte:window bind:innerWidth={$windowWidth} />

{#if $navLift}
  <header transition:fade={{ duration: 300 }}>
    <Nav fixed />
  </header>
{/if}

<main>
  <slot />
</main>
