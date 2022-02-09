// Breakpoints
export const sizes = {
  smaller: "380px",
  phone: "576px",
  tablet: "768px",
  desktop: "992px",
  widescreen: "1200px",
  large: "1440px",
};

export const breakpoints = {
  lessThan: (max) => {
    return `(max-width: ${max})`;
  },
  greaterThan: (min) => {
    return `(min-width: ${min})`;
  },
  between: (min, max) => {
    return `(min-width: ${min}) and (max-width: ${max})`;
  },
};
