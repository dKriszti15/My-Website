import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import LinkedInButton from "./LinkedInButton";
import GitHubButton from "./GitHubButton";

export default function MobilePageNavigations(){
    return(
        <>
            <Sheet>
                <SheetTitle/>
                <SheetTrigger asChild>
                    <Button size="icon" className="h-14 w-14">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="flex flex-col gap-1 w-[30%]">
                    <Button>
                    <a href="#home">Home</a>
                    </Button>
                    <Button>
                        <a href="#projects">Projects</a>
                    </Button>
                    <Button>
                        <a href="#experience">Experience</a>
                    </Button>
                    <div className="flex flex-row items-center space-x-1">
                        <LinkedInButton/>
                        <GitHubButton/>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}