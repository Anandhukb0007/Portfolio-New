import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Zidio Task Manager"
          main="this is a task manager website created using mern stack functionality."
          demoLink="https://github.com/Anandhukb0007/Zidio_Task_Management"
          codeLink="https://github.com/Anandhukb0007/Zidio_Task_Management"
        />
        <ProjectCard
          title="Spotify Clone UI"
          main="this is a spotify clone created using react js and tailwind css."
          demoLink="https://github.com/Anandhukb0007/Spotify-Front-End"
          codeLink="https://github.com/Anandhukb0007/Spotify-Front-End"
        />
        <ProjectCard
          title="Porfolio Website"
          main="this is a portfolio website created using react js and tailwind css."
          demoLink="https://anandhukb.vercel.app/"
          codeLink="https://github.com/Anandhukb0007/portfolio"
        />
      </div>
    </div>
  );
};

export default Projects;
