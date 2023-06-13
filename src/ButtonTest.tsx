import Spinner from "./components/Spinner";
import LogoTwitter from "./components/LogoTwitter";
import LogoEqual from "./components/LogoEqual";
import LogoArrows from "./components/LogoArrows";

const ButtonTest = () => {
  return (
    <div className="test">
      <button className="btn--large btn__primary">Primary</button>
      <button className="btn--medium btn__primary">Primary</button>
      <button className="btn--small btn__primary">Primary</button>

      <button className="btn--large btn__shade">Shade</button>
      <button className="btn--medium btn__shade">Shade</button>
      <button className="btn--small btn__shade">Shade</button>

      <button className="btn--large btn__white">White</button>
      <button className="btn--medium btn__white">White</button>
      <button className="btn--small btn__white">White</button>

      <button className="btn--large btn--disabled">Disabled</button>
      <button className="btn--medium btn--disabled">Disabled</button>
      <button className="btn--small btn--disabled">Disabled</button>

      <button className="btn--large btn__primary--spinner"><Spinner/></button>
      <button className="btn--medium btn__shade--spinner"><Spinner/></button>
      <button className="btn--small btn__white--spinner"><Spinner/></button>

      <button className="link__primary">Links</button>
      <button className="link__white">Links</button>
      <button className="link__white link__white--disabled">Links</button>
      <button className="link__primary link__primary--disabled">Links</button>

      <button className="icon--medium icon__white"><LogoEqual/></button>
      <button className="icon--medium icon__grey"><LogoTwitter/></button>
      <button className="icon--medium icon__shade"><LogoArrows/></button>
      <button className="icon--small icon__white"><LogoEqual/></button>
      <button className="icon--small icon__grey"><LogoTwitter/></button>
      <button className="icon--small icon__shade"><LogoArrows/></button>
      <button className="icon--small icon--disabled"><LogoArrows/></button>
    </div>
  );
}

export default ButtonTest;