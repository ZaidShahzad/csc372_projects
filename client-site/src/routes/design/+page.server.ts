import { PRINTIFY_API_KEY } from '$env/static/private';
import type { Actions, RequestEvent } from '@sveltejs/kit';
export const prerender = false;

interface PrintifyImage {
	id: string;
	file_name: string;
	height: number;
	width: number;
	size: number;
	mime_type: string;
	preview_url: string;
	upload_time: string;
}

export const actions: Actions = {
	uploadToPrintify: async ({ request }: RequestEvent) => {
		try {
			const formData = await request.formData();
			const file = formData.get('file') as File;

			if (!file) {
				return {
					status: 400,
					body: { error: 'No file provided' }
				};
			}

			console.log(file);
		} catch (error) {
			console.error('Error processing Printify request:', error);
			return {
				status: 500,
				body: { error: 'Failed to process image' }
			};
		}
	}
};
