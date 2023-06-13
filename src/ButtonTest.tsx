import Spinner from "./components/Spinner";

const ButtonTest = () => {
  return (
    <div className="test">
      <button className="button--L button__primary">Primary</button>
      <button className="button--M button__primary">Primary</button>
      <button className="button--S button__primary">Primary</button>

      <button className="button--L button__shade">Shade</button>
      <button className="button--M button__shade">Shade</button>
      <button className="button--S button__shade">Shade</button>

      <button className="button--L button__white">White</button>
      <button className="button--M button__white">White</button>
      <button className="button--S button__white">White</button>

      <button className="button--L button--disabled">Disabled</button>
      <button className="button--M button--disabled">Disabled</button>
      <button className="button--S button--disabled">Disabled</button>

      <button className="button--L button__primary--spinner"><Spinner/></button>
      <button className="button--M button__shade--spinner"><Spinner/></button>
      <button className="button--S button__white--spinner"><Spinner/></button>

      <button className="link__primary">Links</button>
      <button className="link__white">Links</button>
      <button className="link__white link__white--disabled">Links</button>
      <button className="link__primary link__primary--disabled">Links</button>
    </div>
  );
}

export default ButtonTest;