import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function GitHubButton(){
    return(
        <>
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
        </>
    )
}