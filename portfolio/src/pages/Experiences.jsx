import React from "react";
import finurl_logo from "./../assets/img/finurl.jpeg";
import dent_logo from "./../assets/img/dent.jpeg";

const Experiences = () => {
  return (
    <>
      <section id="experience">
        <h4 className="font-semibold text-center mb-10">Work Experience</h4>
        <div className="flex w-11/12 flex-wrap justify-between m-auto border gap-10">
          <div className="p-5 w-2/6 rounded">
            <div className="flex mb-2 justify-between">
              <h5 className="text-2xl my-2 font-semibold">
                FinURL Enterprises Pvt Ltd
              </h5>
              <img className="h-10" src={finurl_logo} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <h6 className="text-lg underline">Full Stack Developer </h6>
              <p className="italic text-gray-500"> Aug-Dec 2023 </p>
            </div>
            <ul className="p-1 mt-2">
              <li>
                • Building responsive Frontend Webapp using React.js, MUI and
                Redux for state management.
              </li>
              <li>
                • Implementing REST API’s to the backend in Node.js with live
                bank’s API’s.
              </li>
              <li>
                • Providing user-friendly flow to the client for checking loan
                eligibility till loan disbursal.
              </li>
            </ul>
          </div>
          <div className="p-5 w-3/6 rounded">
            <div className="flex mb-2 justify-between">
              <h5 className="text-2xl my-2 font-semibold">
                Dent Networks Pvt Ltd
              </h5>
              <img className="h-10" src={dent_logo} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <h6 className="text-lg underline">
                Full Stack Developer - Intern{" "}
              </h6>
              <p className="italic text-gray-500"> Aug-Dec 2023 </p>
            </div>
            <ul className="p-1 mt-2">
              <li>
                • Worked on a webapp built on top of React and MUI for the Voice
                Analysis..
              </li>
              <li>
                • Writing API’s in Flask receiving responses from the ML models.
              </li>
              <li>
                • Analysing the audio data and displying the cases accordingly
                on the dashboard with details and remarks.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;
