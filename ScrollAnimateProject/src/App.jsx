import React, { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [reveal, setReveal] = useState(false);

  const elements = ["Developer", "Programmer", "Designer"];
  const timer = 4000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % elements.length);
      setReveal(false);
    }, timer);

    const revealId = setInterval(() => {
      setReveal(true);
    }, timer - 250);

    return () => {
      clearInterval(intervalId);
      clearInterval(revealId);
    };
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
                    counter === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex">
                    <div
                      className={`absolute h-[85%] mt-4 bg-green-500 ${
                        reveal ? "animate-grow" : "animate-shrink"
                      }`}
                      style={{ transitionDuration: "750ms" }}
                    />
                    {element}
                    <div className="text-orange-500">.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <p className="text">Typewriter.</p>
        </div>
      </div>
    </section>
  );
}
