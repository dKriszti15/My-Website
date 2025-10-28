import { Button } from "./ui/button";

export default function PageNavigations(){
    return(
        <>
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4">
                <Button className="h-12">Home</Button>
                <Button className="h-12">Projects</Button>
                <Button className="h-12">Experience</Button>
            </div>
        </>
    )
}
