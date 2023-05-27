// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			page_meta: {
				title?: string;
				description?: string;
			};
		}
		// interface Platform {}
	}
}

export {};
