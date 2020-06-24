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
  md:py-10 leading-snug text-gray-600 select-none">
  <div class="p-2 md:p-4">
    <p class="flex items-center justify-center">
      Made with&NonBreakingSpace;
      <i class="icon">favorite</i>
      &NonBreakingSpace;by&NonBreakingSpace;
      <a href=".">{$appTitle} Lubuklinggau</a>
    </p>
    <p>
      Built using awesome open source
      <a href="/technology">technologies</a>
    </p>
    <p>&copy;2020 All Rights Reserved</p>
  </div>
</footer>
