import React from "react";
import MainIllustrationSVG from "../../../assets/images/Logo.mp4";
import MainIllustrationWEBM from "../../../assets/images/Logo.webm";
import MainIllustrationPNG from "../../../assets/images/mainillustration.png";

export const MainIllustration: React.FC = () => {

  return (
    <div className="main-illustration">
      <video playsInline autoPlay loop muted className="main-video">
        <source src={MainIllustrationSVG} type="video/mp4" />
        <source src={MainIllustrationWEBM} type="video/webm" />
        <img className="main-img" src={MainIllustrationPNG} alt="Placeholder" />
      </video>
    </div>
  );
};
