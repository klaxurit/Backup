import MainIllustrationSVG from "../../assets/images/mainillustration.png";

export const MainIllustration: React.FC = () => {
  return (
    <div className="main-illustration">
      <img src={MainIllustrationSVG} alt="Main illustration" className="illustration" />
    </div>
  );
}