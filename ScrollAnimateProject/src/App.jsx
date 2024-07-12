import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import TypeWriter from "./components/TypeWriter";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [reveal, setReveal] = useState(false);

  const elements = ["Developer", "Programmer", "Designer"];
  const timer = 4000;

  // Rotation Effect
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

  // On scroll show effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="bg-sky-950 text-white space-y-10">
      {/* Intro About Me. */}
      <div className="flex flex-col items-center justify-center mx-auto text-[70px] h-screen hide">
        <div className="flex">
          <div>Hi, I am</div>&nbsp;
          <div>udK</div>
          <div className="text-orange-500">.</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex gap-4">
            I am a
            <p className="text-orange-500">
              <TypeWriter />
            </p>
          </div>
        </div>
        {/* Green Overlay  Effect */}
        {/* <div className="flex -translate-x-[150px]">
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
        </div> */}
      </div>

      {/* Typewriter Effect */}
      <div className="flex justify-center">
        <div className="inline-block text-[70px]">
          <p className="text">Info Dump.</p>
        </div>
      </div>

      {/* Test Paragraphs */}
      <div className="flex w-[60%] mx-auto gap-16">
        <div className="text-[16px] w-1/3 hide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          dolores atque harum qui aspernatur unde, sapiente est laudantium, et
          quia eveniet totam provident vel doloremque natus nisi odio saepe.
          Neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          optio error. Doloribus quas vel ab accusamus officiis, libero rem quis
          earum delectus perferendis maxime, deleniti quasi porro, enim culpa
          necessitatibus.
        </div>
        <div className="text-[16px] w-1/3 mt-10 hide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          dolores atque harum qui aspernatur unde, sapiente est laudantium, et
          quia eveniet totam provident vel doloremque natus nisi odio saepe.
          Neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          optio error. Doloribus quas vel ab accusamus officiis, libero rem quis
          earum delectus perferendis maxime, deleniti quasi porro, enim culpa
          necessitatibus.
        </div>
        <div className="text-[16px] w-1/3 mt-20 hide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          dolores atque harum qui aspernatur unde, sapiente est laudantium, et
          quia eveniet totam provident vel doloremque natus nisi odio saepe.
          Neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          optio error. Doloribus quas vel ab accusamus officiis, libero rem quis
          earum delectus perferendis maxime, deleniti quasi porro, enim culpa
          necessitatibus.
        </div>
      </div>

      {/* Space */}
      <div className="h-[200px]" />

      {/* Typewriter Effect */}
      <div className="flex justify-center">
        <div className="inline-block text-[70px]">
          <p className="text2">Profiles.</p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex space-x-[30px] justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* Space */}
      <div className="h-[200px]" />
    </section>
  );
}
