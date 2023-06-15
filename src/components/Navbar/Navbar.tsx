import { useState } from "react";
import { Favicon, Logo, LogoMenu, LogoCross } from "../SVGs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <a href="#" className="Navbar__link--white">Product</a>
          <a href="#" className="Navbar__link--white">Network</a>
          <a href="#" className="Navbar__link--white">About</a>
          <a href="#" className="Navbar__link--white">FAQ</a>
          <button className="btn--small btn__primary">Stake</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;