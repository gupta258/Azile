import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../configs/createEmotionCache";
import theme from "../configs/theme";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
