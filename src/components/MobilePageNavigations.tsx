import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function MobilePageNavigations(){
    return(
        <>
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
        </>
    )
}