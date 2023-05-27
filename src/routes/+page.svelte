<script>
	import { fade } from 'svelte/transition';

	const menu = [
		['#services', 'Pelayanan'],
		['#physicians', 'Dokter'],
		['#contacts', 'Kontak']
	];
</script>

<nav class="absolute top-0 w-full flex justify-between p-4 md:p-8">
	<section>
		<a class="flex items-center space-x-2 p-4" href="/">
			<div class="i-brand-ssec?mask fill-current h-10 w-14 md:(h-10 w-16) text-emerald-500" />
		</a>
	</section>
	<section class="flex items-center space-x-6">
		{#each menu as [href, text]}
			<a
				class="text-xl leading-none font-semibold uppercase p-4 hidden md:block
					hover:(opacity-70 underline)"
				data-sveltekit-replacestate
				{href}
			>
				{text}
			</a>
		{/each}
		<button class="text-3xl leading-none p-4 bg-transparent md:hidden">
			<div class="icon-menu" />
		</button>
	</section>
</nav>

<article
	transition:fade
	class="h-screen bg-contain bg-no-repeat bg-right-bottom bg-[url(/bg-main-hero.svg)]"
>
	<section class="flex h-full">
		<div class="my-auto mx-8 md:ml-16">
			<p class="text-5xl mb-4 md:mb-1 font-semibold text-gray-700">
				Inovatif. Profesional. Bersahabat.
			</p>
			<p class="text-lg md:text-xl text-gray-600 md:max-w-2xl">
				Silampari Sriwijaya Eye Centre atau biasa disebut SSEC adalah Pusat Pelayanan Kesehatan
				Spesialistik Mata Terpadu (Klinik Utama Mata) yang berada di Kota
				<a
					class="underline"
					href="http://g.page/lubuklinggau"
					target="_blank"
					rel="noopener noreferrer"
				>
					Lubuklinggau,
				</a>
				Sumatra Selatan.
			</p>
			<a
				class="inline-flex space-x-2 px-6 py-3 uppercase rounded-full border border-emerald-400
					mt-4 text-white bg-emerald-400 shadow-lg hover:bg-emerald-500 md:(px-6 py-4)"
				href="#services"
			>
				<div class="icon-medical-services" />
				<span class="font-bold">Pelayanan kami</span>
			</a>
			<button
				class="inline-flex space-x-2 px-6 py-3 uppercase rounded-full border border-emerald-400
					mt-2 text-emerald-500 bg-gray-200 bg-opacity-50 shadow hover:bg-gray-300 md:(ml-2 mt-0 px-6 py-4)"
			>
				<div class="icon-near-me" />
				<span class="font-bold">Berkunjung</span>
			</button>
		</div>
	</section>

	<section id="services" class="h-screen">
		<!-- TODO	 -->
	</section>

	<section id="physicians" class="h-screen bg-pink-200">
		<!-- TODO -->
	</section>

	<section id="contacts" class="h-screen">
		<!-- TODO -->
	</section>
</article>
