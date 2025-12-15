import React from "react";

const Experience = () => {
  const techs = [
    { id: 1, title: "Python", style: "shadow-yellow-400" },
    { id: 2, title: "Pandas", style: "shadow-blue-300" },
    { id: 3, title: "NumPy", style: "shadow-indigo-400" },
    { id: 4, title: "Machine Learning", style: "shadow-green-400" },
    { id: 5, title: "AI Fundamentals", style: "shadow-purple-400" },
    { id: 6, title: "LLMs – Ollama", style: "shadow-teal-300" },
    { id: 7, title: "Power BI", style: "shadow-yellow-500" },
    { id: 8, title: "Azure AI", style: "shadow-blue-500" },

    { id: 9, title: "HTML", style: "shadow-orange-500" },
    { id: 10, title: "CSS", style: "shadow-blue-500" },
    { id: 11, title: "Tailwind CSS", style: "shadow-sky-400" },
    { id: 12, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 13, title: "React", style: "shadow-blue-600" },

    { id: 14, title: "MySQL", style: "shadow-blue-400" },
    { id: 15, title: "SQLite", style: "shadow-gray-400" },
    { id: 16, title: "Java", style: "shadow-red-400" },

    { id: 17, title: "GitHub", style: "shadow-gray-500" },
  ];

  return (
    <div
      name="experience"
      className="h-screen w-full bg-gradient-to-b from-[#f7efe5] to-[#a18276] home"

    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        
        {/* Heading */}
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            Technologies, tools, and skills I have worked with in my projects and learning journey.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8">
          {techs.map(({ id, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style}`}
            >
              <p className="text-xl font-semibold">{title}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold border-b-4 border-gray-500 inline">
            Certifications & Trainings
          </h2>

          <ul className="mt-6 space-y-4 text-lg">

            <li>
              ✅ <strong>Introduction to Data Science & AI</strong> – RUSA & BSE  
              <br />
              <a
                href="PASTE_CERTIFICATE_LINK_1_HERE"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline"
              >
                View Certificate
              </a>
            </li>

            <li>
              ✅ <strong>AI-900: Azure AI Fundamentals</strong> – Microsoft  
              <br />
              <a
                href="PASTE_CERTIFICATE_LINK_2_HERE"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline"
              >
                View Certificate
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
