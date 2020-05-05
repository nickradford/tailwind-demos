module.exports = {
  purge: [],
  theme: {
    extend: {
      transitionDelay: {
        "250": "250ms",
        "350": "350ms",
        "400": "400ms",
      },
    },
    fontFamily: {
      display: ['"SF Pro Display"', '"Helvetica Neue"', "Helvetica"],
      text: ['"SF Pro Text"'],
    },
  },
  variants: {
    opacity: ["group-hover"],
    boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
};
