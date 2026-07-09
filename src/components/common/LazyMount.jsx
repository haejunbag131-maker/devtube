import React, { useEffect, useRef, useState } from "react";

const LazyMount = ({ children, fallback = null, minHeight = 0, rootMargin = "100px 0px" }) => {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    if (isMounted) {
      return undefined;
    }

    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [isMounted, rootMargin]);

  if (isMounted) {
    return children;
  }

  return (
    <div ref={containerRef} aria-hidden="true" style={minHeight ? { minHeight } : undefined}>
      {fallback}
    </div>
  );
};

export default LazyMount;
