<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import type { SingleCatalogProduct } from '$lib/types/printful-types.js';
	import { fade } from 'svelte/transition';

	let { data }: { data: { products: SingleCatalogProduct[] } } = $props();
	let products = $derived(data.products);

	// Search functionality
	let searchQuery = $state('');
	let filteredProducts = $derived(
		searchQuery
			? products.filter((product) =>
					product.data.name.toLowerCase().includes(searchQuery.toLowerCase())
				)
			: products
	);
</script>

<!-- Header -->
<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
	<img
		src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
		alt=""
		class="absolute inset-0 -z-10 size-full object-cover"
	/>
	<div
		class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
		aria-hidden="true"
	>
		<div
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div
		class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
		aria-hidden="true"
	>
		<div
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
			Start Designing Now
		</h2>
		<p class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
			Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
			sunt amet fugiat veniam occaecat fugiat.
		</p>
	</div>
</div>

<!-- Product Catalog -->
<div class="bg-white">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div class="sm:flex sm:items-baseline sm:justify-between">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900">
				Choose what you want to design
			</h2>
			<!-- <a href="#" class="hidden text-sm font-semibold text-green-600 hover:text-green-500 sm:block">
				Browse all favorites
				<span aria-hidden="true"> &rarr;</span>
			</a> -->
		</div>

		<!-- Search input -->
		<div class="mt-6 mb-8">
			<div class="relative rounded-md shadow-sm">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<svg
						class="h-5 w-5 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search products..."
					class="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-green-300 focus:ring-inset sm:text-sm sm:leading-6"
				/>
			</div>
		</div>

		<!-- No results message -->
		{#if filteredProducts.length === 0}
			<div class="py-12 text-center">
				<p class="text-lg text-gray-500">No products found matching "{searchQuery}"</p>
				<button
					onclick={() => (searchQuery = '')}
					class="mt-4 inline-flex items-center rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
				>
					Clear search
				</button>
			</div>
		{/if}

		<div
			class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8 lg:gap-y-12"
		>
			{#each filteredProducts as product}
				<div class="group relative transition-transform duration-300 hover:scale-105">
					{#key product.data.image}
						<img
							src={product.data.image}
							alt="Model wearing women&#039;s black cotton crewneck tee."
							class="h-96 w-full rounded-lg object-cover transition-all duration-300 group-hover:opacity-75 group-hover:shadow-lg sm:aspect-[2/3] sm:h-auto"
							in:fade={{ duration: 300 }}
						/>
					{/key}
					<h3
						class="mt-4 text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-600"
					>
						<a href={`/printful-demo/design-maker/${product.data.id}`}>
							<span class="absolute inset-0"></span>
							{product.data.name}
						</a>
					</h3>
				</div>
			{/each}
		</div>
	</div>
</div>
