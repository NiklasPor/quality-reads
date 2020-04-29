module.exports = {
  theme: {
    extend: {
      maxWidth: {
        "80ch": "80ch",
      },
    },
    fontSize: {
      "14": "14px",
      "18": "18px",
      "24": "24px",
      "36": "36px",
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
