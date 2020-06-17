<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { scrollTo } from "../../utils/actions";
  import { navLift, appMoto } from "../../stores/app";
  import Nav from "../Navbar/Nav.svelte";

  let motoVisible = false;

  onMount(() => {
    motoVisible = true;
  });
</script>

<style type="text/postcss">
  section {
    background-image: url("/images/bg-hero.svg");
    @apply bg-contain bg-no-repeat bg-right-bottom;
  }

  .text-hero {
    margin-top: 25%;
    margin-bottom: auto;

    @screen md {
      @apply my-auto mx-16;
    }
  }
</style>

<section id="home" class="flex h-screen bg-gray-300">
  {#if !$navLift}
    <div class="absolute w-full">
      <Nav />
    </div>
  {/if}
  {#if motoVisible}
    <div transition:fade class="text-hero mx-8 text-gray-700" >
      <h1 class="text-5xl">{@html $appMoto}</h1>
      <p class="text-lg md:text-xl text-gray-600 max-w-xl">
        Pusat pelayanan kesehatan spesialistik mata terpadu klinik utama mata
        Silampari Sriwijaya Eye Centre Lubuklinggau
      </p>
      <div
        class="inline-block px-4 py-3 mt-4 border border-green-500
        text-green-500 rounded uppercase font-semibold"
        href="#service"
        role="button"
        on:click|preventDefault={() => scrollTo('service')}>
        <span class="flex items-center">
          <i class="icon mr-2 text-lg">medical_services</i>
          Pelayanan kami
        </span>
      </div>
    </div>
  {/if}
</section>
