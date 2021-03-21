import React, { useCallback, useLayoutEffect, useRef } from "react";
import { formatToWholeNumber, getScrollPercentage } from "./utils";

const App: React.FC = () => {
  const startScroll = useRef<number>();
  const imageRef = useRef<HTMLImageElement>(null);

  const handleScroll = useCallback(() => {
    const scrollPercentage = getScrollPercentage();

    if (!startScroll?.current) {
      startScroll.current = scrollPercentage;

      return;
    }

    const scrollValue = (scrollPercentage - startScroll.current) / 100;
    const formmated = formatToWholeNumber(scrollValue) * 1;

    if (imageRef.current) {
      imageRef.current.style.transform = `scale(${1 + formmated})`;
    }
  }, []);

  useLayoutEffect(() => {
    window.onscroll = handleScroll;
  }, [handleScroll]);

  return (
    <div className="space">
      <p className="legend">Scroll to zoom...</p>
      <div className="image" ref={imageRef}></div>
    </div>
  );
};

export default App;
