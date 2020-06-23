<script>
  import Image from "svelte-image";

  const mapUrl = "https://goo.gl/maps/ESuynicZoFpYmshx5";
</script>

<style type="text/postcss">
  .map {
    @apply border-2 border-white shadow transition-all duration-150 ease-linear transform;
  }

  .map:hover {
    transform: rotate(-2deg);
    @apply shadow-xl;
  }

  .button {
    @apply inline-flex items-center px-4 py-2 my-1 mr-1 rounded-full shadow;
  }

  .button:hover {
    @apply opacity-75;
  }
</style>

<section id="contact" class="bg-gray-200 py-12 select-none">

  <header class="flex justify-center my-8 w-full">
    <h2 class="hero-title text-center mx-2">Terhubung dengan kami</h2>
  </header>

  <div class="flex justify-center w-full mb-8">
    <div class="grid grid-cols-1 mx-8 sm:grid-cols-2 gap-3 max-w-3xl">

      <div class="map">
        <a href={mapUrl} target="_blank" rel="noopener noreferrer">
          <img src="images/img-maps.jpg" alt="SSEC maps" />
        </a>
      </div>

      <div class="sm:flex sm:items-center">
        <div class="mx-auto text-center sm:text-left">

          <p class="mb-2 sm:text-lg">
            Jl. Yos Sudarso, NO. 80, RT. 07, Taba Pingin, Lubuklinggau, Sumatera
            Selatan, 31625
          </p>

          <a
            class="button bg-yellow-200"
            href="tel:07333286255"
            target="_blank"
            rel="noopener noreferrer">
            <i class="icon mx-1">local_phone</i>
            <span>3286 255</span>
          </a>

          <a
            class="button bg-blue-200"
            href="http://fb.com/ssec.llg"
            target="_blank"
            rel="noopener noreferrer">
            <svg
              class="fill-current h-4 w-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0
                011-1h3z" />
            </svg>
            <span>@ssec.llg</span>
          </a>

          <a
            class="button bg-pink-200"
            href="http://instagram.com/ssec.llg"
            target="_blank"
            rel="noopener noreferrer">
            <svg
              class="h-4 w-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>@ssec.llg</span>
          </a>

          <a
            class="button bg-orange-200"
            href="tel:07333286255"
            target="_blank"
            rel="noopener noreferrer">
            <i class="icon mx-1">place</i>
            <span>Maps</span>
          </a>

        </div>
      </div>
    </div>
  </div>
</section>
