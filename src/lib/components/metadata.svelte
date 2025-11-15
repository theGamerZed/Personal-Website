<script>
  import { EyeIcon } from "svelte-feather-icons";
  import { fade } from "svelte/transition";
  import ThreeDotsSpinner from "./threeDotsSpinner.svelte";
  import heartImg from "/static/images/40RNtU1Zj.webp";
  export let reactions, isLoading;
  let views = 0;
</script>

<div
  class="lg:w-full lg:max-w-max lg:min-w-[20%] px-4 py-3 lg:shadow-md rounded-md flex  gap-8 lg:bg-base-100 h-16"
>
  {#if reactions && !isLoading}
    {#if reactions.hearts == null}
      <div in:fade>
        <p class="text-xl font-bold flex gap-1 items-center">
          <img src={heartImg} width="24" class="inline  m-1" alt="" /> 0
        </p>
      </div>
    {:else}
      <div in:fade>
        <p class="text-xl font-bold flex gap-1 items-center">
          <img src={heartImg} width="24" class="inline  m-1" alt="" />
          {reactions.hearts}
        </p>
      </div>
    {/if}
  {:else}
    <div in:fade>
      <p><ThreeDotsSpinner /></p>
    </div>
  {/if}
  <div in:fade>
    <p class="text-xl font-bold flex gap-2 items-center">
      <EyeIcon /> 2.6k
    </p>
  </div>
</div>
