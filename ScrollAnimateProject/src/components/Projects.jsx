import { useEffect } from "react";
import Card from "./Card";
import TypeWriterTitle from "./TypeWriterTitle";

export default function Projects() {
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide");
      } else {
        entry.target.classList.remove("slide");
      }
    });
  });

  useEffect(() => {
    const cardElements = document.querySelectorAll(".card");
    cardElements.forEach((card) => cardObserver.observe(card));

    return () => {
      cardElements.forEach((card) => cardObserver.unobserve(card));
    };
  }, []);

  return (
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
  );
}
