import { useRef, useState, useEffect, useCallback } from "react";
import { useStateRef, getRefValue } from "./hooks";
import { getTouchEventData } from "./dom";
import SwiperItem from "./SwiperItem";
import { projects as projectData } from "./projects";
import { Project } from "../../types";

interface SwiperProps {
  projects?: Project[];
}

const Swiper: React.FC<SwiperProps> = ({ projects = projectData }) => {
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
      <div className="Networks">
        <h1 className="Networks__title">Networks</h1>
        <div
          className="Networks__swiper__container"
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
            className={`Networks__swiper__list ${isSwiping ? "is-swiping" : ""}`}
            style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
          >
            {projects.map((project, idx) => (
              <SwiperItem
                key={idx}
                project={project}
              />
            ))}
            {projects.map((project, idx) => (
              <SwiperItem
                key={idx + projects.length}
                project={project}
              />
            ))}
          </ul>
        </div>
        <button className="Networks__btn btn--large btn__primary">Stake 'em all!</button>
      </div>
    );
  };

  export default Swiper;
