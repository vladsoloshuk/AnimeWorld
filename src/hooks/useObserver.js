import { useEffect, useRef } from "react";

const useObserver = (ref, isLoading, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    let cb = (entries, observer) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};

export default useObserver;
