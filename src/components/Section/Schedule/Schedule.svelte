<script>
  const schedules = [
    {
      day: "Senin",
      time: "08.00 - 13.00 WIB",
    },

    {
      day: "Selasa",
      time: "08.00 - 13.00 WIB",
    },

    {
      day: "Rabu",
      time: "08.00 - 13.00 WIB",
    },

    {
      day: "Kamis",
      time: "08.00 - 13.00 WIB",
    },

    {
      day: "Jum'at",
      time: "08.00 - 13.00 WIB",
    },

    {
      day: "Sabtu",
      time: "08.00 - Selesai",
      info: "Jadwal khusus konsultan",
    },
  ];
</script>

<style type="text/postcss">
  .schedule-container {
    @apply grid grid-cols-2 gap-2 mb-8 mx-2;

    @screen sm {
      @apply grid-cols-3 gap-2 mx-6 max-w-2xl;
    }
  }

  .schedule-item {
    @apply rounded-full px-5 py-2 text-center border;

    @screen sm {
      @apply px-8 py-3;
    }
  }

  .schedule-info {
    @apply relative bg-white rounded p-1 mt-3 shadow-lg;
  }

  .schedule-info::after {
    content: "";

    @apply absolute top-0 left-auto w-0 h-0;

    border: 0.813em solid transparent;
    border-bottom-color: #fff;
    border-top: 0;
    border-left: 0;
    margin-left: -0.406em;
    margin-top: -0.812em;
  }
</style>

<section id="schedule" class="py-12 select-none">

  <header class="flex justify-center my-8">
    <h2 class="hero-title">Jadwal praktek</h2>
  </header>

  <div class="flex justify-center mb-6">
    <div class="shadow bg-yellow-200 rounded m-4 p-4 md:max-w-xl">
      <h2 class="font-semibold">New Normal &bullet; COVID-19</h2>
      <hr class="my-2" />
      <p class="text-gray-600">
        Sebagai bentuk komitmen kami untuk patuh terhadap protokol kesehatan
        <em>New Normal,</em>
        kami melakukan perubahan jadwal praktek mulai tanggal 29 Juni 2020. Kami
        buka praktik dari hari Senin hingga Jum'at dari pukul 08.00 hingga 13.00
        WIB dan hari Sabtu jadwal khusus konsultan dari pukul 08.00 hingga
        selesai.
      </p>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="schedule-container">
      {#each schedules as sch}
        <div
          class="relative schedule-item {sch.time ? 'border-green-300' : 'border-red-300'}
          {sch.info ? 'bg-green-100' : ''}">
          <p class="font-semibold underline">{sch.day}</p>
          <p class="text-gray-700 uppercase text-xs md:text-base">
            {sch.time ? sch.time : 'tutup'}
          </p>
          {#if sch.info}
            <div class="absolute">
              <div class="schedule-info">
                <p class="text-gray-600 text-sm">{sch.info}</p>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>

</section>
