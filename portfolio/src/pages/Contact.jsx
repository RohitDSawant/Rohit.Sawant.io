import React from "react";
import { FaGithub, FaMailBulk } from "react-icons/fa";
import { PiLinkedinLogo, PiPhoneCall } from "react-icons/pi";

const Contact = () => {
  return (
    <>
      <div className="flex justify-around w-10/12 m-auto items-center">
        <a href={"mailto: rohits1547@gmail.com"}>
          <FaMailBulk />
        </a>
        <a href={"tel: 9967722208"} target="_blank" rel="noreferrer">
          <PiPhoneCall />
        </a>
        <a
          href="https://www.linkedin.com/in/rohit-sawant-%E2%99%91-a1b636177/"
          target="_blank"
          rel="noreferrer"
        >
          <PiLinkedinLogo />
        </a>
        <a
          href="https://www.github.com/RohitDSawant"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </>
  );
};

export default Contact;
