<script lang="ts">
	let { data } = $props();
	let product = $derived(data.product.data);

	// Variables for questions
	let selectedProductId: number | undefined = $state();
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="mb-6 text-3xl font-bold text-gray-800">Printful Product Information</h1>

	{#if product}
		<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
			<h2 class="mb-4 text-2xl font-semibold text-gray-700">{product.name}</h2>

			<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<p class="mb-2"><span class="font-semibold">ID:</span> {product.id}</p>
					<p class="mb-2">
						<span class="font-semibold">Main Category ID:</span>
						{product.main_category_id}
					</p>
					<p class="mb-2"><span class="font-semibold">Type:</span> {product.type}</p>
					<p class="mb-2"><span class="font-semibold">Name:</span> {product.name}</p>
					<p class="mb-2"><span class="font-semibold">Brand:</span> {product.brand}</p>
					<p class="mb-2"><span class="font-semibold">Model:</span> {product.model}</p>
					<p class="mb-2">
						<span class="font-semibold">Variant Count:</span>
						{product.variant_count}
					</p>
					<p class="mb-2">
						<span class="font-semibold">Is Discontinued:</span>
						{product.is_discontinued ? 'Yes' : 'No'}
					</p>
					<p class="mb-2"><span class="font-semibold">Description:</span> {product.description}</p>
				</div>

				<div>
					{#if product.image}
						<div class="mb-4">
							<img src={product.image} alt={product.name} class="max-w-xs rounded-md shadow-sm" />
						</div>
					{/if}
				</div>
			</div>

			{#if product.sizes && product.sizes.length > 0}
				<div class="mb-6">
					<h3 class="mb-3 text-xl font-semibold text-gray-700">Available Sizes</h3>
					<div class="flex flex-wrap gap-2">
						{#each product.sizes as size}
							<span class="rounded-full bg-gray-100 px-3 py-1 text-sm">{size}</span>
						{/each}
					</div>
				</div>
			{/if}

			{#if product.colors && product.colors.length > 0}
				<div class="mb-6">
					<h3 class="mb-3 text-xl font-semibold text-gray-700">Colors</h3>
					<div class="flex flex-wrap gap-2">
						{#each product.colors as color}
							<div class="flex items-center gap-2">
								<div class="h-6 w-6 rounded-full" style="background-color: {color.value}"></div>
								<span class="text-sm">{color.name}</span>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			{#if product.techniques && product.techniques.length > 0}
				<div class="mb-6">
					<h3 class="mb-3 text-xl font-semibold text-gray-700">Techniques</h3>
					<div class="space-y-2">
						{#each product.techniques as technique}
							<div class="rounded-md bg-gray-50 p-3">
								<p><span class="font-semibold">Key:</span> {technique.key}</p>
								<p><span class="font-semibold">Display Name:</span> {technique.display_name}</p>
								<p>
									<span class="font-semibold">Is Default:</span>
									{technique.is_default ? 'Yes' : 'No'}
								</p>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			{#if product.placements && product.placements.length > 0}
				<div class="mb-6">
					<h3 class="mb-3 text-xl font-semibold text-gray-700">Placements</h3>
					<div class="space-y-4">
						{#each product.placements as placement}
							<div class="rounded-md bg-gray-50 p-4">
								<p class="mb-2">
									<span class="font-semibold">Placement:</span>
									{placement.placement}
								</p>
								<p class="mb-2">
									<span class="font-semibold">Technique:</span>
									{placement.technique}
								</p>
								<p class="mb-2">
									<span class="font-semibold">Print Area:</span>
									{placement.print_area_width} x {placement.print_area_height}
								</p>

								{#if placement.layers && placement.layers.length > 0}
									<div class="mt-3">
										<h4 class="mb-2 font-medium text-gray-700">Layers</h4>
										<div class="space-y-2">
											{#each placement.layers as layer}
												<div class="rounded bg-gray-100 p-2">
													<p><span class="font-semibold">Type:</span> {layer.type}</p>
													{#if layer.layer_options && layer.layer_options.length > 0}
														<div class="mt-2 pl-3">
															<p class="font-medium">Layer Options:</p>
															{#each layer.layer_options as option}
																<div class="mt-1 rounded bg-gray-200 p-2">
																	<p><span class="font-semibold">Name:</span> {option.name}</p>
																	<p><span class="font-semibold">Type:</span> {option.type}</p>
																	{#if option.techniques && option.techniques.length > 0}
																		<p>
																			<span class="font-semibold">Techniques:</span>
																			{option.techniques.join(', ')}
																		</p>
																	{/if}
																	{#if option.values && option.values.length > 0}
																		<p>
																			<span class="font-semibold">Values:</span>
																			{option.values.join(', ')}
																		</p>
																	{/if}
																</div>
															{/each}
														</div>
													{/if}
												</div>
											{/each}
										</div>
									</div>
								{/if}

								{#if placement.placement_options && placement.placement_options.length > 0}
									<div class="mt-3">
										<h4 class="mb-2 font-medium text-gray-700">Placement Options</h4>
										<div class="space-y-2">
											{#each placement.placement_options as option}
												<div class="rounded bg-gray-100 p-2">
													<p><span class="font-semibold">Name:</span> {option.name}</p>
													<p><span class="font-semibold">Type:</span> {option.type}</p>
													{#if option.techniques && option.techniques.length > 0}
														<p>
															<span class="font-semibold">Techniques:</span>
															{option.techniques.join(', ')}
														</p>
													{/if}
													{#if option.values && option.values.length > 0}
														<p>
															<span class="font-semibold">Values:</span>
															{option.values.join(', ')}
														</p>
													{/if}
												</div>
											{/each}
										</div>
									</div>
								{/if}

								{#if placement.conflicting_placements && placement.conflicting_placements.length > 0}
									<div class="mt-3">
										<h4 class="mb-2 font-medium text-gray-700">Conflicting Placements</h4>
										<ul class="list-disc space-y-1 pl-5">
											{#each placement.conflicting_placements as conflict}
												<li class="text-sm text-gray-600">{conflict}</li>
											{/each}
										</ul>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/if}

			{#if product.product_options && product.product_options.length > 0}
				<div class="mb-6">
					<h3 class="mb-3 text-xl font-semibold text-gray-700">Product Options</h3>
					<div class="space-y-4">
						{#each product.product_options as option}
							<div class="rounded-md bg-gray-50 p-4">
								<p class="mb-2"><span class="font-semibold">Name:</span> {option.name}</p>
								<p class="mb-2"><span class="font-semibold">Type:</span> {option.type}</p>
								{#if option.techniques && option.techniques.length > 0}
									<p class="mb-2">
										<span class="font-semibold">Techniques:</span>
										{option.techniques.join(', ')}
									</p>
								{/if}
								{#if option.values && option.values.length > 0}
									<div class="mt-3">
										<h4 class="mb-2 font-medium text-gray-700">Values</h4>
										<div class="flex flex-wrap gap-2">
											{#each option.values as value}
												<span class="rounded-full bg-gray-200 px-3 py-1 text-sm">{value}</span>
											{/each}
										</div>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/if}

			{#if product._links}
				<div class="mb-6">
					<h3 class="mb-3 text-xl font-semibold text-gray-700">API Links</h3>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						{#if product._links.self}
							<p class="mb-2">
								<span class="font-semibold">Self:</span>
								{product._links.self.href}
							</p>
						{/if}
						{#if product._links.variants}
							<p class="mb-2">
								<span class="font-semibold">Variants:</span>
								{product._links.variants.href}
							</p>
						{/if}
						{#if product._links.categories}
							<p class="mb-2">
								<span class="font-semibold">Categories:</span>
								{product._links.categories.href}
							</p>
						{/if}
						{#if product._links.product_prices}
							<p class="mb-2">
								<span class="font-semibold">Product Prices:</span>
								{product._links.product_prices.href}
							</p>
						{/if}
						{#if product._links.product_sizes}
							<p class="mb-2">
								<span class="font-semibold">Product Sizes:</span>
								{product._links.product_sizes.href}
							</p>
						{/if}
						{#if product._links.product_images}
							<p class="mb-2">
								<span class="font-semibold">Product Images:</span>
								{product._links.product_images.href}
							</p>
						{/if}
						{#if product._links.availability}
							<p class="mb-2">
								<span class="font-semibold">Availability:</span>
								{product._links.availability.href}
							</p>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	{:else}
		<div class="mb-6 border-l-4 border-yellow-400 bg-yellow-50 p-4">
			<p class="text-yellow-700">No product data available</p>
		</div>
	{/if}
</div>
