"use client";
import CustomNavbar from "@/components/CustomNavbar";
import projectss from "../_data/projects.json";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";

export default function Home() {

  const { projects } = projectss;

  return (
    <>
      <CustomNavbar/>
      <main id="projects" className="min-h-screen flex flex-col items-center justify-center p-18">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          {projects.map((proj) => (
            <Card
              key={proj.title}
              className="p-6 shadow-md hover:shadow-lg transition w-80"
            >
              <CardTitle className="text-xl">
                {proj.title}
              </CardTitle>
              <CardDescription>
                {proj.description}
              </CardDescription>
              <CardContent>
                contents
              </CardContent>
              <CardFooter>
                View code.
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

    </>
  );
}
