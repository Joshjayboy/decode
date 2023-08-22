"use client";

import React, { useState } from "react";
import Nav from "../components/nav";
import SideBar from "../components/sidebar";
import MainContent from "../components/main-content";
import Overview from "../components/overview";
import Projects from "../components/projects";
import Task from "../components/task";
import Files from "../components/files";
import Team from "../components/team";

function Homepage() {
  const [activeOption, setActiveOption] = useState("overview");

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  let content = null;

  if (activeOption === "overview") {
    content = <Overview />;
  } else if (activeOption === "projects") {
    content = <Projects />;
  } else if (activeOption === "task") {
    content = <Task />;
  } else if (activeOption === "files") {
    content = <Files />;
  } else if (activeOption === "team") {
    content = <Team />;
  }

  return (
    <div className="flex relative">
      <SideBar activeOption={activeOption} onOptionClick={handleOptionClick} />
      <div className="flex flex-col bg-[#272727] w-[100%] pl-8 pr-6">
        <Nav />
        <MainContent content={content} />
      </div>
    </div>
  );
}

export default Homepage;
