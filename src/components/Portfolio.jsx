import React from "react";

const projects = [
  {
    title: "AI Habit Tracker & Coach (Ollama LLM)",
    github: "https://github.com/rajvib21/AI-Habit-Tracker",
    youtube: "https://www.youtube.com/@rajvibhatt75",
  },
  {
    title: "Surplus Food Tracker (AI + OCR + OpenCV + Recommender)",
    github: "https://github.com/rajvib21/Surplus_Food_Tracker",
    youtube: "https://www.youtube.com/@rajvibhatt75",
  },
  {
    title: "AI Chatbot (LLM Based)",
    github: "https://github.com/rajvib21/ChatBot-utility",
    youtube: "https://www.youtube.com/@rajvibhatt75",
  },
  {
    title: "Heart Attack Prediction (Decision Tree ML)",
    github: "https://github.com/rajvib21/heart_attack_predictor_ml",
    youtube: "#",
  },
  {
    title: "Credit Card Fraud Detection (Power BI Dashboard)",
    github: "https://github.com/rajvib21/Credit-Card-Fraud-Detection",
    youtube: "#",
  },
  {
    title: "StackIT – LLM Q&A React Platform",
    github: "https://github.com/rajvib21/StackIT",
    youtube: "#",
  },
  {
    title: "Mother’s Day Game (Vanilla JavaScript)",
    github: "https://github.com/rajvib21/mother-s_day_game",
    youtube: "#",
  },
];

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-[#f7efe5] to-[#a18276] py-20 text-black"
    >
      <div className="max-w-screen-lg mx-auto px-6">
        <p className="text-4xl font-bold border-b-4 border-[#6f4e37] inline">
          Portfolio
        </p>

        <p className="mt-4 text-lg">
          A collection of my AI, ML, and frontend projects built during my learning journey.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#6f4e37] text-white rounded-md hover:opacity-90"
                >
                  GitHub
                </a>

                {project.youtube !== "#" && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-[#6f4e37] text-[#6f4e37] rounded-md hover:bg-[#6f4e37] hover:text-white"
                  >
                    YouTube
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
