interface DropdownItem {
  image: string;
  title: string;
  subtitle: string;
  disabled?: boolean;
}

interface DropdownProps {
  items: DropdownItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <div className="Navbar__dropdown">
      {items.map((item, index) => (
        <a href="#" className={`Navbar__dropdown__item ${item.disabled ? 'isDisabled' : ''}`} key={index}>
          <img src={item.image} alt={item.title} className="Navbar__dropdown__item__img" />
          <div className="Navbar__links__wrapper">
            <p className={`Navbar__link${item.disabled ? '--disabled' : ''} Navbar__link--title`}>{item.title}</p>
            <p className="Navbar__link Navbar__link--subtitle">{item.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
};