<script>
	import dr_ak from '$lib/assets/physician__dr-ak.png';
	import dr_desfri from '$lib/assets/physician__dr-desfri.png';
	import dr_faika from '$lib/assets/physician__dr-faika.png';
	import dr_fidalia from '$lib/assets/physician__dr-fidalia.png';
	import dr_reza from '$lib/assets/physician__dr-reza.png';
	import dr_usman from '$lib/assets/physician__dr-usman.png';
	import dr_wini from '$lib/assets/physician__dr-wini.png';
	import dr_wulan from '$lib/assets/physician__dr-wulan.png';

	const physicians = [
		// name, specialistic, image, classes
		[
			'DR. dr. Hj. Fidalia, Sp.M(K)', //
			'Spesialis Mata Konsultan Glaukoma',
			dr_fidalia,
			'md:col-span-3'
		],
		[
			'dr. H. AK. Ansyori, Sp.M(K)., M.Kes., MARS., PhD',
			'Spesialis Mata Konsultan Vitreoretina',
			dr_ak,
			'md:col-span-3'
		],
		[
			'dr. Wini Putria Marindah, Sp.M', //
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
			'dr. Faika Novadianaz, Sp.M', //
			'Spesialis Mata',
			dr_faika,
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

<section id="physicians" class="py-16 bg-pink-100">
	<p class="m-4 md:m-8 text-center text-3xl font-bold uppercase">Dokter Spesialis</p>
	<article class="grid justify-center gap-4 mb-16 max-w-3xl md:(grid-cols-6 mt-16 mb-36 mx-a)">
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
				<p class="font-semibold">{name}</p>
				<hr class="border-emerald-300 max-w-48 mx-a my-1" />
				<p class="text-neutral-500">{specialistic}</p>
			</section>
		{/each}
	</article>
</section>
