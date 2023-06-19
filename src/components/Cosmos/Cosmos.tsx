import CosmosFr from "../../assets/images/cosmosfr.png";
import France from "../../assets/images/france.png";
import FrCoin from "../../assets/images/frcoin.png";
import CosmosCoin from "../../assets/images/cosmoscoin.png";
import Coin from "../../assets/images/coin.png";
import SmallCoin from "../../assets/images/smallcoin.png";
import BigFrCoin from "../../assets/images/bigfrcoin.png";
import BigCosmosCoin from "../../assets/images/bigcosmoscoin.png";
import BigCoin from "../../assets/images/bigcoin.png";
import { LogoTwitter, LogoMail, LogoYoutube, LogoMedium, LogoTwitch, LogoSpotify } from "../SVGs";

const Cosmos: React.FC = () => {
  return (
    <section className="Cosmos">
      <div className="Cosmos__content">
        <div className="Cosmos__content__mobileIMG">
          <img src={FrCoin} alt="French flag coin" className="Cosmos__content__mobileIMG__frCoin"/>
          <img src={CosmosCoin} alt="Cosmos logo coin" className="Cosmos__content__mobileIMG__cosmosCoin"/>
          <img src={Coin} alt="A simple coin" className="Cosmos__content__mobileIMG__coin"/>
        </div>
        <div className="Cosmos__content__desktopIMG">
          <img src={BigFrCoin} alt="French flag coin" className="Cosmos__content__desktopIMG__bigFrCoin" />
          <img src={BigCosmosCoin} alt="Cosmos logo coin" className="Cosmos__content__desktopIMG__bigCosmosCoin" />
          <img src={SmallCoin} alt="A simple coin" className="Cosmos__content__desktopIMG__smallCoin" />
          <img src={BigCoin} alt="A simple coin" className="Cosmos__content__desktopIMG__bigCoin" />
        </div>
        <h1 className="Cosmos__content__title">POWERED BY STAKELAB</h1>
        <div className="Cosmos__content__imgWrapper">
          <img src={CosmosFr} alt="Cosmos in letters" className="Cosmos__content__imgWrapper__cosmosSvg" />
          <img src={France} alt="France in letters" className="Cosmos__content__imgWrapper__franceSvg" />
        </div>
        <p className="Cosmos__content__desc">
          As french native speakers, we are devoted to grow this community and create contents on this whole ecosystem, for francophones
        </p>
        <div className="Cosmos__content__iconWrapper">
          <LogoMail className="Hero__icon icon__grey icon--small" />
          <LogoTwitter className="Hero__icon icon__grey icon--small" />
          <LogoYoutube className="Hero__icon icon__grey icon--small" />
          <LogoMedium className="Hero__icon icon__grey icon--small" />
          <LogoTwitch className="Hero__icon icon__grey icon--small" />
          <LogoSpotify className="Hero__icon icon__grey icon--small" />
        </div>
      </div>
    </section>
  );
}

export default Cosmos;