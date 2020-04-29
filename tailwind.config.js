module.exports = {
  theme: {
    extend: {
      maxWidth: {
        iPhone: "23.4375rem",
      },
      maxHeight: {
        iPhone: "50.75rem",
      },
    },
    fontSize: {
      "14": "14px",
      "24": "24px",
      "52": "52px",
    },
    colors: {
      white: "white",
      gray: {
        default: "#A9C3D3",
        dark: "#2F4857",
      },
      green: "#37ECBA",
      blue: "#72AFD3",
    },
    spacing: {
      112: "7rem",
      64: "4rem",
      32: "2rem",
      10: "0.625rem",
    },
    boxShadow: {
      focus: "0.25rem 0.25rem 0.1875rem rgba(47, 72, 87, 0.25)",
    },
    borderRadius: {
      "4": "0.25rem",
    },
    linearGradientColors: (theme) => ({
      "blue-green": [theme("colors")["blue"], theme("colors")["green"]],
    }),
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
      display: ["Comfortaa", "sans-serif"],
    },
  },
  variants: {},
  plugins: [require("tailwindcss-gradients")],
};
