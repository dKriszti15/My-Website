
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Menubar } from "./ui/menubar";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function CustomNavbar(){
    return (
        <Menubar className="flex justify-between items-center px-5 pt-1 h-16 relative dark">

            <div>
                <Button className="h-12 w-12">
                        <SunIcon/>
                </Button>
            </div>

            {/* middle */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4">
                <Button className="h-12">Home</Button>
                <Button className="h-12">Projects</Button>
                <Button className="h-12">Experience</Button>
            </div>

            <div className="flex items-center space-x-2">
                {/* mobile screen */}
                <Sheet>
                <SheetTitle/>
                <SheetTrigger asChild>
                    <Button size="icon" className="md:hidden h-12 w-12">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="flex flex-col gap-1">
                    <Button>Home</Button>
                    <Button>Projects</Button>
                    <Button>Experience</Button>
                </SheetContent>
                </Sheet>

                {/* right */}

                <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="h-12 w-12">
                    <a href="https://github.com/dKriszti15?tab=repositories">
                        <GitHubIcon/>
                    </a>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>View my GitHub profile.</p>
                </TooltipContent>
                </Tooltip>
                
                
            </div>

        </Menubar>
    );
}
