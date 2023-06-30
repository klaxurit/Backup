import { useState, useEffect } from "react";
import { LogoArrowLink } from "../../components/SVGs";

const FAQ: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [activeQuestion, setActiveQuestion] = useState("question-1");

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (questionId: string) => {
    setActiveQuestion(questionId);
    if (isDesktop) {
      const element = document.getElementById(questionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const questions = [
    {
      id: "question-1",
      title: "What is StakeLab ?",
      content: [
        "StakeLab is a provider of tools to leverage the benefits of Proof of Stake (PoS) blockchains.",
        "The StakeLab product - which is the main activity - provide a secure and reliable infrastructure that validate and secure them, known as validators."
      ]
    },
    {
      id: "question-2",
      title: "What is an asset?",
      content: [
        "An asset is something defined as valuable or useful, as cash, house, cryptocurrency...",
        "At StakeLab, we support a large list of cryptocurrencies that can be delegated to our validators and provide tools to leverage the benefits from them. You can access to asset management, dashboards, and DCA."
      ]
    },
    {
      id: "question-3",
      title: "What’s the difference between Staking and Delegating?",
      content: [
        "People use staking for all the things that can provide a return on an asset from a determinate source. In fact, we use staking when it comes to interact with a Smart Contract, and loosing the ownership of the asset.",
        "In PoS (Proof of Stake) blockchains and using a validator, you are not interacting with a Smart Contract but at the protocol level.",
        "We call it delegating as you are still have the ownership of the asset but only giving the power of Vote from your asset to the validator you are delegating to.",
        "Then you can ask us why StakeLab instead of DelegateLab... well, you just read it and realise why we guess!"
      ]
    }
  ];

  return (
    <>
      <section className="FAQ">
        <div className="FAQ__head">
          <p>HELP</p>
          <h1>FAQ</h1>
        </div>
        <div className="FAQ__content">
          <div className="FAQ__content__questions">
            {questions.map((question) => (
              <div
                key={question.id}
                id={question.id}
                className={`FAQ__content__questions__content ${isDesktop || activeQuestion === question.id ? "" : "hidden"
                  }`}
              >
                <div className="FAQ__content__questions__content__question">
                  <h4>{question.title}</h4>
                </div>
                <div className={`FAQ__content__questions__content__answer`}>
                  {question.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {isDesktop ? (
            <div className="FAQ__content__buttons--desktop">
              {questions.map((question) => (
                <p
                  key={question.id}
                  className={`FAQ__content__buttons__button ${activeQuestion === question.id
                      ? "FAQ__content__buttons__button--active"
                      : ""
                    }`}
                  onClick={() => handleButtonClick(question.id)}
                >
                  {question.title}
                </p>
              ))}
            </div>
          ) : (
            <div className="FAQ__content__buttons--mobile">
              {questions
                .filter((question) => question.id !== activeQuestion)
                .map((question) => (
                  <div
                    key={question.id}
                    className="FAQ__content__questions__content__question__btn"
                    onClick={() => handleButtonClick(question.id)}
                  >
                    <p>{question.title}</p>
                    <LogoArrowLink className="FAQ__content__questions__content__question__icon" />
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
      <section className="Help">
        <div className="Help__content">
          <h1 className="Help__content__title">Need help?</h1>
          <p className="Help__content__desc">
            Any question about staking or the services we provide? We would be
            glad to help you. Contact us at
          </p>
          <p className="Help__content__mail">contact@stakelab.fr</p>
        </div>
      </section>
    </>
  );
}

export default FAQ;
