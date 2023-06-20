import Member1 from "../../assets/images/member1.png";
import Member2 from "../../assets/images/member2.png";
import Member3 from "../../assets/images/member3.png";
import { LogoTwitter } from "../SVGs";

export const Team: React.FC = () => {
  return (
    <div className="Team">
        <h1>Team</h1>
      <section className="Team__content">
        <div className="Team__content__member">
          <img src={Member1} alt="Draw of a member of the team" className="Team__content__member__draw" />
          <div className="Team__content__member__twitter">
            <a href="#" className="Team__content__member__twitter__link link__white">@zdeadex</a>
            <LogoTwitter className="Team__content__member__twitter__icon icon__link"/>
          </div>
          <p className="Team__content__member__job">Founder and Chief Executive Officer</p>
        </div>
        <div className="Team__content__member">
          <img src={Member2} alt="Draw of a member of the team" className="Team__content__member__draw" />
          <div className="Team__content__member__twitter">
            <a href="#" className="Team__content__member__twitter__link link__white">@charles_judith</a>
            <LogoTwitter className="Team__content__member__twitter__icon icon__link"/>
          </div>
          <p className="Team__content__member__job">Chief Infrastructure Officer</p>
        </div>
        <div className="Team__content__member">
          <img src={Member3} alt="Draw of a member of the team" className="Team__content__member__draw" />
          <div className="Team__content__member__twitter">
            <a href="#" className="Team__content__member__twitter__link link__white">@dianeyes</a>
            <LogoTwitter className="Team__content__member__twitter__icon icon__link"/>
          </div>
          <p className="Team__content__member__job">Chief Design Officer</p>
        </div>
      </section>

    </div>
  );
}