<script lang="ts">
    import StringInput from "./StringInput.svelte";

    let list: {
        text: string;
        done: boolean;
    }[] = [];

    let newTodo: string = "";

    function addTodo() {
        list.push({
            text: newTodo,
            done: false,
        });
        newTodo = "";
        list = list;
    }

    let hideUnfinished = false;
</script>

<div class="p-4">
    <div>
        <div class="w-64">
            <StringInput bind:value={newTodo} label="Todo"/>
        </div>
        <button class="hover:bg-primary-hover" on:click={addTodo}
            >Todo hinzufügen</button
        >
        <div>
            <span>
                <input bind:value={hideUnfinished} type="checkbox" />
                Nur unfertige anzeigen
            </span>
        </div>
    </div>
    <div>
        {#each list as todo}
            {#if !hideUnfinished || !todo.done}
                
            <div class="p-2 {todo.done ? "bg-primary-hover" : ""}"
                ><input
                    bind:value={todo.done}
                    type="checkbox"
                />{todo.text}
                </div
            >
            {/if}
        {/each}
    </div>
</div>
