import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({ cardInfo, isDark }) {
  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li
          key={i}
          className={isDark ? "subTitle dark-mode-text" : "subTitle"}
        >
          {item}
        </li>
      ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="experience-card-body">
        {/* Logo on the left – matching education card layout */}
        {cardInfo.companylogo && (
          <div className="experience-card-left">
            <img
              src={cardInfo.companylogo}
              alt={cardInfo.company + " logo"}
              className="experience-roundedimg"
            />
          </div>
        )}

        {/* All text content on the right */}
        <div className="experience-card-right">
          <div className="experience-header-row">
            <div className="experience-header-left">
              <h5
                className={
                  isDark
                    ? "experience-text-role dark-mode-text"
                    : "experience-text-role"
                }
              >
                {cardInfo.role}
              </h5>
              <h6
                className={
                  isDark
                    ? "experience-text-company dark-mode-text"
                    : "experience-text-company"
                }
              >
                {cardInfo.company}
              </h6>
            </div>
            <span
              className={
                isDark
                  ? "experience-text-date dark-mode-text"
                  : "experience-text-date"
              }
            >
              {cardInfo.date}
            </span>
          </div>
          <p
            className={
              isDark
                ? "subTitle experience-text-desc dark-mode-text"
                : "subTitle experience-text-desc"
            }
          >
            {cardInfo.desc}
          </p>
          {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
            <ul>
              <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
