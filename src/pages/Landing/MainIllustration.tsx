import MainIllustrationSVG from "../../assets/images/Logo.mp4";
// import MainIllustrationOGV from "../../assets/images/Logo.ogg";
import MainIllustrationWEBM from "../../assets/images/Logo.webm";

export const MainIllustration: React.FC = () => {
  return (
    <div className="main-illustration">
      <video playsInline autoPlay loop muted className="main-video">
        <source src={MainIllustrationSVG} type="video/mp4" />
        {/* <source src={MainIllustrationOGV} type="video/ogv" /> */}
        <source src={MainIllustrationWEBM} type="video/webm" />
      </video>
    </div>
  );
}
