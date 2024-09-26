import { useState } from "react";
import "./qualification.css";
import QualificationData from "./QualificationData";

const educationData = [
  {
    title: "Mathematical Sciences",
    location: "Souk Sebt - El Khawarezmi High School",
    date: "2018 - 2019",
  },
  {
    title: "Mathematical Sciences",
    location: "Beni Mellal - Technical High School",
    date: "2019 - 2020",
  },
  {
    title: "Mathematical Sciences",
    location: "Beni Mellal - Faculté Polydisciplinaire",
    date: "2020 - 2024",
  },
  {
    title: "Computer Engineering",
    location: "Rabat - Université Internationale de Rabat",
    date: "currently",
  },
];

const experienceData = [
  {
    title: "Full-Stack Developer",
    location: "Germany - SAP",
    date: "2021 - Present",
  },
  {
    title: "Data Analyst",
    location: "Canada - Shopify",
    date: "2018 - 2021",
  },
  {
    title: "Project Manager",
    location: "United Kingdom - HSBC",
    date: "2019 - Present",
  },
  {
    title: "Machine Learning Engineer",
    location: "United States - Tesla",
    date: "2020 - Present",
  },
];

export default function Qualification() {
  const [qualificationToggle, setQualificationToggle] = useState("education");

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              qualificationToggle === "education"
                ? "qualification__button qualification__button-active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setQualificationToggle("education")}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              qualificationToggle === "experience"
                ? "qualification__button qualification__button-active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setQualificationToggle("experience")}
          >
            <i className="uil uil-briefcase qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
          {qualificationToggle === "education" && (
            <div className="qualification__content">
              {educationData.map((item, index) => (
                <QualificationData key={index} index={index} item={item} />
              ))}
            </div>
          )}

          {qualificationToggle === "experience" && (
            <div className="qualification__content">
              {experienceData.map((item, index) => (
                <QualificationData key={index} index={index} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
