import { useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { LogoNext, LogoPrevious } from "../../components/SVGs";
import { Story } from "./Story";
import { stories } from './storyData';

export const Timeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);

  const handleNextClick = useCallback(() => {
    if (scrollRef.current) {
      const newScrollPosition = scrollRef.current.scrollLeft + 280 + 24;
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
      setShowPrev(true);
      if (scrollRef.current.scrollWidth - newScrollPosition <= scrollRef.current.clientWidth) {
        setDisableNext(true);
      }
    }
  }, []);

  const handlePrevClick = useCallback(() => {
    if (scrollRef.current) {
      const newScrollPosition = scrollRef.current.scrollLeft - 280 - 24;
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
      if (newScrollPosition <= 0) {
        setShowPrev(false);
      }
      if (scrollRef.current.scrollWidth - newScrollPosition > scrollRef.current.clientWidth) {
        setDisableNext(false);
      }
    }
  }, []);

  return (
    <div className="Timeline">
      <div className="Timeline__head">
        <h1 className="Timeline__head__title">The StakeLab story</h1>
        <div className="Timeline__head__iconsWrapper">
          {showPrev && <LogoPrevious className="Timeline__head__iconsWrapper__icon icon--medium icon__white" onClick={handlePrevClick} />}
          <LogoNext className={`Timeline__head__iconsWrapper__icon${disableNext ? '--disabled' : ''} icon--medium icon__white`} onClick={handleNextClick} />
        </div>
      </div>
      <section className="Timeline__content" ref={scrollRef}>
        {stories.map((story, index) => (
          <Story key={index} date={story.date} description={story.description} />
        ))}
      </section>
      <Link to={`../networks`}><button className="Timeline__btn btn--large btn__primary">Start staking</button></Link>
    </div>
  );
}