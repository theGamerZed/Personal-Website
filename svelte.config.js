import XMLLoader from "vite-plugin-xml-loader";
import adapter from "@sveltejs/adapter-auto";
import { imagetools } from "vite-imagetools";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // // Override http methods in the Todo forms
    // methodOverride: {
    //   allowed: ["PATCH", "DELETE"],
    // },
  },

  vite: () => ({
    plugins: [imagetools(), XMLLoader()],
  }),
};

export default config;
