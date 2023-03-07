import React from "react";

const SliderInstruction = () => {
  return (
    <div className="slider__container">
        <h5 className="heading__fifth">Slider instructions</h5>
      <div className="slider__labels">
        <div className="slider__label">Basic</div>
        <div className="slider__label">Lower Intermediate</div>
        <div className="slider__label">Intermediate</div>
        <div className="slider__label">Upper Intermediate</div>
        <div className="slider__label">Advanced</div>
      </div>
      <input
        type="range"
        min="1"
        max="5"
        value="3"
        className="slider slider__value--3"
        disabled
      />
    </div>
  );
};

export default SliderInstruction;
