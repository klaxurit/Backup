import { useEffect, useState } from "react";
import { Favicon, Logo, LogoMenu, LogoCross } from "../SVGs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Écouteur d'événements pour le redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Ajoute l'écouteur d'événements lors du montage du composant
    window.addEventListener('resize', handleResize);

    // Supprime l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__logo--mobile">
        {/* Mobile */}
        <Favicon color={false} />
      </div>
      <div className="navbar__logo--desktop">
        {/* Desktop */}
        <Logo color={false} />
      </div>

      <div className="navbar__menu">
        {/* Mobile */}
        <div className="navbar__menu--mobile" onClick={handleMenuClick}>
          { isMenuOpen ? <LogoCross className="icon--small icon--small--cross icon__white" /> : <LogoMenu className="icon--small icon__white" /> }
        </div>

        {/* Desktop */}
        <div className={`navbar__menu--desktop ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" className="link__white">Product</a>
          <a href="#" className="link__white">Network</a>
          <a href="#" className="link__white">About</a>
          <a href="#" className="link__white">FAQ</a>
          <button className="btn--small btn__primary">Stake</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;