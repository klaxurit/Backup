import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useStateRef, getRefValue } from "./hooks";
import { getTouchEventData } from "./dom";
import { NetworkItem } from "../../components/NetworkItem";
import { networks as networkData } from "../../types/networks";
import { Network } from "../../types";

interface SwiperProps {
  networks?: Network[];
}

const Swiper: React.FC<SwiperProps> = ({ networks = networkData }) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const lastTimestampRef = useRef<number | null>(null);

  const onTouchMove = useCallback((e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = (getRefValue(currentOffsetXRef) ?? 0) - diff;

    const scrollWidth = containerRef.current?.scrollWidth ?? 0;
    const maxOffsetXInfinite = -scrollWidth / 2;

    if (newOffsetX < maxOffsetXInfinite) {
      newOffsetX += scrollWidth / 2;
    } else if (newOffsetX > 0) {
      newOffsetX -= scrollWidth / 2;
    }

    setOffsetX(newOffsetX);
  }, []);

  const onTouchEnd = useCallback(() => {
    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("mouseup", onTouchEnd);
    window.removeEventListener("mousemove", onTouchMove);

    setIsSwiping(false);
  }, [onTouchMove]);

  const onTouchStart = useCallback(
    (
      e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    ) => {
      setIsSwiping(true);

      currentOffsetXRef.current = getRefValue(offsetXRef);
      startXRef.current = getTouchEventData(e).clientX;

      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onTouchEnd);
      window.addEventListener("mouseup", onTouchEnd);
      window.addEventListener("mousemove", onTouchMove);
    },
    [onTouchMove, onTouchEnd]
  );

  const startAutoScroll = () => {
    const autoScroll = (timestamp: number) => {
      const elapsed = timestamp - (lastTimestampRef.current || timestamp);
      lastTimestampRef.current = timestamp;
      let newOffsetX = (offsetXRef.current ?? 0) - elapsed * 0.04;

      const scrollWidth = containerRef.current?.scrollWidth ?? 0;
      const maxOffsetXInfinite = -scrollWidth / 2;

      if (newOffsetX < maxOffsetXInfinite) {
        newOffsetX += scrollWidth / 2;
      }

      setOffsetX(newOffsetX);

      if (!isSwiping) {
        requestAnimationFrame(autoScroll);
      }
    };

    requestAnimationFrame(autoScroll);
  };

  useEffect(() => {
    if (!isSwiping) {
      startAutoScroll();
    }
  }, [isSwiping]);

  return (
    <div className="CarouselNetworks">
      <h1 className="CarouselNetworks__title">Our Networks</h1>
      <div
        className="CarouselNetworks__swiper__container"
        onTouchStart={onTouchStart}
        onMouseDown={onTouchStart}
        onMouseLeave={() => {
          setIsSwiping(false);
        }}
        onMouseUp={() => {
          setIsSwiping(false);
        }}
      >
        <ul
          ref={containerRef}
          className={`CarouselNetworks__swiper__list ${isSwiping ? "is-swiping" : ""}`}
          style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
        >
          {networks.map((network, idx) => (
            <NetworkItem
              key={idx}
              network={network}
            />
          ))}
          {networks.map((network, idx) => (
            <NetworkItem
              key={idx + networks.length}
              network={network}
            />
          ))}
        </ul>
      </div>
      <Link to={`networks`}><button className="CarouselNetworks__btn btn--large btn__primary">Stake 'em all!</button></Link>
    </div>
  );
};

export default Swiper;
