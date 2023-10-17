<script>
	/** @type {Promise<PhysicianSchedule>} */
	export let schedules;
</script>

<section id="schedules" class="py-16 bg-white dark:bg-dark">
	<p class="m-4 md:m-8 text-center text-3xl font-bold uppercase">Jadwal Praktik</p>

	<article
		class="flex flex-wrap justify-center gap-2 mb-16 mx-6 max-w-4xl md:(mt-16 mb-36 mx-a gap-4)"
	>
		{#await schedules}
			<span>Loading ...</span>
		{:then s}
			{#each Object.entries(s) as [day, detail]}
				<article class="border rounded shadow w-full md:(w-inherit)">
					<p class="font-semibold text-xl p-2 px-4">{day}</p>
					<hr class="mb-2" />
					{#each detail as d}
						<section class="p-2 px-4">
							<p class="font-semibold">{d.name}</p>
							<p class="text-neutral-500">({d.time})</p>
						</section>
					{:else}
						<p class="p-2 text-center italic">Tidak ada jadwal</p>
					{/each}
				</article>
			{/each}
		{:catch e}
			<span>Error: {e?.message || 'Unknown error'}</span>
		{/await}
	</article>
</section>
