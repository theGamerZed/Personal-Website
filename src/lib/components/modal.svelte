<script>
  import { Modal } from "renderless-svelte";
  import {
    AlertCircleIcon,
    AlertTriangleIcon,
    XCircleIcon,
  } from "svelte-feather-icons";
  import { fade, scale } from "svelte/transition";
</script>

<Modal let:payload let:close>
  <div class="modal modal-open" in:fade>
    <div class="modal-box relative" in:scale>
      {#if payload.type === "error"}
        <label
          for="my-modal-3"
          class="btn btn-sm btn-circle absolute right-2 top-2 btn-error btn-alt"
          >✕</label
        >
        <div class="flex items-center gap-x-3 text-error">
          <XCircleIcon />
          <h3 class="font-bold text-xl font-head capitalize ">
            {payload.title}
          </h3>
        </div>
      {:else if payload.type == "success"}
        <label
          for="my-modal-3"
          class="btn btn-sm btn-circle absolute right-2 top-2 btn-success btn-alt"
          >✕</label
        >
        <div class="flex items-center gap-x-3 text-success">
          <AlertCircleIcon />
          <h3 class="font-bold text-lg capitalize">{payload.title}</h3>
        </div>
      {:else if payload.type == "warning"}
        <label
          for="my-modal-3"
          class="btn btn-sm btn-circle absolute right-2 top-2 btn-warning btn-alt"
          >✕</label
        >
        <div class="flex items-center gap-x-3 text-warning">
          <AlertTriangleIcon />
          <h3 class="font-bold text-lg capitalize">{payload.title}</h3>
        </div>
      {:else}
        <div class="flex items-center gap-x-3 text-primary">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2 btn-primary btn-alt"
            >✕</label
          >
          <AlertCircleIcon />
          <h3 class="font-bold text-lg capitalize ">{payload.title}</h3>
        </div>
      {/if}
      <p class="pt-4 pb-2 text-md">
        {payload.desc}
      </p>
      {#if payload.cancel}
        <div class="modal-action gap-x-2 !justify-start">
          <button on:click={close} class="btn btn-primary"
            >{payload.accept}</button
          >
          <button on:click={close} class="btn btn-error btn-alt "
            >{payload.cancel}</button
          >
        </div>
      {:else}
        <div class="modal-action !justify-start">
          <button on:click={close} class="btn btn-primary"
            >{payload.accept}</button
          >
        </div>
      {/if}
    </div>
  </div>
</Modal>
