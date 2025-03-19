import { getProductMockupTemplate } from '$lib/server/printful-utils.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const productId = params.productId;
	const mockupTemplate = await getProductMockupTemplate(productId);
	return {
		mockupTemplate
	};
};
