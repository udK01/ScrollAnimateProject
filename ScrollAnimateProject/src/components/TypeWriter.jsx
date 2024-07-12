import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypeWriter() {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer.", "Programmer.", "Designer."],
      typeSpeed: 75,
      backSpeed: 100,
      backDelay: 3000,
      loop: true,
    };

    const typed = new Typed(typedElementRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedElementRef}></span>;
}
