<script>
	import dr_ak from '$lib/assets/physician__dr-ak.png';
	import dr_desfri from '$lib/assets/physician__dr-desfri.png';
	import dr_reza from '$lib/assets/physician__dr-reza.png';
	import dr_usman from '$lib/assets/physician__dr-usman.png';
	import dr_wini from '$lib/assets/physician__dr-wini.png';
	import dr_wulan from '$lib/assets/physician__dr-wulan.png';

	const physicians = [
		// name, specialistic, image, classes
		[
			'dr. H. AK. Ansyori, Sp.M(K)., M.Kes., MARS., PhD',
			'Spesialis Mata Konsultan Vitreoretina',
			dr_ak,
			'md:col-span-3'
		],
		[
			'dr. Wini Putria Marindah, Sp.M, MARS, FISQua.', //
			'Spesialis Mata',
			dr_wini,
			'md:col-span-2'
		],
		[
			'dr. M. Usman Salim, Sp.M', //
			'Spesialis Mata',
			dr_usman,
			'md:col-span-2'
		],
		[
			'dr. Desfri Angraini, Sp.M', //
			'Spesialis Mata',
			dr_desfri,
			'md:col-span-2'
		],
		[
			'dr. Kartini Wulan, Sp.M', //
			'Spesialis Mata',
			dr_wulan,
			'md:col-span-2'
		],
		[
			'dr. M. Reza Arlas, Sp.M', //
			'Spesialis Mata',
			dr_reza,
			'md:col-span-2'
		]
	];
</script>

<section
	id="physicians"
	class="py-16 bg-gradient-to-rb from-emerald-100 via-pink-100 to-violet-200"
>
	<p class="m-4 md:m-8 text-center text-3xl font-bold uppercase">Dokter Spesialis</p>
	<article class="flex flex-wrap justify-center gap-8 gap-x-16 mb-16 max-w-4xl md:(mt-16 mb-36 mx-a)">
		{#each physicians as [name, specialistic, image, classes]}
			<section class="p-4 text-center {classes}">
				<picture class="flex justify-center">
					<img
						class="object-contain rounded-full border-8 border-white
							shadow bg-default h-48 w-48 m-2"
						src={image}
						alt="{name} - {specialistic}"
					/>
				</picture>
				<p class="font-semibold text-lg">{name}</p>
				<hr class="border-emerald-300 max-w-48 mx-a" />
				<p class="text-neutral-500">{specialistic}</p>
			</section>
		{/each}
	</article>
</section>
