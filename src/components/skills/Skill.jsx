export default function Skill({skill}) {
  return (
    <div className="skills__data">
      <i className="bx bx-badge-check skills__badge"></i>

      <div >
        <h3 className="skills__name">{skill.skill}</h3>
        <span className="skills__level">{skill.level}</span>
      </div>
    </div>
  );
}