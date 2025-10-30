import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function LinkedInButton(){
    return(
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="h-14 w-14">
                        <a href="https://www.linkedin.com/in/dacz-krisztian/">
                            <LinkedInIcon fontSize='large'/>
                        </a>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>View my LinkedIn profile.</p>
                </TooltipContent>
            </Tooltip>
        </>
    )
}