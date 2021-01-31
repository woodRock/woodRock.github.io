import React from "react";
import Markdown from "../components/Markdown";
import skills from "../assets/skills.md";

const Skills = () => {
  return <Markdown title={"Skills"} markdown={skills} />;
};

export default Skills;
