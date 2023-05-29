<script>
	import { navigating } from '$app/stores';
	import { derived } from 'svelte/store';

	const delayed_navigating = derived(navigating, (nav, set) => {
		setTimeout(() => set(nav), 250);
	});
</script>

{#if !!$navigating && !!$delayed_navigating}
	<div
		class="fixed top-0 left-0 z-110 flex bg-emerald-600/10 h-1 m-0 w-full
			before:(h-1 m-0 w-full bg-emerald-600/70 content-empty)"
		role="progressbar"
	/>
{/if}

<style>
	div[role='progressbar']:before {
		animation: animate-progress 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}

	@keyframes animate-progress {
		0% {
			transform: translateX(-45%) scaleX(0.1);
		}
		50% {
			transform: translateX(10%) scaleX(0.5);
		}
		100% {
			transform: translateX(50%) scaleX(0);
		}
	}
</style>
