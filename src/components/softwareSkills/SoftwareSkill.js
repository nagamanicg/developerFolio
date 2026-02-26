import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {skillsSection.softwareSkills.map((category, index) => {
          return (
            <div key={index} className="skill-category-container">
              <h4 className="skill-category-title">{category.categoryName}</h4>
              <ul className="dev-icons">
                {category.skills.map((skills, i) => {
                  return (
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={skills.skillName}
                    >
                      {skills.imageSrc ? (
                        <img
                          src={skills.imageSrc}
                          alt={skills.skillName}
                          className="skill-image-icon"
                        />
                      ) : (
                        <i
                          className={`${skills.fontAwesomeClassname} ${skills.fontAwesomeClassname.includes("devicon")
                            ? "colored"
                            : ""
                            }`}
                          style={skills.style}
                        ></i>
                      )}
                      <p>{skills.skillName}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
