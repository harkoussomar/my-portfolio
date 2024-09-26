import "./skills.css";
import SkillsItems from "./SkillsItems";

const additionalSkills = {
  title: "Additional Skills",
  skillsItems: [
    { skill: "Git-GitHub", level: "Intermediate" },
    { skill: "VS Code", level: "Intermediate" },
    { skill: "npm", level: "Intermediate" },
    { skill: "C", level: "Basic" },
    { skill: "C++", level: "Basic" },
    { skill: "Supabase", level: "Basic" },
  ],
};

const frontEndDeveloperSkills = {
  title: "Front-End Developer",
  skillsItems: [
    { skill: "HTML", level: "Intermediate" },
    { skill: "CSS", level: "Intermediate" },
    { skill: "JavaScript", level: "Intermediate" },
    { skill: "React", level: "Intermediate" },
    { skill: "Node.js", level: "Intermediate" },
    { skill: "Tailwind", level: "Intermediate" },
  ],
};




export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <SkillsItems skills={frontEndDeveloperSkills} />
        <SkillsItems skills={additionalSkills} />
      </div>
    </section>
  );
}
