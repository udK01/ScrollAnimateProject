import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypewriterTitle({ text }) {
  const titleRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [text],
      typeSpeed: 50,
      loop: false,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!typedRef.current) {
            typedRef.current = new Typed(titleRef.current, options);
          }
        } else {
          if (typedRef.current) {
            typedRef.current.stop();
          }
        }
      });
    });

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (typedRef.current) {
        typedRef.current.destroy();
        typedRef.current = null;
      }
    };
  }, [text]);

  return (
    <div className="flex">
      <h1 ref={titleRef}></h1>
    </div>
  );
}
