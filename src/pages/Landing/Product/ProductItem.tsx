import { Link } from "react-router-dom";

interface ProductItemProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  btnText: string;
  btnLink?: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({ imgSrc, imgAlt, title, desc, btnText, btnLink }) => {
  return (
    <div className="products__content__item">
      <div>
        <img src={imgSrc} alt={imgAlt} className="products__content__item__img" />
      </div>
      <div className="products__content__item__preview">
        <h2 className="products__content__item__title">{title}</h2>
        <p className="products__content__item__desc">{desc}</p>
        {btnLink ?
          <Link to={btnLink}>
            <button className="btn--large btn__primary products__content__item__btn">{btnText}</button>
          </Link> :
          <button className="btn--medium btn__primary products__content__item__btn--soon">{btnText}</button>
        }
      </div>
    </div>
  );
}
