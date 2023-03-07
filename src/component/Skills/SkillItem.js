import React from "react";

const SkillItem = ({ skill, value }) => {
    return (
        <div className="skills__item">
        <h4 className="heading__fourth">{skill}</h4>
        <input
            type="range"
            min="1"
            max="5"
            value={value}
            className={`slider slider__value--${value}`}
            disabled
        />
        </div>
    );
    }

export default SkillItem;