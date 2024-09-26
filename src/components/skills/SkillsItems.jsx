import Skill from "./Skill";

export default function SkillsItems({ skills }) {
  const { title, skillsItems } = skills;

  return (
    <div className="skills__content">
      <h3 className="skills__title">{title}</h3>

      <div className="skills__box">
        {skillsItems.map((skill, index) => (
          <Skill skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
}
