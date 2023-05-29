import extractorSvelte from '@unocss/extractor-svelte';
import {
	defineConfig,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';

export default defineConfig({
	extractors: [extractorSvelte()],
	presets: [
		presetUno(),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			},
			collections: {
				brand: {
					ssec: `<svg width="243" height="125" viewBox="0 0 243 125">
						<path d="M105.123-.125C70.343-.28 37.059 12.572 7.146 37.755 2.853 41.37-.468 44.553.054 44.553c.74 0 4.135-2.03 10.444-6.241 10.905-7.282 19.057-11.876 28.356-15.984C54.11 15.589 68.39 11.724 83.875 10.141c4.665-.477 7.923-.556 16.405-.4 13.027.24 19.02.937 31.397 3.652 25.187 5.526 53.874 19.088 80.433 38.026 2.134 1.522 4.356 2.975 4.939 3.228.802.35 3.964.464 13.053.47 6.597.005 12.209-.127 12.47-.293.74-.468.348-1.457-1.005-2.537-1.372-1.094-18.125-11.846-27.164-17.433-22.608-13.973-44.635-23.736-65.97-29.24C135.53 2.286 125.98.831 112.099.08a140.676 140.676 0 0 0-6.975-.205zm22.827 28.519c-5.196-.05-9.562 1.737-13.211 5.392-3.53 3.534-5.002 7.775-4.351 12.532.556 4.069 3.665 8.353 8.06 11.104 3.796 2.378 14.513 9.643 16.952 11.494 9.12 6.919 13.263 15.828 11.974 25.745-1.28 9.847-6.451 17.789-16.404 25.192-2.78 2.068-3.334 2.583-3.345 3.105-.013.637 2.548.143 5.668-1.094 23.034-9.136 36.83-32.172 33.666-56.214-1.338-10.16-5.174-18.054-12.146-24.99-6.256-6.224-13.704-10.163-22.301-11.793a25.806 25.806 0 0 0-4.562-.473zm-23.04 1.49c-.958-.06-5.425 1.56-9.383 3.43-18.774 8.87-30.353 27.459-30.348 48.72.002 7.261 1.481 13.507 4.716 19.915 5.656 11.203 15.33 18.986 27.563 22.175 4.246 1.107 9.684 1.172 12.98.154 2.72-.84 6.085-2.999 7.871-5.05 1.798-2.063 3.572-5.962 4.048-8.898.742-4.569-.667-8.221-4.27-11.069-1.634-1.292-6.395-4.495-17.631-11.863-6.005-3.938-10.522-8.909-13.07-14.384-3.957-8.504-3.052-18.268 2.542-27.405 2.312-3.776 8.11-9.635 12.38-12.51 2.913-1.961 3.54-2.688 2.745-3.18a.319.319 0 0 0-.143-.034z"/>
					</svg>`
				}
			}
		})
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	theme: {
		fontFamily: {
			sans: ['Figtree', 'sans-serif'],
			mono: ['Chivo Mono', 'monospace']
		}
	},
	shortcuts: [
		['bg-default', 'bg-light-400 dark:bg-dark-800'],
		['text-default', 'text-neutral-700 dark:text-neutral-300'],
		[/^icon-(.*)$/, ([, c]) => `i-material-symbols-${c}`]
	]
});
