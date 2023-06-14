import { useEffect, useState } from "react";
import { Favicon, Logo, LogoMenu, LogoCross } from "../SVGs";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Navbar = () => {
  const displayFormat = useSelector((state: RootState) => state.displayFormat.displayFormat);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (displayFormat === 'desktop') {
      setIsMenuOpen(false);
    }
  }, [displayFormat]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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