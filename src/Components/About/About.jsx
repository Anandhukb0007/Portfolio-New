import React from "react";
import AboutImg from "../../assets/professional.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-80 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-20 pt-6 pb-6">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <p className="text-lg md:text-2xl leading-tight min-h-100 md:min-h-0 max-w-md">
                Dedicated BCA graduate with a specialization in Big Data
                Analytics and Cloud Computing. Proficient in building responsive
                web applications using HTML, CSS, JavaScript, React.js, Node.js,
                Express.js and MongoDB. Experienced in both Front-end and
                Back-end development. Passionate about problem-solving and
                learning in collaborative, team-based environments. Eager to
                bring technical and analytical strengths to a dynamic
                development team.
              </p>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
