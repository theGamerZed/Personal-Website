<script>
  import { onDestroy } from "svelte";

  import { fly, fade } from "svelte/transition";
  export let text = ["indie", "clean", "minimal"];
  export let classes = "";
  let active = 0;
  setInterval(() => {
    if (active >= text.length - 1) {
      active = 0;
    } else {
      active = active + 1;
    }
  }, 1300);
  onDestroy(() => {
    clearInterval();
  });
</script>

<div class="overflow-hidden  inline-flex flex-col">
  {#key active}
    {#each text as item, i}
      {#if i === active}
        <span class={classes} in:fly={{ y: 10, delay: 200 }}>
          {item}
        </span>
      {/if}
    {/each}
  {/key}
</div>
