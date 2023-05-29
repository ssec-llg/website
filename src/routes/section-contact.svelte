<script>
	import ssec_map from '$lib/assets/contact__map.png';

	const contacts = [
		// text, icon, href, classes
		[
			'Instagram', //
			'icon-favorite-outline',
			'https://instagram.com/ssec.llg',
			'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white'
		],
		[
			'Facebook', //
			'icon-thumb-up-outline',
			'https://fb.com/ssec.llg',
			'bg-gradient-to-r from-blue-500 to-blue-400 text-white'
		],
		[
			'WhatsApp', //
			'icon-chat-bubble-outline',
			'https://wa.me/6285156200678',
			'bg-gradient-to-r from-green-600 to-green-400 text-white'
		],
		[
			'Telepon', //
			'icon-call-outline',
			'tel:07333286255',
			'bg-gradient-to-r from-pink-600 to-pink-400 text-white'
		]
	];
</script>

<section id="contacts" class="py-16">
	<p class="m-4 md:m-8 text-center text-3xl font-bold uppercase">Kontak Kami</p>
	<article class="grid md:grid-cols-2 mx-8 mb-16 md:(mt-16 mb-36 mx-a) max-w-5xl">
		<!-- service images -->
		<section class="m-4 md:m-8">
			<a href="https://goo.gl/maps/hvY41uYpvfMQU8GX8" target="_blank" rel="noopener noreferrer">
				<img
					class="border-4 rounded shadow -rotate-2 transition-all duration-150
						hover:(rotate-2 shadow-lg)"
					alt="Lokasi atau map SSEC"
					src={ssec_map}
				/>
			</a>
		</section>

		<!-- contacts text detail -->
		<section class="m-4 md:m-8">
			<p class="text-xl text-center md:text-left">
				Jl. Yos Sudarso No. 80, RT. 07, Kel. Taba Pingin, Kota Lubuklinggau, Sumatra Selatan, 31625
			</p>
			<ol class="grid grid-cols-2 md:grid-cols-none gap-2 mt-2">
				{#each contacts as [text, icon, href, classes]}
					<li class="max-w-56 text-xl border rounded {classes}">
						<a
							class="flex items-center space-x-2 p-2"
							rel="noopener noreferrer"
							target="_blank"
							{href}
						>
							<div class={icon} />
							<span>{text}</span>
						</a>
					</li>
				{/each}
			</ol>
		</section>
	</article>
</section>
