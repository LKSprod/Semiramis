<script>
  import "../app.css";
  import menuContent from "$lib/menuContent.ts" ;
  import MenuEntry from "$lib/MenuEntry.svelte";

</script>

<div class="w-screen h-screen flex ">
<div class="w-64 bg-zwei">
  {#each menuContent as entry}
    <MenuEntry entry={entry}/>
  {/each}
</div>

<div class="flex-1  bg-eins" >
   <div></div>
  <slot />
</div>
</div>