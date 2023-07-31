import React, { useState, useRef, useEffect } from "react";
import MainIllustrationSVG from "../../assets/images/Logo.mp4";
import MainIllustrationWEBM from "../../assets/images/Logo.webm";
import MainIllustrationPNG from "../../assets/images/mainillustration.png";

export const MainIllustration: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <div className="main-illustration">
      {!videoLoaded && !isSafari && <img src={MainIllustrationPNG} className="main-img" alt="Loading..." />}
      <video ref={videoRef} playsInline autoPlay loop muted className="main-video" onLoadedData={handleVideoLoad}>
        <source src={MainIllustrationSVG} type="video/mp4" />
        <source src={MainIllustrationWEBM} type="video/webm" />
      </video>
    </div>
  );
}
