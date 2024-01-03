import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubCalander = () => {
  return (
    <>
      <section id="github" className="py-10 mt-5">
        <h4 className="font-semibold text-center mb-10">GitHub Calendar</h4>
        <div className="m-auto bg-black text-white px-5 py-2 rounded-md w-max">
          <GitHubCalendar username="rohitdsawant" />
        </div>
        <div className="flex gap-5 mt-5 flex-wrap w-3/6 m-auto">
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=RohitDSawant&theme=github"
            alt="RohitDSawant"
          />
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=RohitDSawant&theme=github&utcOffset=8"
            alt="RohitDSawant"
          />
        </div>
      </section>
    </>
  );
};

export default GitHubCalander;
