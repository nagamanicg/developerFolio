import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "achievement-card-dark" : "achievement-card"}>
      <div className="achievement-text-details">
        <div className="achievement-header-row">
          <div className="achievement-header-left">
            <h5
              className={
                isDark
                  ? "achievement-text-title dark-mode-text"
                  : "achievement-text-title"
              }
            >
              {cardInfo.title}
            </h5>
            <p
              className={
                isDark
                  ? "subTitle achievement-text-desc dark-mode-text"
                  : "subTitle achievement-text-desc"
              }
            >
              {cardInfo.description}
            </p>
          </div>
        </div>
        {cardInfo.footer && cardInfo.footer.length > 0 && (
          <div className="achievement-card-footer">
            {cardInfo.footer.map((v, i) => (
              <span
                key={i}
                className={
                  isDark ? "dark-mode achievement-tag" : "achievement-tag"
                }
                onClick={() => openUrlInNewTab(v.url, v.name)}
              >
                {v.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
