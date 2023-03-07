import React, { useEffect, useRef } from "react";
import eye from "../../assets/images/eyeMorty.png";


const Footer = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);


  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

      leftEyeRef.current.style.transform = `rotate(${90 + angleDeg}deg)`;
      rightEyeRef.current.style.transform = `rotate(${90 + angleDeg}deg)`;
    };

        const anchor = document.querySelector(".footer__animation");
        anchor.addEventListener("mousemove", handleMouseMove);
    

    return () => {
            anchor.removeEventListener("mousemove", handleMouseMove);
        };
  }, []);

  function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }

  return (
    <div className="footer">
      <h1 className="heading__primary">
        Thank you for "Looking" at my website
      </h1>
      <div className="footer__animation">
        <img className="leftEye" src={eye} alt="eye" ref={leftEyeRef}></img>
        <img className="rightEye" src={eye} alt="eye" ref={rightEyeRef}></img>
      </div>
    </div>
  );
};

export default Footer;
