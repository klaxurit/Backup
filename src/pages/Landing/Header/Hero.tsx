import { LogoTwitter, LogoMail, LogoGithub } from "../../../components/SVGs";

export const Hero: React.FC = () => {
  return (
    <div className="Hero">
      <h1 className="Hero__title">Grow your assets</h1>
      <h5 className="Hero__desc">Benefits from StakeLab products while keeping the full ownership of your funds</h5>
      <div className="Hero__iconWrapper">
        <a href="https://t.me/stakelab_zone" target="_blank"><LogoMail className="Hero__icon icon__grey icon--small" /></a>
        <a href="https://twitter.com/StakeLab" target="_blank"><LogoTwitter className="Hero__icon icon__grey icon--small" /></a>
        <a href="https://github.com/StakeLab-Zone" target="_blank"><LogoGithub className="Hero__icon icon__grey icon--small" /></a>
      </div>
    </div>
  );
}