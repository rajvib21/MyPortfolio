import React from "react";

const skills = [
  "Python", "Pandas", "NumPy", "Machine Learning",
  "AI Fundamentals", "LLMs (Ollama)", "Power BI", "Azure AI",
  "HTML", "CSS", "Tailwind CSS", "JavaScript", "React",
  "MySQL", "SQLite", "Java", "GitHub"
];

const Experience = () => {
  return (
   <div
  name="experience"
  className="experience min-h-screen pt-24 bg-gradient-to-b from-[#f7efe5] to-[#a18276] text-black"
>

      <div className="max-w-screen-lg mx-auto px-6">
        <p className="text-4xl font-bold border-b-4 border-[#6f4e37] inline">
          Experience
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white rounded-lg py-6 text-center shadow-md hover:scale-105 duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
