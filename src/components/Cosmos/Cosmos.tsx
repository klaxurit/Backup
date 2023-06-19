import CosmosFr from "../../assets/images/cosmosfr.png";
import France from "../../assets/images/france.png";
import FrCoin from "../../assets/images/frcoin.png";
import CosmosCoin from "../../assets/images/cosmoscoin.png";
import Coin from "../../assets/images/coin.png";
import { LogoTwitter, LogoMail, LogoYoutube, LogoMedium, LogoTwitch, LogoSpotify } from "../SVGs";

const Cosmos: React.FC = () => {
  return (
    <section className="Cosmos">
      <div className="Cosmos__content">
        <img src={FrCoin} alt="French flag coin" className="Cosmos__content__frCoin"/>
        <img src={CosmosCoin} alt="Cosmos logo coin" className="Cosmos__content__cosmosCoin"/>
        <img src={Coin} alt="A simple coin" className="Cosmos__content__coin"/>
        <h1 className="Cosmos__content__title">POWERED BY STAKELAB</h1>
        <img src={CosmosFr} alt="Cosmos in letters" className="Cosmos__content__cosmosSvg" />
        <img src={France} alt="France in letters" className="Cosmos__content__franceSvg" />
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