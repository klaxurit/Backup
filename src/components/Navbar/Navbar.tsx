import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import stakeLab from "../../assets/images/stakelab.svg"
import appLab from "../../assets/images/applab.svg"
import dataLab from "../../assets/images/datalab.svg"
import { Dropdown } from "./Dropdown";
import { Link } from "react-router-dom";
import { LogoCross, LogoMenu, Favicon, Logo } from "../SVGs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownItems = [
    {
      image: stakeLab,
      title: 'StakeLab',
      subtitle: 'LIVE',
      path: 'stakelab'
    },
    {
      image: appLab,
      title: 'AppLab',
      subtitle: 'LAUNCH IN 2023',
      disabled: true,
    },
    {
      image: dataLab,
      title: 'DataLab',
      subtitle: 'LAUNCH IN 2024',
      disabled: true,
    },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

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
          { isMenuOpen ? <LogoCross className="icon--small icon--small--cross icon__white" /> : <LogoMenu className="icon--small icon__white" /> }
        </div>

        {/* Desktop */}
        <div className={`Navbar__menu--desktop ${isMenuOpen ? 'open' : ''}`}>
          <div className="Navbar__menu--desktop__item">
            <Link to={`#`} className="Navbar__link--white">Products</Link>
            <span className="Navbar__menu--desktop__item__spacer"></span>
            <Dropdown items={dropdownItems}/>
          </div>
          <Link to={`networks`} className="Navbar__link--white">Networks</Link>
          <Link to={`about`} className="Navbar__link--white">About</Link>
          <Link to={`faq`} className="Navbar__link--white">FAQ</Link>
          <button className="btn--small btn__primary"><Link to={`networks`} >Stake</Link></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;