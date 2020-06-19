<script>
  import ServiceItem from "./ServiceItem.svelte";

  const services = [
    { icon: "visibility", title: "Spesialis Mata Umum", desc: "" },
    { icon: "airline_seat_flat", title: "Bedah Katarak Canggih", desc: "" },
    {
      icon: "biotech",
      title: "Bedah Refraktif Canggih (Bedah Lensa Jernih dan Lasik)",
      desc: "",
    },
    { icon: "mediation", title: "Glaucoma", desc: "" },
    { icon: "center_focus_weak", title: "Tumor/Onkologi Mata", desc: "" },
    { icon: "flare", title: "Rekonstruksi/Bedah Plastik Mata", desc: "" },
    { icon: "filter_b_and_w", title: "Infeksi Imunologi", desc: "" },
    {
      icon: "bubble_chart",
      title: "Lasik (Afliasi RSU Sriwijaya Palembang)",
      desc: "",
    },
  ];
</script>

<style type="text/postcss">
  .rounded-lt-container {
    @apply bg-gray-100;

    @screen md {
      border-radius: 21%/6rem 0 0;
    }
  }
</style>

<section id="service" class="bg-gray-200 antialiased">
  <div class="flex rounded-lt-container">

    <div class="mx-auto my-12">
      <header class="flex justify-center my-8 w-full">
        <h2 class="hero-title">Pelayanan kami</h2>
      </header>

      <div class="grid grid-cols-3 gap-4 md:max-w-3xl lg:max-w-4xl">
        {#each services as { icon, title, desc } (title)}
          <ServiceItem {icon} {title} />
        {/each}
      </div>
    </div>
  </div>
</section>
