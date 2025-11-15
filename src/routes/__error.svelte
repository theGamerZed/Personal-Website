<script>
  import Navbar from "$lib/components/navbar.svelte";
  import img404 from "/static/error.png";
</script>

<div class="grid place-items-center w-full min-h-screen mt-3">
  <div class="max-w-md">
    <img src={img404} alt="dog 404" class="max-w-full" />
    <h1 class="font-head text-4xl font-bold text-center">Oops...</h1>
    <h2 class="font-head font-semibold  text-2xl mt-4 text-center">
      An error occurred
    </h2>
    <p class="text-xl mb-8 text-center">This page was unable to load</p>
  </div>
  <a href="/" class="btn btn-secondary">Take me back</a>
</div>
