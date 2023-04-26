<script lang="ts">
    export let entry: any;
</script>

<div>
    <a class = "block hover:bg-primary-hover hover:text-primary-text" href={entry.location}>{entry.name}</a>
    
    {#if entry.children !== undefined}
        <div  class="pl-4">
            {#each entry.children as subEntry}
                <svelte:self entry={subEntry}/>
            {/each}
        </div>
    {/if}
</div>
