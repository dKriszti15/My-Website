"use client";
import About from "@/components/About";
import CustomNavbar from "@/components/CustomNavbar";
import Experience from "@/components/Experience";
import ProjectCards from "@/components/ProjectCards";



export default function Home() {



  return (
    <>
      <CustomNavbar/>

      <div id="about">
        <About/>
      </div>

      <div id="experience">
        <Experience/>
      </div>
      <div id="projects" className="min-h-screen flex flex-col items-center justify-center p-8">
        <ProjectCards/>  
      </div>
    </>
  );
}
