import React, {useState} from "react";
import {ImHome3, ImStarFull, ImBooks, ImBriefcase, ImBubble} from "react-icons/im";


const Navigation = () => {
    const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="navigation">
      <a href="#Home" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}>
        <ImHome3 />
      </a>
      <a href="#Skills" onClick={() => setActiveNav("#Skills")} className={activeNav === '#Skills' ? 'active' : ''}>
        <ImStarFull />
      </a>
      <a href="#Experience" onClick={() => setActiveNav("#Experience")} className={activeNav === '#Experience' ? 'active' : ''}>
        <ImBooks />
      </a>
      <a href="#Portfolio" onClick={() => setActiveNav("#Portfolio")} className={activeNav === '#Portfolio' ? 'active' : ''}>
        <ImBriefcase />
      </a>
      <a href="#ContactMe" onClick={() => setActiveNav("#ContactMe")} className={activeNav === '#ContactMe' ? 'active' : ''}>
        <ImBubble />
      </a>
    </nav>
  );
};

export default Navigation;
