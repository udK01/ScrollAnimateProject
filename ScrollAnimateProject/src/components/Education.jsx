import { FaBook } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";

import "./utils/css/education.css";

import { useState } from "react";

export default function Education() {
  const [secondary, setSecondary] = new useState(false);
  const [college, setCollege] = new useState(false);
  const [university, setUniversity] = new useState(false);

  function reveal(x) {
    switch (x) {
      case 1:
        const secondary = document.getElementById("secondary");
        const isSquareBorder = secondary.classList.toggle(
          "square-border-wrapper"
        );
        secondary.classList.toggle("rotate-border-wrapper", !isSquareBorder);
        setSecondary(isSquareBorder);
        break;
      case 2:
        console.log(2);
        break;
      case 3:
        console.log(3);
        break;
    }
  }

  return (
    <div className="flex justify-evenly w-[60%] mx-auto gap-16">
      <div>
        <div
          id="secondary"
          className="rotate-border-wrapper p-10 hide flex flex-col hover:cursor-pointer"
          onClick={() => reveal(1)}
        >
          <div
            className={`w-full flex justify-center ${
              secondary && "animate-book-move"
            }`}
          >
            <FaBook className={`size-24`} />
            {secondary && (
              <h1
                className={`flex items-center ${
                  secondary && "animate-title-appear"
                }`}
              >
                Dylan Thomas <br /> Com. School
              </h1>
            )}
          </div>
          {secondary && (
            <div
              className={`p-2 space-y-4 ${secondary && `animate-text-appear`}`}
            >
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem, provident iure et dignissimos dolore accusantium
                laboriosam mollitia esse, eveniet modi eaque excepturi? Quas
                quod deleniti distinctio eum, hic similique consequatur?
              </div>
              <div className="text-[32px] font-bold text-center">2015-2018</div>
            </div>
          )}
        </div>
      </div>

      <div
        className="rotate-border-wrapper p-10 hide"
        onClick={() => reveal(2)}
      >
        <FaGraduationCap className="size-24" />
      </div>
      <div
        className="rotate-border-wrapper p-10 hide"
        onClick={() => reveal(3)}
      >
        <GiDiploma className="size-24" />
      </div>
    </div>
  );
}
