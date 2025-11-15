import theme from "$lib/store/theme";
function changeTheme() {
  if (theme.value == "light") {
    theme.update((value) => {
      return "dark";
    });
  } else {
    theme.update((value) => {
      return "light";
    });
  }
}

export default {
  changeTheme,
};
