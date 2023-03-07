import React from "react";
import SliderInstruction from "../Slider/SliderInstruction";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container">
        <h1 className="heading__primary">Skills</h1>
        <SliderInstruction />
        <div className="skills__ListBox">
          <SkillItem skill="React.js" value="3" />
          <SkillItem skill="JavaScript" value="3" />
          <SkillItem skill="HTML" value="3" />
          <SkillItem skill="CSS/SASS" value="3" />
          <SkillItem skill="Node.js" value="3" />
          <SkillItem skill="MongoDB" value="2" />
          <SkillItem skill="Express.js" value="2" />
          <SkillItem skill="Git" value="2" />
          <SkillItem skill="TypeScript" value="1" />
          <SkillItem skill="React Native" value="1" />
          <SkillItem skill="Redux" value="2" />
          <SkillItem skill=".NET (currently focused on)" value="2" />
          <SkillItem skill="C# (currently focused on)" value="2" />
          <SkillItem skill="SQL" value="2" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
