import React, { useContext } from "react";
import "./CTF.scss";
import { ctfSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function CTF() {
    const { isDark } = useContext(StyleContext);

    if (!ctfSection.display) {
        return null;
    }

    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="ctf">
                <div className="ctf-header">
                    <h1 className="ctf-header-title">{ctfSection.title}</h1>
                    <p
                        className={
                            isDark
                                ? "dark-mode ctf-header-subtitle"
                                : "subTitle ctf-header-subtitle"
                        }
                    >
                        {ctfSection.subtitle}
                    </p>
                </div>
                <div className="ctf-cards-div">
                    {ctfSection.ctfs.map((ctf, i) => (
                        <div
                            key={i}
                            className={
                                isDark ? "ctf-card ctf-card-dark" : "ctf-card ctf-card-light"
                            }
                        >
                            <div className="ctf-card-header">
                                {ctf.logo ? (
                                    <div className="ctf-card-logo-wrapper">
                                        <img src={ctf.logo} alt={ctf.name + " logo"} className="ctf-card-logo-img" />
                                    </div>
                                ) : (
                                    <div className="ctf-card-icon">🚩</div>
                                )}
                                <div className="ctf-card-title-group">
                                    <h3
                                        className={
                                            isDark ? "ctf-card-name dark-mode-text" : "ctf-card-name"
                                        }
                                    >
                                        {ctf.name}
                                    </h3>
                                    <span
                                        className={
                                            isDark ? "ctf-card-date dark-mode-text" : "ctf-card-date"
                                        }
                                    >
                                        {ctf.date}
                                    </span>
                                </div>
                                {ctf.placement && (
                                    <span className="ctf-card-placement">{ctf.placement}</span>
                                )}
                            </div>
                            <p
                                className={
                                    isDark
                                        ? "ctf-card-desc dark-mode-text"
                                        : "subTitle ctf-card-desc"
                                }
                            >
                                {ctf.description}
                            </p>
                            {ctf.categories && ctf.categories.length > 0 && (
                                <div className="ctf-card-tags">
                                    {ctf.categories.map((cat, j) => (
                                        <span
                                            key={j}
                                            className={
                                                isDark ? "ctf-tag ctf-tag-dark" : "ctf-tag ctf-tag-light"
                                            }
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Fade>
    );
}
