import { useState } from "react";
import { Favicon, Logo, LogoMenu, LogoCross } from "../SVGs";

import stakeLab from "../../assets/images/stakelab.svg"

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
          <div className="Navbar__menu--desktop__item">
            <a href="#" className="Navbar__link--white">Product</a>
            <div className="Navbar__dropdown">
              <div className="Navbar__dropdown__item">
                <img src={stakeLab} alt="StakeLab icon" className="Navbar__dropdown__item__img" />
                <div className="Navbar__links__wrapper">
                  <p className="Navbar__link--white">StakeLab</p>
                  <p className="Navbar__link--white--mini">Live</p>
                </div>
              </div>
              {/* Ajoutez plus d'items ici */}
            </div>
          </div>
          <a href="#" className="Navbar__link--white">Network</a>
          <a href="#" className="Navbar__link--white">About</a>
          <a href="#" className="Navbar__link--white">FAQ</a>
          <button className="btn--small btn__primary">Stake</button>
        </div>
        <div className="Navbar__dropdown">
          <div className="Navbar__dropdown__item">
            <img src="path/to/image" alt="Item 1" />
            <div>
              <h3>Item Title</h3>
              <p>Item Subtitle</p>
            </div>
          </div>
          <div className="Navbar__dropdown__item">
            <img src="path/to/image" alt="Item 1" />
            <div>
              <h3>Item Title</h3>
              <p>Item Subtitle</p>
            </div>
          </div>
          <div className="Navbar__dropdown__item">
            <img src="path/to/image" alt="Item 1" />
            <div>
              <h3>Item Title</h3>
              <p>Item Subtitle</p>
            </div>
          </div>
          {/* Ajoutez plus d'items ici */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;