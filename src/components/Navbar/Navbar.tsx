import { useState } from "react";

import { Dropdown } from "./Dropdown";
import { Favicon, Logo, LogoMenu, LogoCross } from "../SVGs";

import stakeLab from "../../assets/images/stakelab.svg"
import appLab from "../../assets/images/applab.svg"
import dataLab from "../../assets/images/datalab.svg"

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
        <Favicon color={false} />
      </div>
      <div className="Navbar__logo--desktop">
        {/* Desktop */}
        <Logo color={false} />
      </div>

      <div className="Navbar__menu">
        {/* Mobile */}
        <div className="Navbar__menu--mobile" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          { isMenuOpen ? <LogoCross className="Icon--small Icon--small--cross Icon__white" /> : <LogoMenu className="Icon--small Icon__white" /> }
        </div>

        {/* Desktop */}
        <div className={`Navbar__menu--desktop ${isMenuOpen ? 'open' : ''}`}>
          <div className="Navbar__menu--desktop__item">
            <a href="#" className="Navbar__link--white">Products</a>
            <span className="Navbar__menu--desktop__item__spacer"></span>
            <Dropdown items={dropdownItems}/>
          </div>
          <a href="#" className="Navbar__link--white">Networks</a>
          <a href="#" className="Navbar__link--white">About</a>
          <a href="#" className="Navbar__link--white">FAQ</a>
          <button className="btn--small btn__primary">Stake</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;