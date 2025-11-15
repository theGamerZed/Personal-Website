<script>
  import { fly, fade } from "svelte/transition";
  import { page } from "$app/stores";
  import { MoonIcon, SunIcon } from "svelte-feather-icons";
  import theme from "$lib/store/theme";
  import dbManager from "$lib/scripts/dbManager";
  import { focusAndScroll } from "$lib/scripts/actions";
  import logoFull from "/static/logo/logo-full.png";
  import logoFullDark from "/static/logo/logo-full-dark.png";
  let showPopover = false;
  function h(event) {
    showPopover = false;
  }
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
</script>

<div class="mb-16">
  <div
    class="w-full fixed !z-[40] navbar bg-base-100 rounded-b-xl backdrop-blur-md font-bold font-head drop-shadow-md"
  >
    <span
      use:focusAndScroll
      class="invisible  opacity-0  pointer-events-none fixed top-0"
    />
    <div class="flex-none lg:hidden">
      <label for="my-drawer" class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
        >
      </label>
    </div>
    <div
      class="flex-1 px-2 mx-2 font-[900] font-code capitalize text-xl logo "
      style="letter-spacing: 0px;"
    >
      <h2 class="font-extrabold text-2xl">theGamerZed</h2>
    </div>
    <div class="flex-none hidden lg:block">
      <ul class="menu menu-horizontal gap-x-3 !hover:bg-transparent">
        <!-- Navbar menu content here -->
        <li>
          <a
            href="/"
            class="btn btn-link !text-lg"
            class:text-primary={$page.url.pathname === "/"}
            class:link-primary={$page.url.pathname === "/"}>home</a
          >
        </li>
        <li>
          <a
            href="/projects"
            class="btn btn-link !text-lg"
            class:text-primary={$page.url.pathname === "/projects"}
            class:link-primary={$page.url.pathname === "/projects"}
            class:btn-ghost={$page.url.pathname !== "/projects"}>projects</a
          >
        </li>

        <li>
          <div class="btn btn-link" on:click={changeTheme}>
            <label for="" class="swap swap-rotate">
              <div
                class:swap-off={$theme == "light"}
                class:swap-on={$theme == "dark"}
              >
                <SunIcon />
              </div>
              <div
                class:swap-off={$theme == "dark"}
                class:swap-on={$theme == "light"}
              >
                <MoonIcon />
              </div>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
