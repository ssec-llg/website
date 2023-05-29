<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	/** @type {boolean} */ let sidebar_shown = false;
	/** @type {boolean} */ let lift = false;
	/** @type {string | undefined} */ let active_section_id;

	const menu = [
		['#services', 'Pelayanan', 'icon-medical-services'],
		['#physicians', 'Dokter Spesialis', 'icon-group'],
		['#contacts', 'Kontak', 'icon-contacts']
	];

	function setup_menu_states() {
		if (!browser) return;
		const menu_sections_ids = menu.map((r) => r[0]).join(', ');
		const menu_sections = document.querySelectorAll(menu_sections_ids);
		const menu_observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						active_section_id = '#' + entry.target.id;
					} else if (active_section_id === entry.target.id || !lift) {
						active_section_id = undefined;
					}
				}
			},
			{ root: null, rootMargin: '0px', threshold: 0.5 }
		);
		for (const section of menu_sections) {
			menu_observer.observe(section);
		}
	}

	function set_lift_state() {
		if (!browser) return;
		const scrolled_height = window.pageYOffset;
		const viewport_height = window.innerHeight;
		// is scrolled more than the height of the screen
		lift = scrolled_height > viewport_height - 10;
	}

	onMount(() => {
		setup_menu_states();
		set_lift_state();
	});
</script>

<svelte:window on:scroll|passive={set_lift_state} />

<nav
	class="{lift
		? 'fixed md:px-4 border-b shadow bg-default'
		: 'absolute p-4 md:p-8'} transition-all duration-300
		top-0 left-0 w-full flex justify-between"
>
	<!-- left side -->
	<section class="flex items-center">
		<a class="p-4 py-2" href="/">
			<div class="i-brand-ssec?mask fill-current h-10 w-14 md:(h-10 w-16) text-emerald-500" />
		</a>
		{#if active_section_id}
			{@const [, title] = menu.find((item) => item[0] === active_section_id) || []}
			<p class="font-bold text-xl md:hidden">{title ?? ''}</p>
		{/if}
	</section>

	<!-- right side -->
	<section class="flex items-center justify-end space-x-6">
		<!-- mobile toggle menu -->
		<button
			class="text-3xl leading-none p-4 py-2 bg-transparent md:hidden"
			on:click={() => (sidebar_shown = true)}
		>
			<div class="icon-menu" />
		</button>

		<!-- tablet or desktop menu -->
		<article class="space-x-4 hidden md:block">
			{#each menu as [href, text]}
				<a
					class="text-xl leading-none font-semibold uppercase p-4 hover:(opacity-70 underline)
						{active_section_id === href ? 'border-b-2 border-emerald-500' : ''}"
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
					class:text-emerald-500={active_section_id === href}
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
