import MainIllustrationSVG from "../../assets/images/Logo.mp4";

export const MainIllustration: React.FC = () => {
  return (
    <div className="main-illustration">
      <video width="500px" autoPlay loop className="main-video">
        <source src={MainIllustrationSVG} />
      </video>
    </div>
  );
}
