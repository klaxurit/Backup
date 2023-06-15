import { Hero } from "./Hero";
import { MainIllustration } from "./MainIllustration";
import { Metrics } from "./Metrics";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header__firstBlock">
        <Hero />
        <MainIllustration />
      </div>
      <Metrics />
    </header>
  );
}

export default Header;