<script>
  import { appTitle } from "../../stores/app";
</script>

<style>
  a {
    @apply text-green-600;
  }

  a:hover {
    @apply underline;
  }
</style>

<footer
  class="text-center text-xs sm:text-base bg-white w-full px-2 md:px-6 py-6
  md:py-10 leading-snug">
  <div class="p-2 md:p-4">
    <p class="flex items-center justify-center">
      Made with&NonBreakingSpace;
      <i class="icon">favorite</i>
      &NonBreakingSpace;by&NonBreakingSpace;
      <a href=".">{$appTitle}</a>
    </p>
    <!-- <p>
      Built using
      <a
        href="https://sapper.svelte.dev/"
        target="_blank"
        rel="noopener noreferrer">
        Sapper
      </a>
      &
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer">
        Tailwind
      </a>
      hosted by
      <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
        Vercel
      </a>
    </p> -->
    <p>&copy;2020 All Rights Reserved</p>
  </div>
</footer>
