import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import TypeWriter from "./components/TypeWriter";
import TypeWriterTitle from "./components/TypewriterTitle";
import Education from "./components/Education";

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

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide");
        } else {
          entry.target.classList.remove("slide");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));

    const cardElements = document.querySelectorAll(".card");
    cardElements.forEach((card) => cardObserver.observe(card));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      cardElements.forEach((card) => cardObserver.unobserve(card));
    };
  }, []);

  return (
    <section className="text-white font-poppins">
      {/* Intro About Me. */}
      <section className="bg-blue-900">
        <div className="flex flex-col items-center justify-center mx-auto text-[70px] h-screen hide">
          <div className="flex">
            <div>Hi, I am</div>&nbsp;
            <div>Dom</div>
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
      </section>

      {/* Divider 1*/}
      <div className="relative w-full overflow-hidden transform rotate-180 bg-blue-900">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-[134%] h-[129px] block"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-[#22c55e]"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-[#22c55e]"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#22c55e]"
          ></path>
        </svg>
      </div>

      {/* Info Dump Section */}
      <section className="bg-green-500 space-y-20 p-10">
        {/* Typewriter Effect */}
        <div className="flex justify-center">
          <div className="inline-block text-[70px]">
            <TypeWriterTitle text={"Education."} />
          </div>
        </div>
        {/* Test Paragraphs */}
        <Education />

        {/* <div className="flex w-[60%] mx-auto gap-16">
          <div className="text-[16px] w-1/3 hide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            dolores atque harum qui aspernatur unde, sapiente est laudantium, et
            quia eveniet totam provident vel doloremque natus nisi odio saepe.
            Neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            optio error. Doloribus quas vel ab accusamus officiis, libero rem
            quis earum delectus perferendis maxime, deleniti quasi porro, enim
            culpa necessitatibus.
          </div>
          <div className="text-[16px] w-1/3 mt-10 hide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            dolores atque harum qui aspernatur unde, sapiente est laudantium, et
            quia eveniet totam provident vel doloremque natus nisi odio saepe.
            Neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            optio error. Doloribus quas vel ab accusamus officiis, libero rem
            quis earum delectus perferendis maxime, deleniti quasi porro, enim
            culpa necessitatibus.
          </div>
          <div className="text-[16px] w-1/3 mt-20 hide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            dolores atque harum qui aspernatur unde, sapiente est laudantium, et
            quia eveniet totam provident vel doloremque natus nisi odio saepe.
            Neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            optio error. Doloribus quas vel ab accusamus officiis, libero rem
            quis earum delectus perferendis maxime, deleniti quasi porro, enim
            culpa necessitatibus.
          </div>
        </div> */}
      </section>

      {/* Divider 2*/}
      <div className="relative w-full overflow-hidden transform rotate-180 bg-green-500">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-[134%] h-[129px] block"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-[#3b82f6]"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-[#3b82f6]"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#3b82f6]"
          ></path>
        </svg>
      </div>

      {/* Projects Section */}
      <section className="bg-blue-500 space-y-20 p-10">
        {/* Typewriter Effect */}
        <div className="flex justify-center">
          <div className="inline-block text-[70px]">
            <TypeWriterTitle text={"Projects."} />
          </div>
        </div>

        {/* Cards */}
        <div className="flex space-x-[30px] justify-center">
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
        </div>
      </section>

      {/* Divider 3 */}
      <div className="relative w-full overflow-hidden transform rotate-180 bg-blue-500">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-[134%] h-[129px] block"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-[#EC4899]"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-[#EC4899]"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#EC4899]"
          ></path>
        </svg>
      </div>

      <section className="bg-pink-500 space-y-20 p-10">
        <div className="flex justify-center">
          <div className="inline-block text-[70px]">
            <TypeWriterTitle text={"Experiences."} />
          </div>
        </div>
      </section>
    </section>
  );
}
