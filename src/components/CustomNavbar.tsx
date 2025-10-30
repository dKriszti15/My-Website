"use client";
import { useState, useEffect, useContext } from "react";
import { Menubar } from "./ui/menubar";
import ThemeSwitcher from "./ThemeSwitcher";
import PageNavigations from "./PageNavigations";
import GitHubButton from "./GitHubButton";
import MobilePageNavigations from "./MobilePageNavigations";
import LinkedInButton from "./LinkedInButton";
import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function CustomNavbar() {
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Menubar
      className={`fixed top-0 left-0 right-0 w-[80%] mx-auto z-50 flex justify-between items-center px-4 pt-1 h-20 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
        } ${theme}`}

    >
        {/* left */}
        <ThemeSwitcher />

        {/* middle */}
        <PageNavigations />
      
        <Avatar className="md:invisible">
            <AvatarImage src="https://github.com/dKriszti15.png" />
            <AvatarFallback>DK</AvatarFallback>
        </Avatar>
     
        {/* right section */}
        <div className="flex items-center space-x-2">
            {/* mobile */}
            <div className="md:hidden">
            <MobilePageNavigations />
            </div>

            {/* desktop */}
            <div className="hidden md:flex items-center space-x-2">
            <LinkedInButton />
            <GitHubButton />
            </div>
      </div>
    </Menubar>
  );
}
