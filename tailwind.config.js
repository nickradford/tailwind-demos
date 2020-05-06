module.exports = {
  purge: [],
  theme: {
    extend: {
      transitionDelay: {
        "250": "250ms",
        "350": "350ms",
        "400": "400ms",
      },
      transitionProperty: {
        padding: "padding",
      },
    },
    fontFamily: {
      nunito: ['"Nunito Sans"', "sans-serif"],
      display: [
        '"SF Pro Display"',
        '"SF Display"',
        '"Helvetica Neue"',
        "Helvetica",
      ],
      text: ['"SF Pro Text"', '"SF Text"'],
    },
  },
  variants: {
    opacity: ["group-hover"],
    boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
    padding: ["group-hover"],
  },
  plugins: [],
};
