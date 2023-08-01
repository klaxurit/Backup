import React, { useState, useEffect } from "react";
import MainIllustrationSVG from "../../../assets/images/Logo.mp4";
import MainIllustrationWEBM from "../../../assets/images/Logo.webm";
import MainIllustrationPNG from "../../../assets/images/mainillustration.png"; 

export const MainIllustration: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    if (document.querySelector('.main-video')) {
      document.querySelector('.main-video')!.addEventListener('canplay', handleVideoLoad);
    }
  }, []);

  return (
    <div className="main-illustration">
      {!videoLoaded &&
        <img className="main-img" src={MainIllustrationPNG} alt="Placeholder" />
      }
      <video onCanPlay={handleVideoLoad} playsInline autoPlay loop muted className="main-video" preload="metadata" src={MainIllustrationWEBM}>
        <source src={MainIllustrationSVG} type="video/mp4" />
        <source src={MainIllustrationWEBM} type="video/webm" />
      </video>
    </div>
  );
};
