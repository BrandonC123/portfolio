import "@/app/globals.css";
import Layout from "../components/Layout";
import { createContext, useEffect, useState } from "react";
import Head from "next/head";

export const DaisyThemeContext = createContext();

export const DaisyThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("night");
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      let theme = "corporate";
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        theme = "night";
      }

      localStorage.setItem("theme", theme);
      setTheme(theme);
    } else {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);
  function updateTheme(newTheme) {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }
  return (
    <DaisyThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </DaisyThemeContext.Provider>
  );
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.jpeg' />
        {/* Defaults */}
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='1200' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <DaisyThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DaisyThemeProvider>
    </>
  );
};

export default MyApp;
