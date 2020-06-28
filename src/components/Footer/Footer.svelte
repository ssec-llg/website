<script>
  import { fly } from "svelte/transition";
  import { clickOutside } from "../../utils/actions";
  import { appTitle } from "../../stores/app";
  import Tech from "../Site/Tech.svelte";

  let techShown = false;

  function toggleTech() {
    techShown = !techShown;
  }
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
    <p class="inline-block relative">
      Built using super awesome open source
      <span
        id="things-button"
        class="text-green-600 hover:underline"
        role="button"
        on:click={toggleTech}>
        things
      </span>
      {#if techShown}
        <div
          transition:fly={{ duration: 300, y: 5 }}
          class="absolute right-0 bottom-0 mb-5"
          use:clickOutside={['things-button']}
          on:clickoutside={toggleTech}>
          <Tech />
        </div>
      {/if}
    </p>
    <p>&copy;2020 All Rights Reserved</p>
  </div>
</footer>
