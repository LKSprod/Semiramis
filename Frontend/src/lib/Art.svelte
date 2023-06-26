<script lang="ts">
	import StringInput from './StringInput.svelte';

	let elements: {
		header: string;
		subtext: string;
	}[] = [];
</script>

<div class=" h-full w-full p-20">
	<div class="  h-full w-full">
		<h1 class="  font-regular pd-4 ml-5 bg-black text-5xl">..//Art/Photos</h1>
		<div class="divider before:bg-primary after:bg-secondary" />
		<div class="font-PublicSans">
			<h1 class=" bg-black">This is a brief collection I took</h1>
			<div class="flex p-8">
				<div class="h-1/5 w-1/5">
					<img src="..\img\Porsche.jpg" class=" border-secondary rounded-md border-8" alt="" />
				</div>
				<div class="divider divider-horizontal font-bold before:bg-black after:bg-black" />
				<div class="align-contents-center stretch p-4 font-bold">
					<h2 class="p-2">Camera: Minolta XG-1</h2>
					<h2 class="p-2">Fil: Gold 200</h2>
					<h2 class="p-2">Location: Regensburg, Germany</h2>
					<h2 class="p-2">Date: Autumn 2021</h2>
					<h2 class="p-2">Notes: -test</h2>
				</div>
			</div>
		</div>
	</div>
</div>
