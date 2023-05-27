<script>
	import { page } from '$app/stores';
	import { PUBLIC_APP_NAME } from '$env/static/public';
	// fonts
	import '@fontsource/chivo-mono';
	import '@fontsource/figtree';
	// css reset
	import '@unocss/reset/tailwind-compat.css';
	// app style
	import '$src/app.css';
	// unocss
	import 'virtual:uno.css';
</script>

<svelte:head>
	{#if $page.data}
		{@const { title, description } = $page.data.page_meta ?? {}}
		<title>{title ? title + ' - ' : ''}{PUBLIC_APP_NAME}</title>
		<meta
			name="description"
			content={description ?? 'Silampari Sriwijaya Eye Centre official website'}
		/>
	{/if}
</svelte:head>

<slot />
