import { LogoTwitter, LogoMail, LogoGithub } from "../SVGs";

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">Grow your assets</h1>
      <p className="hero__desc">Benefits from StakeLab products while keeping the full ownership of your funds</p>
      <div className="hero__iconWrapper">
        <LogoMail className="hero__icon icon__grey icon--small"/>
        <LogoTwitter className="hero__icon icon__grey icon--small"/>
        <LogoGithub className="hero__icon icon__grey icon--small"/>
      </div>
      {/* Ajoutez vos icônes ici */}
    </div>
  );
}