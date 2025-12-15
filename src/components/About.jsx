import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-[#f7efe5] to-[#a18276] home"

    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-amber-700">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am an aspiring <strong>Machine Learning & AI enthusiast</strong> with a deep passion 
          for continuous learning and innovation. I have participated in multiple 
          <strong> hackathons</strong> and attended several <strong>technical trainings</strong>, which 
          have strengthened my analytical and problem-solving skills.
        </p>

        <br />

        <p className="text-xl">
          As AI rapidly evolves, its limitations in ethics, privacy, and safety are becoming 
          more visible. This motivates me to integrate <strong>AI with Cybersecurity</strong> in the 
          future. To contribute meaningfully, I aim to understand AI in depth and help build 
          systems that are more secure, transparent, and human-centered.
        </p>

        <br />

        <p className="text-xl">
          Alongside technology, I am a <strong>classical Bharatanatyam dancer</strong> with over 
          <strong> 15 years of training</strong>, a completed <strong>bachelor's degree</strong> in the art form, 
          and performances at the <strong>state level</strong>. I am also trained in music, which reflects 
          my creativity, discipline, and passion. My artistic journey inspires me to blend logic 
          with expression, adding a unique perspective to my work in AI.
        </p>

        <br />

        <p className="text-xl">
          I love <strong>travelling</strong> and <strong>planting</strong>, activities that keep me grounded, 
          connected to nature, and open to new experiences. They help me remain curious, humble, 
          and rooted in my values.
        </p>

        <br />

        <p className="text-xl">
          I enjoy building projects from scratch and understanding concepts deeply. I value 
          minimalistic design, thoughtful user experience, and purposeful branding. My vision is 
          to create AI-driven solutions that are not only intelligent, but also more 
          <strong> human, ethical, and accessible</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;
