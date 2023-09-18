import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
  presetTypography,
} from "unocss";

import icons from "./uno.config.icons";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "-.125em",
      },
      collections: icons,
    }),
    presetTypography({
      cssExtend: {
        code: { color: "#8b5cf6" },
        a: { color: "var(--vp-c-brand)" },
        // "a:hover": { color: "#f43f5e" },
        // "a:visited": { color: "#14b8a6" },
      },
    }),
  ],

  theme: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },

    colors: {
      brand: "var(--vp-c-brand)",
    },
  },

  rules: [
    [
      /^text-stroke-(\d+)$/,
      (match) => ({ "-webkit-text-stroke-width": `${match[1]}px` }),
    ],
    [
      "text-stroke-hex-aaa",
      {
        "--un-text-stroke-opacity": 1,
        "-webkit-text-stroke-color":
          "rgba(170,170,170,var(--un-text-stroke-opacity))",
      },
    ],
  ],
});
