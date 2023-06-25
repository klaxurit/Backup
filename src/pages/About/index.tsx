import { Team } from "./Team";
import { Timeline } from "./Timeline";
import Contact from "../../components/Contact";

const About: React.FC = () => {
  return (
    <section className="About">
      <div className="About__content">
        <div className="About__content__card">
          <div className="About__content__card__body">
            <h1 className="About__content__card__body__title">About</h1>
            <article className="About__content__card__body__intro">
              StakeLab was born in 2020 during the Pandemic to gives people ways to access leveraging blockchain and proof of stake technologies. Since it has grown with 70 networks and more coming soon, thousands delegators, and millions USD of delegated assets. Every day, hundreds of StakeLabers trust us and grow their assets on a safe tech with plenty staking opportunities. You too, start growing in Web3 today and join the StakeLab family!!
            </article>
            <button className="btn--large btn__primary">Stake with us</button>
          </div>
        </div>
        <div className="About__content__facts">
          <div className="About__content__facts__section">
            <h1 className="About__content__facts__section__title">Fun facts</h1>
            <div className="About__content__facts__section__wrapper">
              <div className="About__content__facts__section__wrapper__firstFacts">
                <h5>1</h5>
                <p>Cosmos Network. The most valuable in Web3</p>
              </div>
              <div className="About__content__facts__section__wrapper__secondFacts">
                <h5>70+</h5>
                <p>Networks are supported on our platform</p>
              </div>
              <div className="About__content__facts__section__wrapper__thirdFacts">
                <h5>2M</h5>
                <p>Biggest delegation from Binance in ATOM</p>
              </div>
              <div className="About__content__facts__section__wrapper__fourthFacts">
                <h5>63K+</h5>
                <p>Delegators accross all our networks</p>
              </div>
              <div className="About__content__facts__section__wrapper__fifthFacts">
                <h5>99%+</h5>
                <p>Uptime on all our servers</p>
              </div>
              <div className="About__content__facts__section__wrapper__sixthFacts">
                <h5>$26M+</h5>
                <p>Total assets delegated in USD</p>
              </div>
            </div>
          </div>
        </div>
        <Team />
        <Timeline />
        <Contact />
      </div>
    </section>
  );
}

export default About;