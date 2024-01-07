import React, { useContext } from "react";
import { DaisyThemeContext } from "@/pages/_app";

const Layout = ({ children }) => {
  const { theme } = useContext(DaisyThemeContext);

  return (
    theme.length !== 0 && (
      <div data-theme={"base"} className='min-h-screen'>
        {children}
      </div>
    )
  );
};

export default Layout;
