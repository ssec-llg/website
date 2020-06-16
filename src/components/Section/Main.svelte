<script>
  import { onMount } from "svelte";
  import { scrollTo } from "../../utils/actions";
  import Nav from "../Navbar/Nav.svelte";
  import Typewriter from "../Text/Typewriter.svelte";

  let motoVisible;

  onMount(() => {
    motoVisible = true;
  });
</script>

<style type="text/postcss">
  section {
    background-image: url("/images/bg-hero.svg");
    @apply bg-contain bg-no-repeat bg-right-bottom;
  }
</style>

<section id="home" class="flex h-screen bg-gray-300">
  <div class="absolute w-full">
    <Nav />
  </div>
  <div class="my-auto mx-8 md:mx-16 text-gray-700">
    <Typewriter class="text-5xl" speed={50} visible={motoVisible}>
      Inovatif &bullet; Profesional &bullet; Bersahabat
    </Typewriter>
    <p class="text-xl text-gray-600 max-w-xl">
      Pusat pelayanan kesehatan spesialistik mata terpadu klinik utama mata
      Silampari Sriwijaya Eye Centre Lubuklinggau
    </p>
    <div
      class="inline-block px-3 py-2 mt-3 border border-green-500 text-green-500
      rounded uppercase font-semibold"
      href="#service"
      role="button"
      on:click|preventDefault={() => scrollTo('service')}>
      <span class="flex items-center">
        <i class="icon mr-2 text-lg">medical_services</i>
        Pelayanan kami
      </span>
    </div>
  </div>
</section>
