import React, { useEffect } from "react";

export default function App() {
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

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="flex flex-col items-center bg-sky-700 text-orange-500 font-bold space-y-10">
      <div className="box hidden">Welcome!</div>
      <div className="box hidden">This is a test!</div>
      <div className="box hidden">What are we testing?</div>
    </section>
  );
}
