import { useState, useRef, useCallback } from "react";
import { getTouchEventData } from "./dom";
import { getRefValue, useStateRef } from "./hooks";
import { Project } from "../../types";

interface SwiperState {
  currentIndex: number;
  offsetX: number;
  isSwiping: boolean;
  setIsSwiping: React.Dispatch<React.SetStateAction<boolean>>;
  onTouchStart: (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
  onTouchMove: (e: TouchEvent | MouseEvent) => void;
  onTouchEnd: () => void;
  autoScroll: () => void;
}

const calculateOffsetX = (newOffsetX: number, scrollWidth: number) => {
  const maxOffsetXInfinite = -scrollWidth / 2;

  if (newOffsetX < maxOffsetXInfinite) {
    newOffsetX += scrollWidth / 2;
  } else if (newOffsetX > 0) {
    newOffsetX -= scrollWidth / 2;
  }

  return newOffsetX;
}

const useSwiper = (containerRef: React.RefObject<HTMLUListElement>, projects: Project[]): SwiperState => {
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const lastTimestampRef = useRef<number | null>(null);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const TOUCH_THRESHOLD = 100;

  const onTouchMove = useCallback((e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    if (Math.abs(diff) > TOUCH_THRESHOLD) {
      if (diff > 0) {
        setCurrentIndex((currentIndex + 1) % projects.length);
      } else if (diff < 0) {
        setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
      }
      startXRef.current = currentX;
    }
  }, []);

  const onTouchEnd = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("mouseup", onTouchEnd);
      container.removeEventListener("mousemove", onTouchMove);
    }

    setIsSwiping(false);
  }, [onTouchMove]);

  const onTouchStart = useCallback(
    (
      e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    ) => {
      setIsSwiping(true);

      currentOffsetXRef.current = getRefValue(offsetXRef);
      startXRef.current = getTouchEventData(e).clientX;

      const container = containerRef.current;
      if (container) {
        container.addEventListener("touchmove", onTouchMove);
        container.addEventListener("touchend", onTouchEnd);
        container.addEventListener("mouseup", onTouchEnd);
        container.addEventListener("mousemove", onTouchMove);
      }
    },
    [onTouchMove, onTouchEnd]
  );

  const autoScroll = useCallback(() => {
    const autoScroll = (timestamp: number) => {
      const elapsed = timestamp - (lastTimestampRef.current || timestamp);
      lastTimestampRef.current = timestamp;
      let newOffsetX = (offsetXRef.current ?? 0) - elapsed * 0.04;

      const scrollWidth = containerRef.current?.scrollWidth ?? 0;
      newOffsetX = calculateOffsetX(newOffsetX, scrollWidth);

      setOffsetX(newOffsetX);

      if (!isSwiping) {
        requestAnimationFrame(autoScroll);
      }
    };

    requestAnimationFrame(autoScroll);
  }, [isSwiping]);

  return {
    currentIndex,
    offsetX,
    isSwiping,
    setIsSwiping,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    autoScroll
  };
};

export default useSwiper;
