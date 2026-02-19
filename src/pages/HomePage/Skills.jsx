import React from "react";

const Skills = () => {
  const skills = [
    "Data Entry",
    "Microsoft Excel",
    "Microsoft Word",
    "Banking Software",
    "Typing Speed & Accuracy",
    "Computer Operation",
    "Data Management",
    "Office Applications",
  ];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-16">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-400">
        Professional Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-blue-500 p-4 rounded-xl text-center hover:bg-blue-500 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
