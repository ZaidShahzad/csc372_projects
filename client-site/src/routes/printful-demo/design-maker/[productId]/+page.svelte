<script>
	let { data } = $props();
	const placementTypes = ['embroidery_chest_left'];
	let selectedPlacementType = $state('embroidery_chest_left');

	let mockupImageURL = $state(data.mockupTemplate.data[0].image_url);
</script>

<div class="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
	<h1 class="mb-4 text-center text-2xl font-bold">Design Maker</h1>

	{#if data.mockupTemplate && data.mockupTemplate.data}
		<div>
			<!-- Placement Options -->
			<div class=" sm:block">
				<nav class="flex space-x-4" aria-label="Tabs">
					{#each placementTypes as placementType}
						{#if placementType === selectedPlacementType}
							<button
								class="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
								aria-current="page">{placementType}</button
							>
						{:else}
							<button
								onclick={() => (selectedPlacementType = placementType)}
								class="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
								>{placementType}</button
							>
						{/if}
					{/each}
				</nav>
			</div>

			<!-- Design Canvas-->
			<div class="relative">
				<div
					class="w-full"
					style="background-image: url('{mockupImageURL}'); background-size: contain; background-repeat: no-repeat; background-position: center;"
				>
					<canvas
						id="mockupCanvas"
						width="1000"
						height="1000"
						class="w-full border-2 border-green-500"
					></canvas>

					<div class="absolute inset-0 flex items-center justify-center">
						<canvas id="designCanvas" width="600" height="600" class="border-2 border-blue-500"
						></canvas>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="mb-4 border-l-4 border-yellow-500 bg-yellow-100 p-4 text-center text-yellow-700">
			<p>No mockup template data available.</p>
		</div>
	{/if}
</div>
