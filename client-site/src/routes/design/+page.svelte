<!--

	Majority of the code is from the Fabric.js demo page
	https://fabricjs.com/demos/

-->

<script lang="ts">
	// Import components
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	// Import Svelte and Fabric.js dependencies
	import { onMount } from 'svelte';
	import { Canvas, ActiveSelection, Rect, Group, FabricObject } from 'fabric';

	// Canvas state variables
	let canvas: Canvas | null = null;
	let copiedObjects: FabricObject | null = null;

	onMount(() => {
		// Initialize canvas
		canvas = new Canvas('canvas');
		if (canvas) {
			FabricObject.ownDefaults.transparentCorners = false;
		}

		// Add keyboard event listeners
		window.addEventListener('keydown', (e) => {
			if (e.ctrlKey && e.key === 'g') {
				if (canvas?.getActiveObject()?.type === 'group') {
					ungroup();
				} else {
					group();
				}
			}
			if (e.ctrlKey && e.key === 'c') {
				copySelection();
			}
			if (e.ctrlKey && e.key === 'v') {
				pasteSelection();
			}
			if (e.key === 'Backspace') {
				deleteSelection();
			}
		});
	});

	// Delete selected objects from canvas
	function deleteSelection() {
		if (!canvas) return;
		if (!canvas.getActiveObject()) return;

		const activeObjects = canvas.getActiveObjects() as ActiveSelection[];

		// Selected a grouped object
		if (activeObjects.length === 1 && activeObjects[0].type === 'group') {
			const group = activeObjects[0] as Group;
			group.forEachObject((obj) => {
				canvas!.remove(obj);
			});
			ungroup();
			canvas!.discardActiveObject();
			canvas!.requestRenderAll();
			return;
		}

		// Selected more than one object (not grouped)
		if (activeObjects.length > 1) {
			// delete all active objects
			activeObjects.forEach((obj: ActiveSelection) => {
				canvas!.remove(obj);
			});
			canvas!.discardActiveObject();
			canvas!.requestRenderAll();
			return;
		}

		// Selected one object (not grouped)
		const activeObject = activeObjects[0];
		canvas.remove(activeObject);
	}

	// Copy selected objects
	function copySelection() {
		if (!canvas?.getActiveObject()) return;
		(canvas.getActiveObject() as FabricObject).clone().then((cloned) => {
			copiedObjects = cloned;
		});
	}

	// Paste copied objects
	function pasteSelection() {
		if (!canvas || !copiedObjects) return;

		copiedObjects.clone().then((clonedObj: FabricObject) => {
			canvas!.discardActiveObject();
			clonedObj.set({
				left: (clonedObj.left || 0) + 10,
				top: (clonedObj.top || 0) + 10,
				evented: true
			});

			if (clonedObj instanceof ActiveSelection) {
				clonedObj.canvas = canvas!;
				clonedObj.forEachObject((obj) => {
					canvas!.add(obj);
				});
				clonedObj.setCoords();
			} else {
				canvas!.add(clonedObj);
			}

			canvas!.setActiveObject(clonedObj);
			canvas!.requestRenderAll();
		});
	}

	// Group selected objects
	function group() {
		if (!canvas) return;
		if (!canvas.getActiveObject()) return;

		if (
			canvas.getActiveObject()!.type !== 'activeSelection' &&
			canvas.getActiveObject()!.type !== 'activeselection'
		) {
			return;
		}

		const activeSelection = canvas.getActiveObject() as ActiveSelection;
		const group = new Group(activeSelection.removeAll());
		canvas.add(group);
		canvas.setActiveObject(group);
		canvas.requestRenderAll();
	}

	// Ungroup selected group
	function ungroup() {
		if (!canvas) return;
		if (!canvas.getActiveObject()) return;

		const group = canvas.getActiveObject() as ActiveSelection;
		if (!group || group.type !== 'group') return;

		canvas.remove(group);
		let selection = new ActiveSelection(group.removeAll(), {
			canvas: canvas
		});
		canvas.setActiveObject(selection);
		canvas.requestRenderAll();
	}

	// Add sample shapes to canvas
	function addShapes() {
		if (!canvas) return;
		const { width, height } = canvas;

		const red = new Rect({
			top: Math.random() * (height - 25),
			left: Math.random() * (width - 40),
			width: 80,
			height: 50,
			fill: 'red'
		});

		const blue = new Rect({
			top: Math.random() * (height - 35),
			left: Math.random() * (width - 25),
			width: 50,
			height: 70,
			fill: 'blue'
		});

		const green = new Rect({
			top: Math.random() * (height - 30),
			left: Math.random() * (width - 30),
			width: 60,
			height: 60,
			fill: 'green'
		});

		canvas.add(red, blue, green);
	}

	// Select all objects on canvas
	function selectAll() {
		if (!canvas) return;
		canvas.discardActiveObject();
		const sel = new ActiveSelection(canvas.getObjects(), {
			canvas: canvas
		});
		canvas.setActiveObject(sel);
		canvas.requestRenderAll();
	}
</script>

<!-- Navigation bar -->
<Navbar />

<!-- Main canvas container -->
<div class="flex h-full w-full items-center justify-center p-72">
	<div class="flex flex-col gap-4">
		<!-- Canvas element -->
		<canvas id="canvas" width="500" height="500" style="border:1px solid #000000;"></canvas>
		<!-- Control buttons -->
		<div class="flex gap-2">
			<button class="rounded-md bg-blue-500 p-2 text-white" onclick={addShapes}>Add Shapes</button>
			<button class="rounded-md bg-green-500 p-2 text-white" onclick={selectAll}>Select All</button>
			<button class="rounded-md bg-red-500 p-2 text-white" onclick={deleteSelection}>
				Delete Selection
			</button>
		</div>
	</div>
</div>

<!-- Footer -->
<Footer />
