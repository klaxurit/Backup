import { useState, useEffect } from "react";
import { LogoArrowLink } from "../../components/SVGs";

type QuestionsType = {
  [key: string]: string[];
};

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>("What is StakeLab ?");

  const questions: QuestionsType = {
    "What is StakeLab ?": [
      "StakeLab is a provider of tools to leverage the benefits of Proof of Stake (PoS) blockchains.",
      "The StakeLab product - which is the main activity - provide a secure and reliable infrastructure that validate and secure them, known as validators."
    ],
    "What is an asset?": [
      "An asset is something defined as valuable or useful, as cash, house, cryptocurrency...",
      "At StakeLab, we support a large list of cryptocurrencies that can be delegated to our validators and provide tools to leverage the benefits from them. You can access to asset management, dashboards, and DCA."
    ],
    "What’s the difference between Staking and Delegating?": [
      "People use staking for all the things that can provide a return on an asset from a determinate source. In fact, we use staking when it comes to interact with a Smart Contract, and loosing the ownership of the asset.",
      "In PoS (Proof of Stake) blockchains and using a validator, you are not interacting with a Smart Contract but at the protocol level.",
      "We call it delegating as you are still have the ownership of the asset but only giving the power of Vote from your asset to the validator you are delegating to.",
      "Then you can ask us why StakeLab instead of DelegateLab... well, you just read it and realise why we guess!"
    ]
  }

  const orderedQuestions = openQuestion
    ? [openQuestion, ...Object.keys(questions).filter(q => q !== openQuestion)]
    : Object.keys(questions);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className="FAQ">
        <div className="FAQ__head">
          <p>HELP</p>
          <h1>FAQ</h1>
        </div>
        <div className="FAQ__content">
          <div className="FAQ__content__questions">
            {orderedQuestions.map((questionTitle) => (
              <div key={questionTitle} className="FAQ__content__questions__content">
                <div className="FAQ__content__questions__content__question">
                  {isDesktop ? (
                    <h4 onClick={() => setOpenQuestion(questionTitle)}>{questionTitle}</h4>
                  ) : openQuestion === questionTitle ? (
                    <h4>{questionTitle}</h4>
                  ) : (
                    <div className="FAQ__content__questions__content__question__btn" onClick={() => setOpenQuestion(questionTitle)}>
                      <p>{questionTitle}</p>
                      <LogoArrowLink className="FAQ__content__questions__content__question__icon" />
                    </div>
                  )}
                </div>
                {(isDesktop || openQuestion === questionTitle) && (
                  <div className={`FAQ__content__questions__content__answer ${openQuestion === questionTitle ? 'open' : ''}`}>
                    {questions[questionTitle].map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="FAQ__content__buttons">
            {orderedQuestions.map((questionTitle) => (
              <p
                key={questionTitle}
                className={`FAQ__content__buttons__button ${openQuestion === questionTitle ? 'FAQ__content__buttons__button--active' : ''}`}
                onClick={() => setOpenQuestion(questionTitle)}
              >
                {questionTitle}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="Help">
        <div className="Help__content">
          <h1 className="Help__content__title">Need help?</h1>
          <p className="Help__content__desc">
            Any question about staking or the services we provide?
            We would be glad to help you. Contact us at
          </p>
          <p className="Help__content__mail">contact@stakelab.fr</p>
        </div>
      </section>
    </>

  );
}

export default FAQ;
