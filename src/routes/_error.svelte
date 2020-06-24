<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>Oops! {status}</title>
</svelte:head>

<section class="flex h-screen">
  <div class="m-auto">

    <h1>{status}</h1>
    <p>{error.message}</p>
    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}

  </div>
</section>
