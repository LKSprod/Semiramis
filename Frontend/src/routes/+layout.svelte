<script>
	import '../app.css';
	import menuContent from '$lib/menuContent.ts';
	import MenuEntry from '$lib/MenuEntry.svelte';
</script>

<div class="flex h-screen w-screen">
	<div class="bg-zwei w-64">
		{#each menuContent as entry}
			<MenuEntry {entry} />
		{/each}
	</div>

	<div class="bg-eins flex-1">
		<div />
		<slot />
	</div>
</div>
