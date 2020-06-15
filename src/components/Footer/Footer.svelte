<script>
  import { appTitle } from "../../stores/app";
</script>

<style>
  a {
    @apply text-green-900;
  }

  a:hover {
    @apply underline;
  }
</style>

<footer class="text-center bg-white w-full px-2 md:px-6 py-6">
  <div class="p-2 md:p-4">
    <p>
      Made with
      <i class="icon text-sm">favorite</i>
      by
      <a href="https://ssec.co.id">{$appTitle} Lubuklinggau</a>
    </p>
    <p>
      Built using
      <a href="https://sapper.svelte.dev/">Sapper</a>
      &
      <a href="https://tailwindcss.com/">Tailwind</a>
      hosted by
      <a href="https://vercel.com/">Vercel</a>
    </p>
    <p>©2020. All Rights Reserved</p>
  </div>
</footer>
