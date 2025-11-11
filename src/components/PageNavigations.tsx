import { Button } from "./ui/button";

export default function PageNavigations(){
    return(
        <>
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4">
                <Button className="h-14">
                    <a href="#home">Home</a>
                </Button>
                <Button className="h-14">
                    <a href="#projects">Projects</a>
                </Button>
                <Button className="h-14">
                    <a href="#experience">Experience</a>
                </Button>
            </div>
        </>
    )
}
