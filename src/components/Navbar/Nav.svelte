<script>
  import { fly } from "svelte/transition";
  import { linkScrollTo, clickOutside } from "../../utils/actions";
  import { breakpoints, navbar, appTitle } from "../../stores/app";
  import Logo from "../Site/Logo.svelte";

  let classes = "";
  let noTransition = false;
  let fixed = false;

  const duration = noTransition ? 0 : 400;

  export { classes as class, noTransition as notransition, fixed };
</script>

<style type="text/postcss">
  .lift {
    @apply fixed bg-white shadow;
  }

  .descend {
    @apply h-20;
  }

  .item-active {
    @apply rounded bg-gray-100;
  }
</style>

<nav
  class:lift={fixed}
  class:descend={!fixed}
  class="flex flex-no-wrap items-center justify-between sm:px-12 w-full {classes}">

  <!-- Brand -->
  <a
    href="."
    class="flex items-center flex-shrink-0 text-green-600 p-2 ml-2 sm:ml-0
    hover:text-green-700">
    <Logo class="fill-current h-8 w-10" />
    <span class="text-xl tracking-tight ml-2">{$appTitle}</span>
  </a>

  <!-- Menu button on desktop -->
  {#if $breakpoints.lg}
    <div class="flex flex-no-wrap" transition:fly={{ x: 200, duration }}>
      {#each $navbar.menuItems as item (item)}
        <a
          class="p-2 tracking-tight text-green-600 uppercase px-2 mx-1
          hover:text-green-700"
          class:item-active={item.active}
          href="#{item.name}"
          on:click|preventDefault={linkScrollTo}>
          {item.title}
        </a>
      {/each}
    </div>
  {/if}

  <!-- Menu button on mobile -->
  {#if !$breakpoints.lg}
    <div class="relative rounded">
      <div class="block">
        <div
          id="menu-mobile"
          class="flex text-xl p-4 items-center text-green-600 hover:bg-gray-200
          rounded-full"
          role="button"
          on:click={navbar.toggleMenuMobile}>
          <i class="icon">more_vert</i>
        </div>
      </div>
      <!-- Menu items in mobile -->
      {#if $navbar.menuMobileShown}
        <div
          transition:fly={{ duration: 300, y: -5 }}
          class="absolute -mt-3 mr-2 w-48 right-0 bg-white max-w-md rounded
          shadow-xl border border-gray-300 py-2 z-10"
          use:clickOutside={['menu-mobile']}
          on:clickoutside={navbar.toggleMenuMobile}>
          {#each $navbar.menuItems as item (item)}
            <a
              class="block px-5 py-2 hover:text-green-700"
              class:item-active={item.active}
              href="#{item.name}"
              on:click|preventDefault={linkScrollTo}>
              {item.title}
            </a>
          {/each}
        </div>
      {/if}
    </div>
  {/if}

</nav>
