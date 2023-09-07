import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useEffect, useState, useContext } from "react";
import { Dropdown, Menu, MenuItem } from "@mui/base";
import MenuButton from "@mui/base/MenuButton";
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import GoogleSigninBtn from "./GoogleSigninBtn";
import { DaisyThemeContext, UserContext, db } from "@/pages/_app";

const HeaderLinks = () => {
  return (
    <>
      <a href="/about" className="lg:text-lg lg:hover:underline">
        About
      </a>
      <a href="/train" className="lg:text-lg lg:hover:underline">
        Model Training
      </a>
      {/* <a href="/generate/bored-apes" className="lg:text-lg lg:hover:underline">
        Bored Apes
      </a> */}
      <a href="/subscription" className="lg:text-lg lg:hover:underline">
        Subscribe
      </a>
    </>
  );
};

const Header = () => {
  const { theme } = useContext(DaisyThemeContext);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user !== undefined && user) {
      setLoading(false);
    } else if (user === null) {
      setLoading(false);
    }
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, [user]);

  return (
    <header className="min-w-screen w-full bg-base-200">
      <div
        className="relative mx-auto flex w-[90%] max-w-[1550px] flex-col items-center 
        justify-between py-4 md:flex-row"
      >
        <div className="flex w-full items-center justify-between">
          <a
            href="/"
            className="font-accent flex-[1 1 100px] text-xl font-bold md:text-2xl lg:hover:underline"
          >
            IMAGE APP
          </a>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-4 md:flex">
              <HeaderLinks />
            </div>
            {user === null && <GoogleSigninBtn />}
            {loading && (
              <div className="flex gap-1">
                <svg
                  width="200"
                  height="25"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden lg:block"
                >
                  <rect width="200" height="25" rx="5" fill="#D4D7DA" />
                </svg>
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#D4D7DA" />
                </svg>
              </div>
            )}
            {user && (
              <>
                <Dropdown>
                  <MenuButton className="flex items-center gap-1 rounded-md border border-base-content px-2 py-1 lg:hover:bg-base-300">
                    <span className="lg:text-lg">
                      {user.username || user.email}
                    </span>
                    <AccountCircleIcon />
                  </MenuButton>
                  <Menu
                    data-theme={theme}
                    className="z-20 rounded-b-md bg-base-100 shadow shadow-base-content"
                  >
                    <MenuItem
                      onClick={() => {
                        router.push("/account");
                      }}
                      className="cursor-pointer px-[1.5rem] py-2 lg:hover:bg-base-200"
                    >
                      Account
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        router.push("/history");
                      }}
                      className="cursor-pointer px-[1.5rem] py-2 lg:hover:bg-base-200"
                    >
                      History
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        const sessionId = document.cookie
                          .split("; ")
                          .find((row) => row.startsWith("sessionId"))
                          .split("=")[1];
                        // Delete the document from Firestore
                        deleteDoc(doc(db, "sessions", sessionId))
                          .then(() => {
                            document.cookie =
                              "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                            setUser(null);
                            window.location.href = "/";
                          })
                          .catch((error) => {
                            console.error("Error deleting session: ", error);
                          });
                      }}
                      className="cursor-pointer rounded-b-md px-[1.5rem] py-2 lg:hover:bg-base-200"
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </Dropdown>
              </>
            )}
          </div>
        </div>
        <div className="mt-4 flex gap-3 self-start md:hidden">
          <HeaderLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
