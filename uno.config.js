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
