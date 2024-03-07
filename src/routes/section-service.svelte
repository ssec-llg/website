<script>
	import fundus from '$lib/assets/service__fundus.jpg';
	import nd_yag from '$lib/assets/service__nd-yag.jpg';
	import pascal from '$lib/assets/service__pascal.jpg';
	import slitlamp from '$lib/assets/service__slitlamp.jpg';
	import specular from '$lib/assets/service__specular-microscope.jpg';
	import tonometri from '$lib/assets/service__tonometri.jpg';
	import usg_mata from '$lib/assets/service__usg-mata.jpg';
	import phaco from '$lib/assets/service__phaco.jpg';

	const pictures = [
		// classes, image, alt
		['-rotate-3', slitlamp, 'Slitlamp'],
		['rotate-4', fundus, 'Fotofundus'],
		['-rotate-3', usg_mata, 'USG Mata'],
		['-mt-2 rotate-2', tonometri, 'Tonometri'],
		['-rotate-1', pascal, 'Laser Pascal'],
		['rotate-2', specular, 'Specular Microscope'],
		['-mt-4 -rotate-2 row-span-3 col-span-2', phaco, 'Phaco emulsification'],
		['rotate-2 row-span-2', nd_yag, 'Laser Nd-YAG']
	];
</script>

<section id="services" class="py-16 bg-zinc-200/50">
	<p class="m-4 md:m-8 text-center text-3xl font-bold uppercase">Pelayanan Kami</p>
	<article class="grid md:grid-cols-2 mx-8 mb-16 md:(mt-16 mb-36 px-8 mx-a) max-w-5xl">
		<!-- services text detail -->
		<section class="space-y-4">
			<article>
				<p class="font-semibold text-xl">Pelayanan Kesehatan Mata</p>
				<ol class="list-disc ml-4.5 text-lg">
					<li>Katarak dan Bedah Refraktif</li>
					<li>Medical, Bedah Retina, & Laser Fotokoagulasi Retina</li>
					<li>Infeksi Imunologi</li>
					<li>Spesialistik Mata Umum</li>
				</ol>
			</article>

			<article>
				<p class="font-semibold text-xl">Pelayanan Laser</p>
				<ol class="list-disc ml-4.5 text-lg">
					<li>PASCAL Fotokoagulasi Retina</li>
					<li>NdYAG Laser Katarak Sekunder</li>
					<li>Laser Iridotomi</li>
				</ol>
			</article>

			<article>
				<p class="font-semibold text-xl">Alat Diagnosis Canggih</p>
				<ol class="list-disc ml-4.5 text-lg">
					<li>USG A/B Scan</li>
					<li>Funduskopi Indirect</li>
					<li>Fotofundus Retina</li>
					<li>Biometri</li>
					<li>Kornea Topografi</li>
					<li>Specular Microscope</li>
				</ol>
			</article>
		</section>

		<!-- service images -->
		<section class="grid grid-cols-3 gap-2 mt-8 md:mt-0 content-start">
			{#each pictures as [classes, src, alt]}
				<img class="border-4 border-white shadow {classes}" {src} {alt} />
			{/each}
		</section>
	</article>
</section>
