<script>
  import { CalendarIcon, ClockIcon } from "svelte-feather-icons";

  import Time from "svelte-time";
  import ImageLoader from "./ImageLoader.svelte";
  export let tags,
    summary,
    title,
    imgUrl,
    datePublished,
    imgAlt,
    URL = "";
</script>

<div
  class="card !max-w-[90%] lg:!w-96 max-h-[48rem] bg-base-100  rounded-none transition-all transform border border-black"
>
  <figure class=" overflow-hidden">
    <ImageLoader src={imgUrl} alt={imgAlt} classes="w-full" />
  </figure>
  <div class="card-body p-4  px-6 bg-base-100">
    <h2
      class="card-title  text-2xl font-extrabold grid place-content-start text-left font-head"
    >
      {title}
    </h2>
    <div class="gap-4 flex flex-wrap items-start justify-start mb-4">
      {#each tags as tag}
        <a href={"/blog/tag/" + tag.name}>
          <span
            class="border border-gray-600 p-2 rounded-md font-code font-semibold hover:bg-base-300 !border-opacity-30 text-xs hover:bg-opacity-50"
            >#{tag.name}</span
          >
        </a>
      {/each}
    </div>
    <p class="font-normal mb-3 text-lg text-left line-clamp-3">
      {summary}
    </p>
    <div class="card-actions justify-between flex-col">
      <a
        href={"/blog/" + URL}
        class="link link-hover  inline-flex items-center font-bold"
        >Learn More
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
  <div class=" p-3 bg-base-300 bg-opacity-50 opacity-70 flex justify-between">
    <p class="text-sm font-semibold  text-left flex gap-x-2">
      <CalendarIcon />
      <Time format=" DD MMM, YYYY" timestamp={datePublished} />
    </p>
    <p class="!text-sm font-medium text-left flex gap-x-2">x-x</p>
  </div>
</div>

<style>
  .card {
    box-shadow: 5px 5px rgba(0, 0, 0, 0.863);
  }
  .card:hover {
    box-shadow: -9px -9px rgba(0, 0, 0, 0.897);
    @apply border-black translate-x-1 translate-y-1;
  }
</style>
