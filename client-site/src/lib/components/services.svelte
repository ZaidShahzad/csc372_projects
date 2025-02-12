<script>
	import { Icon, Printer, AdjustmentsHorizontal } from 'svelte-hero-icons';
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base/7 font-semibold text-green-600">What We Offer</h2>
			<p
				class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
			>
				Our Services
			</p>
			<p class="mt-6 text-lg/8 text-gray-600">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente reprehenderit
				elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl
				class="grid max-w-xl grid-cols-1 place-items-center gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
			>
				<div
					class="relative flex transform flex-col overflow-hidden rounded-xl p-6 transition duration-300 hover:scale-105 hover:shadow-xl"
				>
					<div class="absolute inset-0">
						<img src="" alt="" class="h-full w-full object-cover opacity-60" />
						<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
					</div>
					<dt class="relative flex items-center gap-x-3 text-base/7 font-semibold text-white">
						<Icon src={AdjustmentsHorizontal} class="size-5 text-green-400" />
						Custom Embroiderey
					</dt>
					<dd class="relative mt-4 flex flex-auto flex-col text-base/7">
						<p class="flex-auto text-gray-200">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores reiciendis,
							error eaque vel quasi.
						</p>
						<!-- <p class="mt-6">
							<a href="#" class="text-sm/6 font-semibold text-green-400 hover:text-green-300"
								>Start Now <span
									aria-hidden="true"
									class="transition-transform group-hover:translate-x-1">→</span
								></a
							>
						</p> -->
						<a
							href="/"
							class="mt-8 w-fit rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
							>Start Designing
						</a>
					</dd>
				</div>
				<div
					class="relative flex transform flex-col overflow-hidden rounded-xl p-6 transition duration-300 hover:scale-105 hover:shadow-xl"
				>
					<div class="absolute inset-0">
						<img src="" alt="" class="h-full w-full object-cover opacity-60" />
						<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
					</div>
					<dt class="relative flex items-center gap-x-3 text-base/7 font-semibold text-white">
						<Icon src={Printer} class="size-5 text-green-400" />
						Custom Printed
					</dt>
					<dd class="relative mt-4 flex flex-auto flex-col text-base/7">
						<p class="flex-auto text-gray-200">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores reiciendis,
							error eaque vel quasi.
						</p>
						<!-- <p class="mt-6">
							<a href="#" class="text-sm/6 font-semibold text-green-400 hover:text-green-300"
								>Start Now <span
									aria-hidden="true"
									class="transition-transform group-hover:translate-x-1">→</span
								></a
							>
						</p> -->
						<a
							href="/"
							class="mt-8 w-fit rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
							>Start Designing
						</a>
					</dd>
				</div>
				<!-- <div
					class="flex transform flex-col rounded-xl p-6 transition duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-xl"
				>
					<dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
						<svg
							class="size-5 flex-none text-green-600"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
								clip-rule="evenodd"
							/>
						</svg>
						Service #3
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
						<p class="flex-auto">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente reprehenderit
							veniam praesentium quo nihil perferendis, distinctio quaerat hic alias rerum ducimus
							vero dolores esse optio ullam nostrum id recusandae.
						</p>
						<p class="mt-6">
							<a href="#" class="text-sm/6 font-semibold text-green-600 hover:text-green-500"
								>Start Now <span
									aria-hidden="true"
									class="transition-transform group-hover:translate-x-1">→</span
								></a
							>
						</p>
					</dd>
				</div> -->
			</dl>
		</div>
	</div>
</div>
