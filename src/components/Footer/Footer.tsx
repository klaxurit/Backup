import { LogoTwitter, LogoMail, LogoGithub } from "../SVGs";

export const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__content__linksWrapper">
          <a href="" className="Footer__content__linksWrapper__link link__white">Product</a>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <a href="" className="Footer__content__linksWrapper__link link__white">Networks</a>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <a href="" className="Footer__content__linksWrapper__link link__white">About</a>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <a href="" className="Footer__content__linksWrapper__link link__white">FAQ</a>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <a href="" className="Footer__content__linksWrapper__link link__white">Stake</a>
          <span className="Footer__content__linksWrapper__separator--desktop">•</span>
          <a href="" className="Footer__content__linksWrapper__link link__white">Contact</a>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <a href="" className="Footer__content__linksWrapper__link link__white">Legal</a>
        </div>
        <div className="Footer__content__iconWrapper">
          <LogoMail className="Footer__content__iconWrapper__icon icon__link" />
          <LogoTwitter className="Footer__content__iconWrapper__icon icon__link" />
          <LogoGithub className="Footer__content__iconWrapper__icon icon__link" />
        </div>
      </div>
      {/* Ajoutez vos icônes ici */}
    </div>
  );
}