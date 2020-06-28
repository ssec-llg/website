<style type="text/postcss">
  .brand-logo {
    @apply bg-contain bg-no-repeat object-left flex items-center h-6 w-auto my-1 mx-2;
  }

  .brand-logo:hover {
    @apply underline;
  }

  .vscode {
    background-image: url("/images/ic-vscode.svg");
  }

  .inkscape {
    background-image: url("/images/ic-inkscape.svg");
  }

  .sapper {
    background-image: url("/images/ic-sapper.svg");
  }

  .tailwind {
    background-image: url("/images/ic-tailwind.svg");
  }

  .mdi {
    background-image: url("/images/ic-mdi.svg");
  }

  .feather {
    background-image: url("/images/ic-feather.svg");
  }
</style>

<div class="bg-white py-3 px-2 rounded-lg shadow-lg">

  <a href="https://sapper.svelte.dev/" class="brand-logo sapper">
    <p class="pl-8 ml-1">Sapper</p>
  </a>

  <a
    href="https://tailwindcss.com/"
    target="_blank"
    rel="noopener noreferrer"
    class="brand-logo tailwind">
    <p class="pl-8 ml-1">Tailwind</p>
  </a>

  <a
    href="https://material.io/resources/icons/"
    target="_blank"
    rel="noopener noreferrer"
    class="brand-logo mdi">
    <p class="pl-8 ml-1">Material Design Icon</p>
  </a>

  <a
    href="https://feathericons.com/"
    target="_blank"
    rel="noopener noreferrer"
    class="brand-logo feather">
    <p class="pl-8 ml-1">Feather Icon</p>
  </a>

  <a
    href="https://code.visualstudio.com/"
    target="_blank"
    rel="noopener noreferrer"
    class="brand-logo vscode">
    <p class="pl-8 ml-1">Visual Studio Code</p>
  </a>

  <a
    href="https://inkscape.org/"
    target="_blank"
    rel="noopener noreferrer"
    class="brand-logo inkscape">
    <p class="pl-8 ml-1">Inkscape</p>
  </a>

</div>
