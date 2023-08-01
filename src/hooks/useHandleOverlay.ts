import { useState, useCallback } from "react";

function useHandleOverlay() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showMobileOptions, setShowMobileOptions] = useState(false);
  const handleLogoParamsClick = useCallback(() => {
    setIsOverlayVisible(!isOverlayVisible);
    setShowMobileOptions(!showMobileOptions);
  }, [isOverlayVisible, showMobileOptions]);

  const handleLogoCrossClick = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOverlayVisible(false);
      setShowMobileOptions(false);
      setIsClosing(false);
    }, 200);
  }, []);

  const handleDoneClick = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOverlayVisible(false);
      setShowMobileOptions(false);
      setIsClosing(false);
    }, 200);
  }, []);

  return {
    isOverlayVisible,
    setIsOverlayVisible,
    isClosing,
    setIsClosing,
    showMobileOptions,
    setShowMobileOptions,
    handleLogoParamsClick,
    handleLogoCrossClick,
    handleDoneClick
  };
}

export default useHandleOverlay;
