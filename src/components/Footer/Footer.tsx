import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { LogoTwitter, LogoMail, LogoGithub } from "../SVGs";

export const Footer: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__content__linksWrapper">
          <Link to={`stakelab`} className="Footer__content__linksWrapper__link link__white">Product</Link>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <Link to={`networks`} className="Footer__content__linksWrapper__link link__white">Networks</Link>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <Link to={`about`} className="Footer__content__linksWrapper__link link__white">About</Link>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <Link to={`faq`} className="Footer__content__linksWrapper__link link__white">FAQ</Link>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <Link to={`networks`} className="Footer__content__linksWrapper__link link__white">Stake</Link>
          <span className="Footer__content__linksWrapper__separator--desktop">•</span>
          <a href="mailto:contact@stakelab.fr" className="Footer__content__linksWrapper__link link__white">Contact</a>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <Link to={`legal`} className="Footer__content__linksWrapper__link link__white">Legal</Link>
        </div>
        <div className="Footer__content__iconWrapper">
          <a href="https://t.me/stakelab_fr" target="_blank"><LogoMail className="Footer__content__iconWrapper__icon icon__link" /></a>
          <a href="https://twitter.com/StakeLab" target="_blank"><LogoTwitter className="Footer__content__iconWrapper__icon icon__link" /></a>
          <a href="https://github.com/" target="_blank"><LogoGithub className="Footer__content__iconWrapper__icon icon__link" /></a>
        </div>
      </div>
    </div>
  );
}
