<script lang="ts">
    export let label = "";
    export let id = "";
    export let value = "";
    export let required = false;
    export let disabled = false;
    export let autocomplete = "off";
    let hasFocus = false;
  </script>
  
  <div class="relative w-full pt-2">
    <input
      id={id}
      name={id}
      bind:value={value}
      required={required}
      disabled={disabled}
      autocomplete={autocomplete}
      class="block w-full py-1.5 pl-3 pr-5 text-text placeholder-transparent bg-transparent border-b-2 border-accent outline-none focus:border-accent-hover"
      placeholder={hasFocus ? "" : " "}
      on:focus={() => (hasFocus = true)}
      on:blur={() => (hasFocus = false)}
    />
    <label
      for={id}
      class="pointer-events-none absolute top-0 left-3 transition-all {hasFocus || value != '' ? 'text-text text-xs' : 'text-accent-text text-sm top-2 left-3 -mt-0.5 font-bold translate-y-5'}"
    >
      {label}
    </label>
  </div>
  