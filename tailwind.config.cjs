module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      logo: ["Akronim", "cursive"],
      head: ["Inter"],
      code: ["Cousine", "Space Mono", "monospace"],
      serif: ["Vollkorn", "serif"],
    },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],

  daisyui: {
    themes: [
      {
        night: {
          primary: "#845ef7",

          secondary: "#3ef99f",

          accent: "#304761",

          neutral: "#fef9fe",

          "base-100": "#0c0c13",
          // "base-content": "#fff",
          info: "#2563eb",

          success: "#16a34a",

          warning: "#eab308",

          error: "#ef4444",
        },
        light: {
          primary: "#845ef7",

          secondary: "#3ef99f",

          accent: "#304761",

          neutral: "#0c0c13",

          "base-300": "#dcd6f8",
          "base-200": "#fef9fe",
          "base-content": "#0c0c13",

          info: "#2563eb",

          success: "#16a34a",

          warning: "#eab308",

          error: "#ef4444",
        },
      },
    ],
  },
};
