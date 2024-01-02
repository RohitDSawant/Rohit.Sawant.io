import React from "react";
import profile_pic from "./../assets/img/profile.jpg";

const Landing = () => {
  return (
    <>
      <section className="h-screen">
        <h4 className="text-center my-16 font-bold" id="fsd">
          MERN STACK DEVELOPER
        </h4>
        <div className="flex flex-col xl:flex-row  w-full justify-around h-max items-center">
          <div className="w-3/12   ">
            <img className="h-72 block m-auto" src={profile_pic} alt="" />
          </div>
          <div className="w-5/12 ">
            <h4>Hello! 👋</h4>
            <p>
              I'm Rohit Sawant, a passionate Full Stack Web Developer with
              expertise in the MERN (MongoDB, Express.js, React, Node.js) stack.
              I thrive on turning creative ideas into high-quality, scalable web
              applications.
              <br />I embarked on my web development journey with a strong
              foundation in HTML, CSS, and JavaScript. As I delved deeper into
              the world of coding, I discovered the power and versatility of the
              MERN stack. My curiosity led me to explore each layer of the
              stack, and I quickly found my sweet spot in crafting seamless,
              interactive user experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
