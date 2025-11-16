<script>
  import "@fontsource/inter/600.css";
  import "@fontsource/inter/700.css";
  import "@fontsource/inter/900.css";
  import "@fontsource/inter/500.css";
  import "@fontsource/inter/400.css";
  import "@fontsource/inter/300.css";
  import { MoonIcon, SunIcon } from "svelte-feather-icons";
  import "@fontsource/akronim";
  import "@fontsource/space-mono";
  import "@fontsource/cousine";
  import "../app.css";
  import "$lib/css/theme.css";
  import { page } from "$app/stores";
  import Modal from "$lib/components/modal.svelte";
  import theme from "$lib/store/theme.js";
  // import Sidebar from "$lib/components/sidebar.svelte";
  import NProgress from "nprogress";
  import { navigating } from "$app/stores";
  import { onMount } from "svelte";
  import dbManager from "$lib/scripts/dbManager";
  import Spinner from "$lib/components/spinner.svelte";
  let ready;
  onMount(() => {
    ready = true;
    getTheme();
  });
  function getTheme() {
    $theme = dbManager.getOrSetItem("APP_THEME", "light");
  }
  NProgress.configure({
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16,
  });
  // $: {
  //   if ($navigating) {
  //     NProgress.start();
  //   }
  //   if (!$navigating) {
  //     NProgress.done();
  //   }
  // }
  function changeTheme() {
    if ($theme == "light") {
      theme.update((value) => {
        return "dark";
      });
    } else {
      theme.update((value) => {
        return "light";
      });
    }
    dbManager.setItemValue("APP_THEME", $theme);
  }
  $: {
    if ($navigating) {
      setTimeout(() => {
        document.getElementById("my-drawer").checked = false;
      }, 1);
    }
  }
</script>

<div
  data-theme={$theme}
  class="bg-base-200 text-base-content min-h-screen min-w-screen  "
>
  <Modal />

  {#if $navigating}
    <div class="min-h-screen min-w-screen flex items-center justify-center">
      <span class="text-primary">
        <Spinner size={84} />
      </span>
    </div>
  {:else}
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col !overflow-x-hidden">
        <!-- main content -->
        <div>
          <slot />
        </div>
      </div>
      <!-- sidebar -->
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay" />
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 gap-3">
          <label
            for="my-drawer"
            class="btn btn-alt  mb-8 max-w-fit !ml-auto drawer-button">X</label
          >
          <!-- Sidebar content here -->
          <li class=" px-2">
            <a
              href="/"
              class="font-code"
              class:bg-primary={$page.url.pathname === "/"}
              class:text-primary-content={$page.url.pathname === "/"}
              class:btn-ghost={$page.url.pathname !== "/"}>Home</a
            >
          </li>

          <li class=" px-2">
            <a
              class="font-code capitalize "
              href="/blog"
              class:bg-primary={$page.url.pathname.startsWith("/blog")}
              class:text-primary-content={$page.url.pathname.startsWith(
                "/blog"
              )}
              class:btn-ghost={!$page.url.pathname.startsWith("/blog")}>blog</a
            >
          </li>
          <li class=" px-2">
            <a
              class="font-code capitalize "
              href="/projects"
              class:bg-primary={$page.url.pathname === "/projects"}
              class:text-primary-content={$page.url.pathname === "/projects"}
              class:btn-ghost={$page.url.pathname !== "/projects"}>projects</a
            >
          </li>

          <li class="!mt-auto px-2 !text-black">
            <div class="btn btn-primary !text-black" on:click={changeTheme}>
              <label for="" class="swap swap-fade !text-black">
                <div class="flex gap-3 items-center font-code">
                  <div
                    class="!text-black"
                    class:swap-off={$theme == "light"}
                    class:swap-on={$theme == "dark"}
                  >
                    <SunIcon />
                  </div>
                </div>
                <div class="flex uppercase gap-2 items-center font-code">
                  <div
                    class="!text-black"
                    class:swap-off={$theme == "dark"}
                    class:swap-on={$theme == "light"}
                  >
                    <MoonIcon />
                  </div>
                </div>
              </label>
              <div class="text-black">{$theme}-MODE</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  {/if}
</div>
