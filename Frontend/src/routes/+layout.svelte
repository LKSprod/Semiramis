<script>
	import '../app.css';
	import menuContent from '$lib/menuContent.ts';
	import MenuEntry from '$lib/MenuEntry.svelte';
</script>

<!-- 
<div class="flex h-screen w-screen">
	<div class="bg-zwei w-64">
		{#each menuContent as entry}
			<MenuEntry {entry} />
		{/each}
	</div> --->
<div class="flex min-h-screen min-h-screen items-stretch">
	<ul class="menu bg-primary font-monoSpace w-64 font-bold">
		<li>
			<details open>
				<summary>Art</summary>
				<ul>
					<li>
						<details open>
							<summary>Photos</summary>
							<ul>
								<li><a>Analog photos</a></li>
							</ul>
						</details>
					</li>
					<li>
						<details open>
							<summary>Paintings</summary>
							<ul>
								<li><a>level 3 item 1</a></li>
								<li><a>level 3 item 2</a></li>
							</ul>
						</details>
					</li>
				</ul>
			</details>
		</li>
		<li><a>Talking Points</a></li>
	</ul>

	<div class="bg-eins flex-1">
		<div />
		<slot />
	</div>
</div>
<!-- </div>  -->
