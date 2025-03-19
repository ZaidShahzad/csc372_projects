import type { PageServerLoad } from './$types';

import type { SingleCatalogProduct } from '$lib/types/printful-types';
import { PRODUCT_CATALOG } from '$lib/server/product-catalog.server';
import { getSingleCatalogProduct } from '$lib/server/printful-utils.server';

let products: SingleCatalogProduct[] = [];

export const load: PageServerLoad = async () => {
	products = await Promise.all(
		PRODUCT_CATALOG.map(async (product) => {
			const productData: SingleCatalogProduct = await getSingleCatalogProduct(
				product.id.toString()
			);
			productData.data.name = product.name;
			return productData;
		})
	);
	return {
		products
	};
};
