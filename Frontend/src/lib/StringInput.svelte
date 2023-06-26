<script lang="ts">
	export let label = '';
	export let id = '';
	export let value = '';
	export let required = false;
	export let disabled = false;
	export let autocomplete = 'off';
	let hasFocus = false;
</script>

<div class="relative w-full pt-2">
	<input
		{id}
		name={id}
		bind:value
		{required}
		{disabled}
		{autocomplete}
		class="text-text border-accent focus:border-accent-hover block w-full border-b-2 bg-transparent py-1.5 pl-3 pr-5 placeholder-transparent outline-none"
		placeholder={hasFocus ? '' : ' '}
		on:focus={() => (hasFocus = true)}
		on:blur={() => (hasFocus = false)}
	/>
	<label
		for={id}
		class="pointer-events-none absolute left-3 top-0 transition-all {hasFocus || value != ''
			? 'text-text text-xs'
			: 'text-accent-text left-3 top-2 -mt-0.5 translate-y-5 text-sm font-bold'}"
	>
		{label}
	</label>
</div>
