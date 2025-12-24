"use client";

import { useState } from "react";
import Navbar from "./component/Navbar";
import Summary from "./summary/summary"; // Assuming this is a valid import
import ProjSummary from "./summary/project-sum";
import SkillsSummary from "./summary/skills-sum"; // Assuming this is a valid import
import Footer from "./component/Footer";
import ContactSummary from "./summary/contact-sum";
import Snowfall from "react-snowfall";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="bg-blue3 dark:bg-gray-700 min-h-screen pt-16">
        <Snowfall color="#82C3D9" snowflakeCount={100} />
        <Navbar />
        <div id="Summary">
          <Summary />
        </div>
        <div id="Projects">
          <ProjSummary />
        </div>
        <div id="Skills">
          <SkillsSummary />
        </div>
        <div id="Contact">
          <ContactSummary />
        </div>
        <Footer />
        <button
          className="fixed w-10 h-10 bottom-10 right-10 bg-neutral-900 dark:bg-neutral-100 rounded-full text-white dark:text-black
                      flex items-center justify-center"
          onClick={toggleDark}
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5} // Corrected from stroke-width
              stroke="currentColor"
              className="size-6" // The SVG itself should just be its size
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
