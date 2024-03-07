import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const response = await fetch(new URL(`/e-sign-${params.key}`, env.E_SIGN_API_BASE_URL));
	if (!response.ok) {
		const result = await response.json();
		throw error(response.status, result.message || response.statusText);
	}

	/** @type {ESignature} */
	const sign = await response.json();
	return { sign, page_meta: { title: 'eSign' } };
}
