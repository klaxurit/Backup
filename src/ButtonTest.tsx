import { LogoTwitter, LogoMenu, LogoArrows, LogoCross, Spinner, Favicon, Logo } from "./components/SVGs";

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

      <button className="btn--large btn__primary--spinner"><Spinner /></button>
      <button className="btn--medium btn__shade--spinner"><Spinner /></button>
      <button className="btn--small btn__white--spinner"><Spinner /></button>

      <a href="#" className="link__primary">Links</a>
      <a href="#" className="link__white">Links</a>
      <a href="#" className="link__white link__white--disabled">Links</a>
      <a href="#" className="link__primary link__primary--disabled">Links</a>

      <button className="icon--medium icon__white"><LogoMenu /></button>
      <button className="icon--medium icon__grey"><LogoTwitter /></button>
      <button className="icon--medium icon__shade"><LogoArrows /></button>
      <button className="icon--small icon__white"><LogoMenu /></button>
      <button className="icon--small icon__grey"><LogoTwitter /></button>
      <button className="icon--small icon__shade"><LogoArrows /></button>
      <button className="icon--small icon--disabled"><LogoArrows /></button>
      <button className="icon--small icon--disabled"><LogoTwitter /></button>
      <button className="icon--small icon--disabled"><LogoMenu /></button>

      <a href="#" className="iconLink"><LogoTwitter /></a>
      <a href="#" className="iconLink iconLink--cancel"><LogoCross /></a>

      <Favicon color={false} />
      <Logo color={false} />
    </div>
  );
}

export default ButtonTest;