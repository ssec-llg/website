<script>
	import { fade, fly } from 'svelte/transition';

	let sidebar_shown = false;
	const menu = [
		['#services', 'Pelayanan', 'icon-medical-services'],
		['#physicians', 'Dokter Spesialis', 'icon-group'],
		['#contacts', 'Kontak', 'icon-contacts']
	];
</script>

<nav class="absolute top-0 left-0 w-full flex justify-between p-4 md:p-8">
	<!-- left side -->
	<section>
		<a class="flex items-center space-x-2 p-4" href="/">
			<div class="i-brand-ssec?mask fill-current h-10 w-14 md:(h-10 w-16) text-emerald-500" />
		</a>
	</section>

	<!-- right side -->
	<section class="flex items-center justify-end space-x-6 w-full">
		<!-- mobile toggle menu -->
		<button
			class="text-3xl leading-none p-4 bg-transparent md:hidden"
			on:click={() => (sidebar_shown = true)}
		>
			<div class="icon-menu" />
		</button>

		<!-- tablet or desktop menu -->
		<article class="space-x-4">
			{#each menu as [href, text]}
				<a
					class="text-xl leading-none font-semibold uppercase p-4 hidden
						md:(inline) hover:(opacity-70 underline)"
					on:click={() => (sidebar_shown = false)}
					data-sveltekit-replacestate
					{href}
				>
					<span>{text}</span>
				</a>
			{/each}
		</article>
	</section>
</nav>

{#if sidebar_shown}
	<aside
		class="fixed top-0 left-0 h-full w-full z-10 bg-neutral-400/50"
		transition:fade|local
		on:click|self={() => (sidebar_shown = false)}
		on:keydown={(e) => e.key === 'Escape' && (sidebar_shown = false)}
	>
		<article
			transition:fly|local={{ x: -100 }}
			class="border-r shadow-2xl h-full w-[75%] bg-default p-8"
		>
			{#each menu as [href, text, icon]}
				<a
					class="flex items-center space-x-2 text-lg leading-none font-semibold uppercase py-2"
					on:click={() => (sidebar_shown = false)}
					data-sveltekit-replacestate
					{href}
				>
					<div class={icon} />
					<span>{text}</span>
				</a>
			{/each}
		</article>
	</aside>
{/if}
