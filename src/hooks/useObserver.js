import { useEffect, useRef } from "react";

const useObserver = (ref, isLoading, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const observerOptions = {
      threshold: 1
    };
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, observerOptions);
    observer.current.observe(ref.current);
  }, [ref, isLoading, callback]);
};

export default useObserver;
