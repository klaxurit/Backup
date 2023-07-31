import React, { useState } from "react";
import MainIllustrationSVG from "../../assets/images/Logo.mp4";
import MainIllustrationWEBM from "../../assets/images/Logo.webm";
import MainIllustrationOGV from "../../assets/images/Logo.ogv";
import MainIllustrationPNG from "../../assets/images/mainillustration.png";

export const MainIllustration: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="main-illustration">
      {!videoLoaded && <img src={MainIllustrationPNG} className="main-img" alt="Loading..." />}
      <video playsInline autoPlay loop muted className="main-video" onLoadedData={handleVideoLoad}>
        <source src={MainIllustrationSVG} type="video/mp4" />
        <source src={MainIllustrationWEBM} type="video/webm" />
        <source src={MainIllustrationOGV} type="video/ogg" />
      </video>
    </div>
  );
}
