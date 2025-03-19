export interface SingleCatalogProduct {
	data: {
		id: number;
		main_category_id: number;
		type: string;
		name: string;
		brand: string;
		model: string;
		image: string;
		variant_count: number;
		is_discontinued: boolean;
		description: string;
		sizes: string[];
		colors: {
			name: string;
			value: string;
		}[];
		techniques: {
			key: string;
			display_name: string;
			is_default: boolean;
		}[];
		placements: {
			placement: string;
			technique: string;
			print_area_width: number;
			print_area_height: number;
			layers: {
				type: string;
				layer_options: {
					name: string;
					techniques: string[];
					type: string;
					values: (boolean | string | number)[];
				}[];
			}[];
			placement_options: {
				name: string;
				techniques: string[];
				type: string;
				values: (boolean | string | number)[];
			}[];
			conflicting_placements: string[];
		}[];
		product_options: {
			name: string;
			techniques: string[];
			type: string;
			values: string[];
		}[];
		_links: {
			self: {
				href: string;
			};
			variants: {
				href: string;
			};
			categories: {
				href: string;
			};
			product_prices: {
				href: string;
			};
			product_sizes: {
				href: string;
			};
			product_images: {
				href: string;
			};
			availability: {
				href: string;
			};
		};
	};
}

export interface MockupTemplateSingleCatalogProduct {
	data: {
		catalog_variant_ids: number[];
		placement: string;
		technique: string;
		image_url: string;
		background_url: string | null;
		background_color: string | null;
		template_width: number;
		template_height: number;
		print_area_width: number;
		print_area_height: number;
		print_area_top: number;
		print_area_left: number;
		template_positioning: string;
		orientation: string;
		template_type: string;
		role: string;
	}[];
	paging: {
		total: number;
		offset: number;
		limit: number;
	};
	_links: {
		self: {
			href: string;
		};
		next?: {
			href: string;
		};
		previous?: {
			href: string;
		};
		first: {
			href: string;
		};
		last: {
			href: string;
		};
		product: {
			href: string;
		};
	};
}
