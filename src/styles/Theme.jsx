import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider } from "styled-components";

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;

export const theme = {
  colors: {
    white: "#FFFFFF",
    yellow: '#f1c40f',
    light: '#ecf0f1',
    black:'#000000',
    champagneDark: '#bdc3c7',
    header: '#7f8c8d',
    navbutton: '#0000ff',

    // new
    container: "#2d2d2d",
    background: '#191919',
    metalDark: '#7f8c8d',
    text:'#fff',
  },
  fontFamily: {
    heading: ["IBM Plex Sans", "sans-serif"].join(","),
    sans: ["Open Sans", "Arial", "Helvetica", "sans-serif"].join(","),
    mono: ["IBM Plex Mono", "serif"].join(","),
  },
  fontSize: {
    tittle: '1.3rem',
    large: '1.2 rem',
    subtitle: '1.25rem',
    xs: rem(10),
    sm: '.8rem',
    md: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
    "2xl": rem(24),
    "3xl": rem(32),
    "4xl": rem(40),
    "5xl": rem(64),
  },
  breakPoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  }
};

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
