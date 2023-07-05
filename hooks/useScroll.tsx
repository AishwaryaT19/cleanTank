import { useEffect, useCallback } from "react";

export default function useScrollPosition(callback: (sp: number) => void) {
  const handleScroll = useCallback(() => {
    const a = window.scrollY;
    callback(a);
  }, [callback]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
}
