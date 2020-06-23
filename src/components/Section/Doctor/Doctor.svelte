<script>
  import Image from "svelte-image";
</script>

<style type="text/postcss">
  .grid-doctors {
    @apply grid grid-cols-1 gap-2 mx-8;

    @screen sm {
      @apply grid-cols-3 gap-4 max-w-3xl;
    }
  }

  .image-title {
    @apply font-semibold mt-1;

    @screen md {
      @apply mt-2;
    }
  }
</style>

<section id="doctor" class="bg-gray-200 py-12 select-none">

  <header class="flex justify-center my-8 w-full">
    <h2 class="hero-title">Dokter spesialis</h2>
  </header>

  <div class="flex justify-center mb-12">

    <div class="grid-doctors">

      <div class="text-center">
        <div class="mx-16 sm:mx-8 sm:pt-8">
          <Image
            class="object-cover rounded-full bg-gray-100 hover:bg-yellow-200
            shadow border-4 border-white"
            src="images/dr-fidalia.png" />
        </div>
        <h3 class="image-title underline">DR. dr. Hj. Fidalia, Sp.M(K)</h3>
        <p class="text-gray-600">Spesialis Mata Konsultan Glaukoma</p>
      </div>

      <div class="text-center">
        <div class="mx-16 sm:mx-8 pt-8">
          <Image
            class="object-cover rounded-full bg-gray-100 hover:bg-orange-200
            shadow border-4 border-white"
            src="images/dr-ansyori.png" />
        </div>
        <h3 class="image-title underline">
          dr. H. AK. Ansyori, Sp.M(K)., M.Kes., MARS., PhD
        </h3>
        <p class="text-gray-600">Spesialis Mata Konsultan Vitreoretina</p>
      </div>

      <div class="text-center">
        <div class="mx-16 sm:mx-8 pt-8">
          <Image
            class="object-cover rounded-full bg-gray-100 hover:bg-green-300
            shadow border-4 border-white"
            src="images/dr-riani.png" />
        </div>
        <h3 class="image-title underline">dr. Riani Erna, Sp.M(K)</h3>
        <p class="text-gray-600">Spesialis Mata Konsultan Tumor dan Rekonstruksi</p>
      </div>

      <div class="text-center">
        <div class="mx-16 sm:mx-8 pt-8">
          <Image
            class="object-cover rounded-full bg-gray-100 hover:bg-blue-200
            shadow border-4 border-white"
            src="images/dr-wini.png" />
        </div>
        <h3 class="image-title underline">dr. Wini Putria Marindah, Sp.M</h3>
        <p class="text-gray-600">Spesialis Mata</p>
      </div>

      <div class="text-center">
        <div class="mx-16 sm:mx-8 pt-8">
          <Image
            class="object-cover rounded-full bg-gray-100 hover:bg-yellow-300
            shadow border-4 border-white"
            src="images/dr-hardianto.png" />
        </div>
        <h3 class="image-title underline">dr. Hardianto, Sp.M</h3>
        <p class="text-gray-600">Spesialis Mata</p>
      </div>

      <div class="text-center">
        <div class="mx-16 sm:mx-8 pt-8">
          <Image
            class="object-cover rounded-full bg-gray-100 hover:bg-green-200
            shadow border-4 border-white"
            src="images/dr-tesha.png" />
        </div>
        <h3 class="image-title underline">dr. Tesha Ratnafury, Sp.M</h3>
        <p class="text-gray-600">Spesialis Mata</p>
      </div>

    </div>

  </div>

</section>
