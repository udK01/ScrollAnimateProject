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
        const college = document.getElementById("college");
        const isSquareBorder2 = college.classList.toggle(
          "square-border-wrapper"
        );
        college.classList.toggle("rotate-border-wrapper", !isSquareBorder2);
        setCollege(isSquareBorder2);
        break;
      case 3:
        const university = document.getElementById("university");
        const isSquareBorder3 = university.classList.toggle(
          "square-border-wrapper"
        );
        university.classList.toggle("rotate-border-wrapper", !isSquareBorder3);
        setUniversity(isSquareBorder3);
        break;
    }
  }

  return (
    <div className="flex justify-evenly w-[80%] mx-auto gap-16">
      <div
        id="secondary"
        className="rotate-border-wrapper p-10 hide flex flex-col hover:cursor-pointer"
        onClick={() => reveal(1)}
      >
        <div
          className={`w-full flex justify-center ${
            secondary && "animate-move"
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
              laboriosam mollitia esse, eveniet modi eaque excepturi? Quas quod
              deleniti distinctio eum, hic similique consequatur?
            </div>
            <div className="text-[32px] font-bold text-center">2015-2018</div>
          </div>
        )}
      </div>

      <div
        id="college"
        className="rotate-border-wrapper p-10 hide flex flex-col hover:cursor-pointer"
        onClick={() => reveal(2)}
      >
        <div
          className={`w-full flex justify-center ${college && "animate-move"}`}
        >
          <FaGraduationCap className={`size-24`} />
          {college && (
            <h1
              className={`flex items-center ${
                college && "animate-title-appear"
              }`}
            >
              Gorseinon <br /> College
            </h1>
          )}
        </div>
        {college && (
          <div className={`p-2 space-y-4 ${college && `animate-text-appear`}`}>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, provident iure et dignissimos dolore accusantium
              laboriosam mollitia esse, eveniet modi eaque excepturi? Quas quod
              deleniti distinctio eum, hic similique consequatur?
            </div>
            <div className="text-[32px] font-bold text-center">2015-2018</div>
          </div>
        )}
      </div>

      <div
        id="university"
        className="rotate-border-wrapper p-10 hide flex flex-col hover:cursor-pointer"
        onClick={() => reveal(3)}
      >
        <div
          className={`w-full flex justify-center ${
            university && "animate-move"
          }`}
        >
          <GiDiploma className={`size-24`} />
          {university && (
            <h1
              className={`flex items-center ${
                university && "animate-title-appear"
              }`}
            >
              Swansea <br /> University
            </h1>
          )}
        </div>
        {university && (
          <div
            className={`p-2 space-y-4 ${university && `animate-text-appear`}`}
          >
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, provident iure et dignissimos dolore accusantium
              laboriosam mollitia esse, eveniet modi eaque excepturi? Quas quod
              deleniti distinctio eum, hic similique consequatur?
            </div>
            <div className="text-[32px] font-bold text-center">2015-2018</div>
          </div>
        )}
      </div>
    </div>
  );
}
