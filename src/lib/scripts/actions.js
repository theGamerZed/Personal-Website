import { disableScrollHandling } from "$app/navigation";
const focusAndScroll = /** @param {HTMLInputElement} node */ (node) => {
  disableScrollHandling();

  node.focus();
  node.scrollIntoView();
};

export { focusAndScroll };
