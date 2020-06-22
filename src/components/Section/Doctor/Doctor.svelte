<script>
  import Image from "svelte-image";
</script>

<style type="text/postcss">
  .grid-doctors {
    @apply grid grid-cols-1 gap-2 mx-12;

    @screen sm {
      @apply grid-cols-3 gap-4 max-w-3xl mx-0;
    }
  }

  .image-container {
    @apply p-6 text-center;
  }

  .image-title {
    @apply font-semibold leading-tight text-sm;

    @screen md {
      @apply mt-2;
    }
  }
</style>

<section id="doctor" class="bg-gray-200 py-12 select-none">

  <header class="flex justify-center my-8 w-full">
    <h2 class="hero-title">Dokter spesialis</h2>
  </header>

  <div class="flex justify-center">

    <div class="grid-doctors">

      <div class="image-container">
        <Image
          class="object-cover rounded-full bg-gray-100 shadow border-4
          border-white"
          src="images/dr-fidalia.png" />
        <h3 class="image-title">DR. dr. Hj. Fidalia, Sp.M(K)</h3>
      </div>

      <div class="image-container">
        <Image
          class="object-cover rounded-full bg-gray-100 shadow border-4
          border-white"
          src="images/dr-ansyori.png" />
        <h3 class="image-title">
          dr. H. AK. Ansyori, Sp.M(K)., M.Kes., MARS., PhD
        </h3>
      </div>

      <div class="image-container">
        <Image
          class="object-cover rounded-full bg-gray-100 shadow border-4
          border-white"
          src="images/dr-riani.png" />
        <h3 class="image-title">dr. Riani Erna, Sp.M(K)</h3>
      </div>

      <div class="image-container">
        <Image
          class="object-cover rounded-full bg-gray-100 shadow border-4
          border-white"
          src="images/dr-wini.png" />
        <h3 class="image-title">dr. Wini Putria Marindah, Sp.M</h3>
      </div>

      <div class="image-container">
        <Image
          class="object-cover rounded-full bg-gray-100 shadow border-4
          border-white"
          src="images/dr-hardianto.png" />
        <h3 class="image-title">dr. Hardianto, Sp.M</h3>
      </div>

      <div class="image-container">
        <Image
          class="object-cover rounded-full bg-gray-100 shadow border-4
          border-white"
          src="images/dr-tesha.png" />
        <h3 class="image-title">dr. Tesha Ratnafury, Sp.M</h3>
      </div>

    </div>

  </div>

</section>
