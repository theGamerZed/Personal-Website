<script>
  import { fly } from "svelte/transition";
  import Footer from "$lib/components/footer.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import imga from "/static/images/illlustrations.svg";
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>
<Navbar />
<div
  class="grid place-items-center w-full min-h-[50vh] mt-8"
  in:fly={{ y: 100 }}
>
  <div class="max-w-xs">
    <img src={imga} alt="freelancing 404" class="!max-w-xs" />

    <h1 class="font-head text-center font-extrabold text-3xl mt-8">
      No Projects yet
    </h1>
    <p class="text-xl mb-4 text-center">
      I am working hard to add more amazing content soon
    </p>
  </div>
  <a href="/" class="btn btn-primary btn-wide">Take me back</a>
</div>
<Footer />
