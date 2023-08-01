import { ProductItem } from "./ProductItem";

import StakeLab from "../../assets/images/stakelab.svg";
import AppLab from "../../assets/images/applab.svg";
import DataLab from "../../assets/images/datalab.svg";

const Products: React.FC = () => {
  return (
    <div className="products">
      <div className="products__content">
        <h3>Our products</h3>
        <ProductItem
          imgSrc={StakeLab}
          imgAlt="StakeLab icon"
          title="StakeLab"
          desc="StakeLab is a secure infrastructure that provides validating and relaying services for Proof of Stake blockchains based..."
          btnText="Discover"
          btnLink="stakelab"
        />
        <ProductItem
          imgSrc={AppLab}
          imgAlt="AppLab icon"
          title="AppLab"
          desc="We provide a decentralized application that allows users to manage their assets from all the StakeLab supported blockchains..."
          btnText="Launch in 2023"
        />
        <ProductItem
          imgSrc={DataLab}
          imgAlt="DataLab icon"
          title="DataLab"
          desc="Heard about DCA (Dollar Cost Average)? We automated the on-ramp from fiat to crypto right in your wallet with our in-house app..."
          btnText="Launch in 2024"
        />
      </div>
    </div>
  );
}


export default Products;