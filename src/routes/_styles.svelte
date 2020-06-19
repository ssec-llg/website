<style type="text/postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .hero-title {
    @apply py-4 text-2xl font-semibold uppercase;
  }

  .hero-title::after {
    content: "";
    @apply absolute flex left-0 right-0 pb-3 m-auto w-32 border-b-2 border-green-600;
  }
</style>
