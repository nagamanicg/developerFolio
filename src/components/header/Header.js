import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { Link } from "react-router-dom";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  bigProjects,
  ctfSection
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;
  const viewProjects = bigProjects.display;
  const viewCTF = ctfSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Link to="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="/#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="/#experience">Experience</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="/#projects">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <Link to="/achievements">Achievements</Link>
            </li>
          )}
          {viewCTF && (
            <li>
              <Link to="/ctf">CTF</Link>
            </li>
          )}
          {viewBlog && (
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="/#opensource">Open Source</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="/#talks">Talks</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="/#resume">Resume</a>
            </li>
          )}
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
