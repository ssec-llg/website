<script>
	import fundus from '$lib/assets/service__fundus.jpg';
	import nd_yag from '$lib/assets/service__nd-yag.jpg';
	import pascal from '$lib/assets/service__pascal.jpg';
	import slitlamp from '$lib/assets/service__slitlamp.jpg';
	import specular from '$lib/assets/service__specular-microscope.jpg';
	import tonometri from '$lib/assets/service__tonometri.jpg';
	import usg_mata from '$lib/assets/service__usg-mata.jpg';
</script>

<section id="services" class="py-16">	
	<p class="m-4 md:m-8 text-center text-3xl font-bold uppercase">Pelayanan Kami</p>
	<article class="grid md:grid-cols-2 mx-8 mb-16 md:(mt-16 mb-36)">
		<!-- services text detail -->
		<section class="space-y-4">
			<article>
				<p class="font-semibold text-xl">Pelayanan Kesehatan Mata</p>
				<ol class="list-disc ml-4.5">
					<li>Katarak dan Bedah Refraktif</li>
					<li>Medical, Bedah Retina, & Laser Fotokoagulasi Retina</li>
					<li>Glaucoma</li>
					<li>Onkologi (Tumor Mata)</li>
					<li>Rekontruksi (Bedah Plastik Mata)</li>
					<li>Infeksi Imunologi</li>
					<li>Spesialistik Mata Umum</li>
				</ol>
			</article>

			<article>
				<p class="font-semibold text-xl">Pelayanan Laser</p>
				<ol class="list-disc ml-4.5">
					<li>PASCAL Fotokoagulasi Retina</li>
					<li>NdYAG Laser Katarak Sekunder</li>
					<li>Laser Iridotomi</li>
				</ol>
			</article>

			<article>
				<p class="font-semibold text-xl">Alat Diagnosis Canggih</p>
				<ol class="list-disc ml-4.5">
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
		<section class="grid grid-cols-3 gap-2 mt-8 md:mt-0">
			<img class="-rotate-4" src={fundus} alt="Fotofundus" />
			<img class="rotate-2 row-span-2" src={nd_yag} alt="Laser Nd-YAG" />
			<img class="-rotate-1" src={pascal} alt="Laser Pascal" />
			<img class="rotate-3" src={slitlamp} alt="Slitlamp" />
			<img class="rotate-2 row-span-2" src={specular} alt="Specular Microscope" />
			<img class="-rotate-2" src={tonometri} alt="Tonometri" />
			<img class="-mt-4 rotate-3" src={usg_mata} alt="USG Mata" />
		</section>
	</article>
</section>
