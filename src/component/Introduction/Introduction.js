import React from "react";
import MyPicture from "../../assets/images/Daniil-nobg.png";
import CV from "../../assets/cv/Daniil-resume.pdf";

const Introduction = () => {
  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Daniil_Arinic_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="introduction">
      <h1 className="heading__primary">
        Daniil Arinič <span className="glitch">CV</span> Application
      </h1>
      <div className="introduction__informationBox">
        <div className="introduction__leftSide">
          <p className="introduction__paragraph">
            Hello, I am Daniil, a Full-Stack Developer and Customer Service
            Specialist with a passion for problem-solving and attention to
            detail. I possess extensive experience in resolving customer
            complaints and analyzing KPIs to identify opportunities for
            improvement. I also possess a vast knowledge on physical therapy
            from my Masters degree and am always willing to assist people in
            pain reductions or habit change to create more ergonomical friendly
            environment. I am a result-driven individual who thrives in
            high-stress environments and is constantly seeking new challenges. I
            am excited to bring my skills and motivation to the IT field to
            contribute towards a better future for humanity. In addition to my
            professional experience, I have completed a Full-Stack course
            program in BIT(Baltic institute of Technology) and
            Full-Stack-Academy at Present-Connection, as well as multiple Udemy
            certifications. Outside of work, I enjoy exploring the philosophy of
            Stoicism, playing board games, and watching documentaries.
          </p>
          <div className="introduction__buttonBox">
            <button className="introduction__buttonBox--1">
              <a href="#Skills">Check my skills</a>
            </button>
            <button
              className="introduction__buttonBox--2"
              onClick={handleCvDownload}
            >
              Download my CV
            </button>
          </div>
        </div>
        <div className="introduction__rightSide">
          <img
            src={MyPicture}
            alt="Daniil Arinič"
            className="introduction__image"
          />
        </div>
      </div>
      <div className="cyber-bar-2"></div>
      <div className="cyber-bar-1"></div>
      <div className="cyber-bar-3"></div>
      <div className="cyber-bar-4"></div>
    </div>
  );
};

export default Introduction;
