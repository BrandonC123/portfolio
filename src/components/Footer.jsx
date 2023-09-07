import { useRouter } from "next/router";
import { Switch, IconButton } from "@mui/material";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { DaisyThemeContext } from "@/pages/_app";
import { useContext } from "react";

const Footer = () => {
  const { theme, updateTheme } = useContext(DaisyThemeContext);
  const router = useRouter();
  return (
    <footer
      id="homepage-footer"
      className="relative mt-[200px] w-full self-end bg-base-200 px-1 py-4"
    >
      <div className="mx-auto flex w-[95%] max-w-[1200px] justify-between">
        <div className="max-w-[400px]">
          <button
            onClick={() => {
              router.push("/");
            }}
            className="font-accent mb-4 text-xl font-bold md:text-2xl lg:hover:underline"
          >
            IMAGE APP
          </button>
          <div className="text-md grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-2 lg:text-lg">
            <a href="/about" className="lg:hover:underline">
              About
            </a>
            <a href="/contact" className="lg:hover:underline">
              Contact
            </a>
            <a
              href="https://discord.com/api/oauth2/authorize?client_id=1090480390881419384&permissions=11264&scope=applications.commands%20bot"
              target="_blank"
              className="lg:hover:underline"
            >
              Discord bot
            </a>
            <a href="/models" className="lg:hover:underline">
              Models
            </a>
            {/* TODO: */}
            {/* <a href="/contribute" className="lg:hover:underline">
              Contribute
            </a> */}
            <a href="/blog" className="lg:hover:underline">
              Blog
            </a>
          </div>
        </div>
        <div className="right-2 top-2 max-lg:absolute">
          <IconButton>
            {theme === "night" ? (
              <Brightness3Icon
                sx={{
                  color: "gray",
                }}
              />
            ) : (
              <WbSunnyIcon />
            )}
          </IconButton>
          <Switch
            checked={theme === "night"}
            onChange={() => {
              updateTheme(theme === "night" ? "corporate" : "night");
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
