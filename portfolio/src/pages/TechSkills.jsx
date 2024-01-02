import React from "react";
import { skills } from "../assets/skills_data/skills";

const TechSkills = () => {
  return (
    <>
      <section id="techskills" className="border mb-36">
        <h4 className="font-semibold text-center mb-20">TECH STACKS</h4>
        <div className="w-8/12 m-auto gap-5 flex  items-center flex-wrap justify-around ">
          {skills &&
            skills.map((ele, id) => (
              <div key={id + 1}>
                <img className="h-20 m-3" src={ele.logo} alt="logo" />
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default TechSkills;
