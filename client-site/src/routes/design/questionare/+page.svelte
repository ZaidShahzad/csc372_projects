<script lang="ts">
	import { onMount } from 'svelte';

	let { data } = $props();
	let searchQuery = $state('');
	let currentPage = $state(1);
	let productsPerPage = 10;
	let filteredProducts = $state<typeof data.catalog>([]);
	let selectedImageIndex = $state<Record<string | number, number>>({});
	let isLoading = $state(true);

	// Initialize selected image index for each product
	onMount(() => {
		if (data.catalog && Array.isArray(data.catalog)) {
			data.catalog.forEach((product: any) => {
				selectedImageIndex[product.id] = 0;
			});
			updateFilteredProducts();
			isLoading = false;
		} else {
			console.error('Catalog data is not available or not in expected format', data);
		}
	});

	// Update filtered products when search query changes
	function updateFilteredProducts() {
		if (!data.catalog || !Array.isArray(data.catalog)) {
			filteredProducts = [];
			return;
		}

		if (!searchQuery.trim()) {
			filteredProducts = [...data.catalog];
		} else {
			const query = searchQuery.toLowerCase();
			filteredProducts = data.catalog.filter(
				(product: any) =>
					product.title?.toLowerCase().includes(query) ||
					product.description?.toLowerCase().includes(query) ||
					product.brand?.toLowerCase().includes(query)
			);
		}
	}

	// Handle search input
	function handleSearch() {
		currentPage = 1;
		updateFilteredProducts();
	}

	// Set selected image for a product
	function selectImage(productId: string | number, index: number) {
		selectedImageIndex[productId] = index;
	}

	// Pagination calculations
	const totalPages = $derived(Math.ceil(filteredProducts.length / productsPerPage));
	const paginatedProducts = $derived(
		filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
	);

	// Page navigation
	function goToPage(page: number) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
		}
	}
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="container mx-auto px-4 py-8">
	<!-- Search bar -->
	<div class="mb-8">
		<div class="relative mx-auto max-w-md">
			<input
				type="text"
				bind:value={searchQuery}
				oninput={handleSearch}
				placeholder="Search products..."
				class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500"
			/>

			<button
				class="absolute top-1/2 right-2 -translate-y-1/2 p-2 text-gray-500"
				onclick={handleSearch}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
		</div>
	</div>

	<!-- Products grid -->
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#if isLoading}
			<div class="col-span-full py-12 text-center">
				<div
					class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-green-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
				></div>
				<p class="mt-4 text-lg text-gray-600">Loading products...</p>
			</div>
		{:else if paginatedProducts.length === 0}
			<div class="col-span-full py-12 text-center">
				<p class="text-lg text-gray-600">No products found. Try a different search term.</p>
			</div>
		{:else}
			{#each paginatedProducts as product (product.id)}
				<div
					class="overflow-hidden rounded-lg border border-gray-200 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
				>
					<div class="relative">
						<img
							src={product.images?.[selectedImageIndex[product.id] || 0] || ''}
							alt={product.title}
							class="h-64 w-full object-cover"
						/>
					</div>
					<div class="p-4">
						<h2 class="mb-2 text-xl font-semibold">{product.title || 'Untitled Product'}</h2>
						<p class="mb-2 text-sm text-gray-500">
							{product.brand || 'Unknown Brand'} - Model {product.model || 'N/A'}
						</p>
						<p class="line-clamp-3 text-gray-700">
							{product.description || 'No description available'}
						</p>
					</div>
				</div>
			{/each}
		{/if}
	</div>

	<!-- Pagination -->
	{#if totalPages > 1 && !isLoading}
		<div class="mt-12 flex items-center justify-center space-x-2">
			<button
				onclick={() => goToPage(currentPage - 1)}
				disabled={currentPage === 1}
				class="rounded border border-gray-300 px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
			>
				Previous
			</button>

			{#if totalPages <= 7}
				{#each Array(totalPages) as _, i}
					<button
						onclick={() => goToPage(i + 1)}
						class={`h-8 w-8 rounded-full ${currentPage === i + 1 ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
					>
						{i + 1}
					</button>
				{/each}
			{:else}
				<!-- First page -->
				<button
					onclick={() => goToPage(1)}
					class={`h-8 w-8 rounded-full ${currentPage === 1 ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
				>
					1
				</button>

				<!-- Ellipsis if needed -->
				{#if currentPage > 3}
					<span class="px-1">...</span>
				{/if}

				<!-- Pages around current page -->
				{#each Array(3) as _, i}
					{#if currentPage - 1 + i > 1 && currentPage - 1 + i < totalPages}
						<button
							onclick={() => goToPage(currentPage - 1 + i)}
							class={`h-8 w-8 rounded-full ${currentPage === currentPage - 1 + i ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
						>
							{currentPage - 1 + i}
						</button>
					{/if}
				{/each}

				<!-- Ellipsis if needed -->
				{#if currentPage < totalPages - 2}
					<span class="px-1">...</span>
				{/if}

				<!-- Last page -->
				<button
					onclick={() => goToPage(totalPages)}
					class={`h-8 w-8 rounded-full ${currentPage === totalPages ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
				>
					{totalPages}
				</button>
			{/if}

			<button
				onclick={() => goToPage(currentPage + 1)}
				disabled={currentPage === totalPages}
				class="rounded border border-gray-300 px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
			>
				Next
			</button>
		</div>
	{/if}

	<!-- Products count -->
	{#if !isLoading && filteredProducts.length > 0}
		<div class="mt-4 text-center text-sm text-gray-500">
			Showing {Math.min((currentPage - 1) * productsPerPage + 1, filteredProducts.length)} to {Math.min(
				currentPage * productsPerPage,
				filteredProducts.length
			)} of {filteredProducts.length} products
		</div>
	{/if}
</div>
