<script>
  import { page, navigating } from "$app/stores";
  import dbManager from "$lib/scripts/dbManager";
  import theme from "$lib/store/theme";
  import { onMount } from "svelte";
  import { MoonIcon, SunIcon } from "svelte-feather-icons";
  let ready;
  onMount(() => {
    ready = true;
  });
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
