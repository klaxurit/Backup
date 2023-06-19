import StakeLab from "../../assets/images/stakelab.svg";
import AppLab from "../../assets/images/applab.svg";
import DataLab from "../../assets/images/datalab.svg";

const Products: React.FC = () => {
  return (
    <div className="products">
      <div className="products__content">
        <h3>Our products</h3>
        <div className="products__content__item">
          <div>
            <img src={StakeLab} alt="StakeLab icon" className="products__content__item__img"/>
          </div>
          <div className="products__content__item__preview">
            <h2 className="products__content__item__title">StakeLab</h2>
            <p className="products__content__item__desc">StakeLab is a secure infrastructure that provides validating and relaying services for Proof of Stake blockchains based...</p>
            <button className="btn--large btn__primary products__content__item__btn">Discover</button>
          </div>
        </div>
        <div className="products__content__item">
          <div>
            <img src={AppLab} alt="StakeLab icon" className="products__content__item__img"/>
          </div>
          <div className="products__content__item__preview">
            <h2 className="products__content__item__title">AppLab</h2>
            <p className="products__content__item__desc">We provide a decentralized application that allows users to manage their assets from all the StakeLab supported blockchains...</p>
            <button className="btn--medium btn__primary products__content__item__btn--soon">Launch early 2023</button>
          </div>
        </div>
        <div className="products__content__item">
          <div>
            <img src={DataLab} alt="StakeLab icon" className="products__content__item__img"/>
          </div>
          <div className="products__content__item__preview">
            <h2 className="products__content__item__title">DataLab</h2>
            <p className="products__content__item__desc">Heard about DCA (Dollar Cost Average)? We automated the on-ramp from fiat to crypto right in your wallet with our in-house app...</p>
            <button className="btn--medium btn__primary products__content__item__btn--soon">Launch in 2023</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;