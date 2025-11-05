"use client";
import CustomNavbar from "@/components/CustomNavbar";
import projectss from "../_data/projects.json";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {

  const { projects } = projectss;

  return (
    <>

      <CustomNavbar/>
      <main id="projects" className="min-h-screen flex flex-col items-center justify-center p-22">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {projects.map((proj) => (
            <Card
              key={proj.title}
              className="p-6 transition w-80 flex flex-col items-center space-y-3 justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <CardTitle className="text-xl">
                {proj.title}
              </CardTitle>
              <CardDescription>
                {proj.description}
              </CardDescription>

              <CardFooter className="flex flex-col items-center space-y-3">
                <div className="flex flex-wrap justify-center gap-2">
                  {proj.techStack.map((tech) => (
                    <Badge variant="outline" key={tech}>{tech}</Badge>
                  ))}
                </div>
                <Button className="duration-300 hover:scale-115"><a href={`https://github.com/dKriszti15/${proj.title}`}>View code</a></Button>
              </CardFooter>

            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
