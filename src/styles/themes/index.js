import light from "./light";
import dark from "./dark";

const defaultTheme = {
  fonts: {
    default: "SofiaPro",
  },

  fontSize: {
    default: "1rem",
    ultraSmaller: "0.7rem",
    superSmaller: "0.75rem",
    extraSmaller: "0.875rem",
    smaller: "0.925rem",
    medium: "1.225rem",
    large: "1.425rem",
    extraLarge: "1.975rem",
    superLarge: "2.750rem",
    ultraLarge: "3.5rem",
  },
};

function combineTheme(theme) {
  return { ...defaultTheme, ...theme };
}

export { combineTheme, light, dark };
