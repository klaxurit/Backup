import { Link } from "react-router-dom";
import { LogoArrowRight } from "../SVGs/SVGs";

interface DropdownItem {
  image: string;
  title: string;
  subtitle: string;
  path?: string;
  disabled?: boolean;
}

interface DropdownProps {
  items: DropdownItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <div className="Navbar__dropdown">
      {items.map((item, index) => (
        <Link to={item.path ? item.path : "#"} key={index}>
          <div className={`Navbar__dropdown__item ${item.disabled ? 'isDisabled' : ''}`}>
            <img src={item.image} alt={item.title} className="Navbar__dropdown__item__img" />
            <div className="Navbar__links__wrapper">
              <p className={`Navbar__link Navbar__link--title ${item.disabled ? 'Navbar__link--title--disabled' : ''}`}>{item.title}</p>
              <p className={`Navbar__link Navbar__link--subtitle ${item.disabled ? 'Navbar__link--subtitle--disabled' : ''}`}>{item.subtitle}</p>
            </div>
            <LogoArrowRight className="Navbar__dropdown__item__svg"/>
          </div>
        </Link>
      ))}
    </div>
  );
};