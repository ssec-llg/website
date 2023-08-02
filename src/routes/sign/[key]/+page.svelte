<script>
	import Logo from '$src/lib/component/logo.svelte';

	export let data;
</script>

<main class="flex mt-8">
	<article class="m-auto text-center">
		<section>
			<Logo class="h-24 mx-auto" name="ssec_full" />
		</section>

		<section
			class="rounded-md max-w-2xl bg-gradient-to-r
			from-red-500 via-yellow-500 to-emerald-500 p-1 m-4"
		>
			<article class="bg-default rounded p-8">
				<p class="text-xl font-semibold">{data.sign.description}</p>
				<hr class="border border-soft my-2" />

				<p>Diketahui dan disahkan oleh:</p>
				<p class="text-xl font-semibold">
					{data.sign.name_prefix || ''}
					{data.sign.full_name}
					{data.sign.name_suffix || ''}
				</p>
				{#if data.sign.sip_num}
					<p class="text-lg font-semibold">SIP: {data.sign.sip_num}</p>
				{/if}
			</article>
		</section>

		<section class="m-4">
			<Logo class="h-3 mx-auto mt-1" name="contacts" />
			<p class="text-sm">
				Jl. Yos Sudarso, No. 80, Rt. 07, Taba Pingin, Lubuklinggau Selatan II, Kota Lubuklinggau,
				31625
			</p>
		</section>
	</article>
</main>
