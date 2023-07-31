import React from "react";
import ReactPlayer from "react-player";
import MainIllustrationSVG from "../../assets/images/Logo.mp4";
import MainIllustrationPNG from "../../assets/images/mainillustration.png";

export const MainIllustration: React.FC = () => {
  return (
    <div className="main-illustration">
      <div className="main-video">
        <ReactPlayer
          url={MainIllustrationSVG}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                poster: MainIllustrationPNG,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
