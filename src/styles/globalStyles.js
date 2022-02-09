import { createGlobalStyle } from "styled-components";
import { colors } from "./settings/colors";

const GlobalStyles = createGlobalStyle`

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul,
  ol {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  legend {
    position: relative;
    margin: 0;
    padding: 0;
    float: left;
    width: 100%;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    /* line-height: 1.5; */
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${colors.white};
  }

  /* Remove list styles on ul and ol elements */
  ul,
  ol {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a {
    text-decoration-skip-ink: auto;
    text-decoration: none;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Modal global styles */
  .ReactModal__Body--open {
    overflow: hidden;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .ReactModal__Content {
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
  }

  .ReactModal__Content--after-open {
    transform: scale(1);
  }

  .ReactModal__Content--after-close
    transform: scale(0);
  }

  /* Toastify global styles */
  .Toastify__toast-container {
    z-index: 200000;
    .Toastify__toast {
      .Toastify__toast-body > div:last-child {
        word-break: break-word;
        line-height: 1.2;
      }
    }
    }
`;
export default GlobalStyles;
