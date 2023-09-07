import React, { useContext, useEffect, useState } from "react";
import { DaisyThemeContext } from "@/pages/_app";

const Layout = ({ children }) => {
  const { theme } = useContext(DaisyThemeContext);

  return (
    theme.length !== 0 && (
      <div data-theme={theme} className="min-h-screen">
        {/* <Header />
        <UsernameForm /> */}
        {/* <ChatWindow /> */}
        {children}
        {/* <Footer /> */}
      </div>
    )
  );
};

export default Layout;
