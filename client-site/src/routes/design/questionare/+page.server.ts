import type { PageServerLoad } from './$types';
import { PRINTIFY_FULL_SCOPE_ACCESS } from '$env/static/private';

// Base API endpoint for Printify API
const BASE_API_ENDPOINT = 'https://api.printify.com/v1/';

// Helper function to fetch data from Printify API
async function fetchFromPrintify(endpoint: string) {
	const url = `${BASE_API_ENDPOINT}${endpoint}`;
	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${PRINTIFY_FULL_SCOPE_ACCESS}`,
			'Content-Type': 'application/json',
			'cache-control': 'max-age=3600' // attempt to cache using response headers (NEED TO TEST or look into how sveltekit handles caching)
		},
		cache: 'force-cache' // another way of caching via fetch options (NEED TO TEST or look into how sveltekit handles caching)
	});

	if (!response.ok) {
		throw new Error(`Printify API error: ${response.status} ${response.statusText}`);
	}

	return await response.json();
}

/**
 * Server load function that fetches product catalog from Printify
 * Returns the catalog data to be used by the page component
 */
export const load: PageServerLoad = async ({ params }) => {
	const catalog = await fetchFromPrintify('catalog/blueprints.json');
	return {
		catalog
	};
};
