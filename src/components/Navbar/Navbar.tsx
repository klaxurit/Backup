import { useState } from "react";

import { Dropdown } from "./Dropdown";
import { Favicon, Logo } from "../SVGs";

import stakeLab from "../../assets/images/stakelab.svg"
import appLab from "../../assets/images/applab.svg"
import dataLab from "../../assets/images/datalab.svg"
import { Link } from "react-router-dom";
import { LogoCross, LogoMenu } from "../SVGs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownItems = [
    {
      image: stakeLab,
      title: 'StakeLab',
      subtitle: 'Live',
    },
    {
      image: appLab,
      title: 'AppLab',
      subtitle: 'Coming soon',
      disabled: true,
    },
    {
      image: dataLab,
      title: 'DataLab',
      subtitle: 'Coming soon',
      disabled: true,
    },
  ];

  return (
    <nav className="Navbar">
      <div className="Navbar__logo--mobile">
        {/* Mobile */}
        <Link to={`/`}><Favicon color={false} /></Link>
      </div>
      <div className="Navbar__logo--desktop">
        {/* Desktop */}
        <Link to={`/`}><Logo color={false} /></Link>
      </div>

      <div className="Navbar__menu">
        {/* Mobile */}
        <div className="Navbar__menu--mobile" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          { isMenuOpen ? <LogoCross className="Icon--small Icon--small--cross Icon__white" /> : <LogoMenu className="Icon--small Icon__white" /> }
        </div>

        {/* Desktop */}
        <div className={`Navbar__menu--desktop ${isMenuOpen ? 'open' : ''}`}>
          <div className="Navbar__menu--desktop__item">
            <Link to={`#`} className="Navbar__link--white">Products</Link>
            <span className="Navbar__menu--desktop__item__spacer"></span>
            <Dropdown items={dropdownItems}/>
          </div>
          <Link to={`#`} className="Navbar__link--white">Networks</Link>
          <Link to={`about`} className="Navbar__link--white">About</Link>
          <Link to={`#`} className="Navbar__link--white">FAQ</Link>
          <button className="btn--small btn__primary">Stake</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;