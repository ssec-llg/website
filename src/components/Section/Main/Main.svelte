<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { scrollTo } from "../../../utils/actions";

  let motoVisible = false;

  onMount(() => (motoVisible = true));
</script>

<style type="text/postcss">
  section {
    @apply bg-contain bg-no-repeat bg-right-bottom;
    background-image: url("/images/bg-hero.svg");
    border-radius: 0 0 21%/4rem;

    @screen md {
      border-radius: 0 0 12rem;
    }
  }

  .hero-button {
    @apply inline-block px-6 py-3 uppercase rounded-full border border-green-400;

    @screen md {
      @apply px-6 py-4;
    }
  }
</style>

<section id="home" class="h-screen bg-gray-200 select-none">
  {#if motoVisible}
    <div transition:fade class="flex h-full">

      <!-- ads and brand words -->
      <div class="my-auto mx-8 md:ml-16">
        <h1
          class="text-4xl sm:text-5xl mb-4 md:mb-1 font-semibold text-gray-700">
          Inovatif. Profesional. Bersahabat.
        </h1>
        <p class="text-lg md:text-xl text-gray-600 md:max-w-2xl">
          Silampari Sriwijaya Eye Centre atau biasa disebut SSEC adalah Pusat
          Pelayanan Kesehatan Spesialistik Mata Terpadu (Klinik Utama Mata) yang
          berada di Kota
          <a
            class="underline"
            href="http://g.page/lubuklinggau"
            target="_blank"
            rel="noopener noreferrer">
            Lubuklinggau,
          </a>
          Sumatera Selatan.
        </p>
        <div
          class="hero-button mt-4 text-white bg-green-400 shadow-lg
          hover:bg-green-500"
          role="button"
          on:click|preventDefault={() => scrollTo('service')}>
          <span class="flex items-center">
            <i class="icon mr-2 text-lg">medical_services</i>
            Pelayanan kami
          </span>
        </div>
        <div
          class="hero-button md:ml-2 mt-2 md:mt-0 text-green-500 bg-gray-200
          bg-opacity-50 shadow hover:bg-gray-300"
          role="button"
          on:click|preventDefault={() => scrollTo('contact')}>
          <span class="flex items-center">
            <i class="icon mr-2 text-lg">near_me</i>
            Berkunjung
          </span>
        </div>
      </div>
    </div>
  {/if}
</section>
