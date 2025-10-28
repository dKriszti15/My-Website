import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme/ThemeContext";

export default function ThemeSwitcher(){
    const {theme, switchTheme} = useContext(ThemeContext);
    return(
        <> 
            <Tooltip>
            <TooltipTrigger asChild>
                <Button className="h-12 w-12" onClick={switchTheme}>
                    {theme == '' ? (<SunIcon/>) : (<MoonIcon/>)}
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Switch to {theme == '' ? 'dark' : 'light'} theme.</p>
            </TooltipContent>
            </Tooltip>
        </>
    )
}