import React from "react";
import ProjectCard from "./ProjectCard";
import bannerzidio from "../../assets/zidio.png";
import bannerportfolio from "../../assets/portfolio.png";

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
          bannerImg={bannerzidio}
        />
        <ProjectCard
          title="Spotify Clone UI"
          main="this is a spotify clone created using react js and tailwind css."
          demoLink="https://github.com/Anandhukb0007/Spotify-Front-End"
          codeLink="https://github.com/Anandhukb0007/Spotify-Front-End"
          bannerImg="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/800px-Spotify_App_Logo.svg.png"
        />
        <ProjectCard
          title="Porfolio Website"
          main="this is a portfolio website created using react js and tailwind css."
          demoLink="https://anandhukb.vercel.app/"
          codeLink="https://github.com/Anandhukb0007/portfolio"
          bannerImg={bannerportfolio}
        />
      </div>
    </div>
  );
};

export default Projects;
