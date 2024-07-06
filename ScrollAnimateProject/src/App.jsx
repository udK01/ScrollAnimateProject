import React, { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const elements = ["Developer", "Programmer", "Designer"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % elements.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [elements.length]);

  return (
    <section className="flex justify-center text-[100px] bg-sky-950 text-white h-screen">
      <div>
        <div className="flex">
          <div>Hi, I am</div>&nbsp;
          <div>udK</div>
          <div className="text-orange-500">.</div>
        </div>
        <div className="flex text-[70px]">
          <div>I am a&nbsp;</div>
          <div>
            <div>
              {elements.map((element, index) => (
                <div
                  key={index}
                  className={`absolute transition-all ${
                    counter === index
                      ? "opacity-100 blur-0 underline translate-y-0"
                      : "opacity-0 blur-md no-underline text- translate-y-2"
                  }`}
                  style={{
                    transitionDuration: "750ms",
                    textDecorationColor: "orange",
                  }}
                >
                  {element}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
