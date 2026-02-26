import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import BlogArticle from "./blogArticle/BlogArticle";
import AchievementsPage from "../pages/AchievementsPage";
import CTFPage from "../pages/CTFPage";
import BlogsPage from "../pages/BlogsPage";
import ContactPage from "../pages/ContactPage";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <BrowserRouter>
            <Switch>
              {/* Home Page */}
              <Route path="/" exact>
                <Header />
                <Greeting />
                <Skills />
                <StackProgress />
                <Education />
                <WorkExperience />
                <Projects />
                <StartupProject />
                <Talks />
                <Twitter />
                <Podcast />
                <Profile />
                <Footer />
                <ScrollToTopButton />
              </Route>

              {/* Dedicated Pages */}
              <Route path="/achievements" exact component={AchievementsPage} />
              <Route path="/ctf" exact component={CTFPage} />
              <Route path="/blogs" exact component={BlogsPage} />
              <Route path="/contact" exact component={ContactPage} />

              {/* Blog Article */}
              <Route path="/blog/:id" exact component={BlogArticle} />
            </Switch>
          </BrowserRouter>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
