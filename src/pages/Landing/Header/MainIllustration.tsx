import React from "react";

import useMediaQuery from "../../../hooks/useMediaQuery";
import MainIllustrationSVG from "../../../assets/images/Logo.mp4";
import MainIllustrationSVGMobile from "../../../assets/images/Logo_Mobile.mp4";
import MainIllustrationWEBM from "../../../assets/images/Logo.webm";
import MainIllustrationWEBMMobile from "../../../assets/images/Logo_Mobile.webm";
import MainIllustrationPNG from "../../../assets/images/mainillustration2.png";

export const MainIllustration: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:992px)');
  return (
    <div className="main-illustration">
      <video playsInline autoPlay loop muted className="main-video" poster={MainIllustrationPNG}>
        <source src={isMobile ? MainIllustrationSVGMobile : MainIllustrationSVG} type="video/mp4" />
        <source src={isMobile ? MainIllustrationWEBMMobile : MainIllustrationWEBM} type="video/webm" />
        <img className="main-img" src={MainIllustrationPNG} alt="Placeholder" />
      </video>
    </div>
  );
};
