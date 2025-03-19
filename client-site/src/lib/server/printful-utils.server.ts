import { PRINTFUL_API_KEY } from '$env/static/private';
import type {
	SingleCatalogProduct,
	MockupTemplateSingleCatalogProduct
} from '$lib/types/printful-types';

const PRINTFUL_API_ENDPOINT = 'https://api.printful.com/v2';

export const getSingleCatalogProduct = async (productId: string) => {
	const response = await fetch(`${PRINTFUL_API_ENDPOINT}/catalog-products/${productId}`, {
		headers: {
			Authorization: `Bearer ${PRINTFUL_API_KEY}`
		}
	});
	const data = await response.json();
	return data as SingleCatalogProduct;
};

export const getProductMockupTemplate = async (productId: string) => {
	const response = await fetch(
		`${PRINTFUL_API_ENDPOINT}/catalog-products/${productId}/mockup-templates`,
		{
			headers: {
				Authorization: `Bearer ${PRINTFUL_API_KEY}`
			}
		}
	);
	const data = await response.json();
	return data as MockupTemplateSingleCatalogProduct;
};
