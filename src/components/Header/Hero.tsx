import { LogoTwitter, LogoMail, LogoGithub } from "../SVGs";

export const Hero: React.FC = () => {
  return (
    <div className="Hero">
      <h1 className="Hero__title">Grow your assets</h1>
      <p className="Hero__desc">Benefits from StakeLab products while keeping the full ownership of your funds</p>
      <div className="Hero__iconWrapper">
        <LogoMail className="Hero__icon icon__grey icon--small"/>
        <LogoTwitter className="Hero__icon icon__grey icon--small"/>
        <LogoGithub className="Hero__icon icon__grey icon--small"/>
      </div>
      {/* Ajoutez vos icônes ici */}
    </div>
  );
}