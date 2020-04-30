module.exports = {
  theme: {
    extend: {
      maxWidth: {
        "80ch": "80ch",
      },
      gridTemplateColumns: {
        "fr-auto-fr": "1fr auto 1fr",
      },
    },
    fontSize: {
      "14": "0.875rem",
      "18": "1.125rem",
      "24": "1.5rem",
      "36": "2.25rem",
    },
    colors: {
      white: "white",
      black: "black",
    },
    spacing: {
      64: "4rem",
      48: "3rem",
      32: "2rem",
      24: "1.5rem",
      16: "1rem",
      8: "0.5rem",
      0: "0px",
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      display: ["Sorts Mill Goudy", "serif"],
    },
  },
  variants: {
    padding: ["responsive", "hover", "group-hover", "focus"],
  },
};
