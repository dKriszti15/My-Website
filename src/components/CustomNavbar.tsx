
import { Menubar } from "./ui/menubar";
import ThemeSwitcher from "./ThemeSwitcher";
import PageNavigations from "./PageNavigations";
import GitHubButton from "./GitHubButton";
import MobilePageNavigations from "./MobilePageNavigations";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme/ThemeContext";

export default function CustomNavbar(){

    const {theme, switchTheme} = useContext(ThemeContext);

    return (
        <Menubar className={`flex justify-between items-center px-5 pt-1 h-16 relative ${theme}`}>

            {/* left */}
            <ThemeSwitcher/>

            {/* middle */}
            <PageNavigations/>

            <div className="flex items-center space-x-2">
                {/* mobile screen */}
                <MobilePageNavigations/>

                {/* right */}
                <GitHubButton/>  
            </div>

        </Menubar>
    );
}
