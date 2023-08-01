import React, { useState, useEffect, useRef } from "react";
import MainIllustrationSVG from "../../../assets/images/Logo.mp4";
import MainIllustrationWEBM from "../../../assets/images/Logo.webm";
import MainIllustrationPNG from "../../../assets/images/mainillustration.png";

export const MainIllustration: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('canplay', handleVideoLoad);

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
          })
          .catch(error => {
          });
      }
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('canplay', handleVideoLoad);
      }
    };
  }, []);

  return (
    <div className="main-illustration">
      {!videoLoaded &&
        <img className="main-img" src={MainIllustrationPNG} alt="Placeholder" />
      }
      <video ref={videoRef} onCanPlay={handleVideoLoad} playsInline autoPlay loop muted className="main-video" preload="metadata" src={MainIllustrationWEBM}>
        <source src={MainIllustrationSVG} type="video/mp4" />
        <source src={MainIllustrationWEBM} type="video/webm" />
      </video>
    </div>
  );
};
