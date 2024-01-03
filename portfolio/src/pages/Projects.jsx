import React from "react";
import { projects } from "../assets/data/datafordisplay";
import CarouselSlider from "../Components/Carousel";
import { FaGithub } from "react-icons/fa";
import { PiScreencast } from "react-icons/pi";

const Projects = () => {
  return (
    <>
      <section className="h-max py-10 border" id="projects">
        <h4 className="font-semibold text-center mb-20">PROJECTS</h4>
        <div className="flex w-screen justify-center items-start gap-10 flex-wrap">
          {projects &&
            projects.map((ele, id) => (
              <div className="w-4/12 p-4 h-full border" key={id + 1}>
                <CarouselSlider slider={ele.img} />
                <div className="flex items-center justify-between">
                  <h6 className="font-semibold mb-4">{ele.title} </h6>
                  {ele.live ? (
                    <p className="text-red-600 font-semibold font-sans">Live</p>
                  ) : (
                    ""
                  )}{" "}
                </div>
                <p>{ele.desc} </p>
                <div className="flex mt-5 justify-between">
                  <div className="flex gap-5">
                    <a target="_blank" href={ele.github} rel="noreferrer">
                      <FaGithub className="text-3xl font-semibold" />
                    </a>
                    <a target="_blank" rel="noreferrer" href={ele.deployed}>
                      <PiScreencast className="text-3xl font-semibold" />
                    </a>
                  </div>
                  <div className="flex gap-2 ">
                    {ele.techstack &&
                      ele.techstack.map((tech, idx) => (
                        <div className="object-cover h-max" key={idx + 1}>
                          <img className="h-8" src={tech} alt="tech_stack" />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
