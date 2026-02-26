import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) return null;

  const featured = bigProjects.projects.filter(p => p.featured);
  const regular = bigProjects.projects.filter(p => !p.featured);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
            {bigProjects.subtitle}
          </p>

          {/* ── Featured Projects ── */}
          {featured.map((project, i) => (
            <div
              key={`featured-${i}`}
              className={isDark ? "featured-project-card featured-project-card-dark" : "featured-project-card featured-project-card-light"}
            >
              <div className="featured-badge">⭐ Featured Project</div>
              {project.image && (
                <div className="featured-project-image">
                  <img src={project.image} alt={project.projectName} />
                </div>
              )}
              <div className="featured-project-body">
                {project.projectSubHeader && (
                  <p className={isDark ? "featured-sub-header dark-mode-text" : "featured-sub-header"}>
                    {project.projectSubHeader}
                  </p>
                )}
                <h3 className={isDark ? "featured-project-title dark-mode-text" : "featured-project-title"}>
                  {project.projectName}
                </h3>
                <p className={isDark ? "featured-project-desc dark-mode-text" : "featured-project-desc"}>
                  {project.projectDesc}
                </p>
                {project.techTags && project.techTags.length > 0 && (
                  <div className="featured-tags-row">
                    {project.techTags.map((tag, j) => (
                      <span key={j} className={isDark ? "featured-tag featured-tag-dark" : "featured-tag"}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {project.footerLink && project.footerLink.length > 0 && (
                  <div className="project-card-footer">
                    {project.footerLink.map((link, j) => (
                      <span
                        key={j}
                        className={isDark ? "dark-mode project-tag" : "project-tag"}
                        onClick={() => openUrlInNewTab(link.url)}
                      >
                        {link.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* ── Regular Projects Grid ── */}
          <div className="projects-container">
            {regular.map((project, i) => (
              <div
                key={i}
                className={isDark ? "dark-mode project-card project-card-dark" : "project-card project-card-light"}
              >
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.projectName} className="card-image" />
                  </div>
                )}
                <div className="project-detail">
                  <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                    {project.projectName}
                  </h5>
                  <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                    {project.projectDesc}
                  </p>
                  {project.footerLink && project.footerLink.length > 0 && (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, j) => (
                        <span
                          key={j}
                          className={isDark ? "dark-mode project-tag" : "project-tag"}
                          onClick={() => openUrlInNewTab(link.url)}
                        >
                          {link.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
