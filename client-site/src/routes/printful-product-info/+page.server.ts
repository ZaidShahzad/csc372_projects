import type { PageServerLoad } from './$types';
import { PRINTFUL_API_KEY } from '$env/static/private';
import type { SingleCatalogProduct } from '$lib/types/printful-types';

const PRINTFUL_API_ENDPOINT = 'https://api.printful.com/v2';

const getPrintfulCatalogProduct = async (productId: string) => {
	const response = await fetch(`${PRINTFUL_API_ENDPOINT}/catalog-products/${productId}`, {
		headers: {
			Authorization: `Bearer ${PRINTFUL_API_KEY}`
		}
	});
	const data = await response.json();
	return data as SingleCatalogProduct;
};

export const load: PageServerLoad = async () => {
	const product = await getPrintfulCatalogProduct('438');
	return {
		product
	};
};
