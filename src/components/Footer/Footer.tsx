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
          <a href="#" className="Footer__content__linksWrapper__link link__white">Product</a>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <a href="#" className="Footer__content__linksWrapper__link link__white">Networks</a>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <Link to={`about`} className="Footer__content__linksWrapper__link link__white">About</Link>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <Link to={`faq`} className="Footer__content__linksWrapper__link link__white">FAQ</Link>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <a href="" className="Footer__content__linksWrapper__link link__white">Stake</a>
          <span className="Footer__content__linksWrapper__separator--desktop">•</span>
          <a href="" className="Footer__content__linksWrapper__link link__white">Contact</a>
          <span className="Footer__content__linksWrapper__separator">•</span>
          <Link to={`legal`} className="Footer__content__linksWrapper__link link__white">Legal</Link>
        </div>
        <div className="Footer__content__iconWrapper">
          <LogoMail className="Footer__content__iconWrapper__icon icon__link" />
          <LogoTwitter className="Footer__content__iconWrapper__icon icon__link" />
          <LogoGithub className="Footer__content__iconWrapper__icon icon__link" />
        </div>
      </div>
    </div>
  );
}
          
