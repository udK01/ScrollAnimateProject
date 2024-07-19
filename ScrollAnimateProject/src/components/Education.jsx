import { FaBook } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";

import "./utils/css/education.css";

import { useEffect, useState } from "react";

export default function Education() {
  const [secondary, setSecondary] = new useState(false);
  const [college, setCollege] = new useState(false);
  const [university, setUniversity] = new useState(false);

  useEffect(() => {
    const secondaryElement = document.getElementById("secondary");
    const collegeElement = document.getElementById("college");
    const universityElement = document.getElementById("university");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          entry.target.classList.remove("square-border-wrapper");
          entry.target.classList.add("rotate-border-wrapper");
          setSecondary(false);
          setCollege(false);
          setUniversity(false);
        }
      });
    });

    const elements = [secondaryElement, collegeElement, universityElement];
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
        className="rotate-border-wrapper p-10 hide flex flex-col justify-around hover:cursor-pointer"
        onClick={() => reveal(1)}
      >
        <div
          className={`w-full flex justify-center ${
            secondary && "animate-move justify-around"
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
            className={`p-2 space-y-4 italic ${
              secondary && `animate-text-appear`
            } flex flex-col justify-between`}
          >
            <div className="text-center">
              Attained a comprehensive academic foundation at Dylan Thomas
              Community School, successfully achieving outstanding results with
              10 qualifications.
            </div>
            <div className="text-[32px] font-bold text-center">2015-2018</div>
          </div>
        )}
      </div>

      <div
        id="college"
        className="rotate-border-wrapper p-10 hide flex flex-col justify-around hover:cursor-pointer"
        onClick={() => reveal(2)}
      >
        <div
          className={`w-full flex justify-center ${
            college && "animate-move justify-around"
          }`}
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
          <div
            className={`p-2 space-y-4 italic ${
              college && `animate-text-appear`
            } flex flex-col justify-between`}
          >
            <div className="text-center">
              Concluded studies at Gower College Swansea, attaining three
              exemplary
              <br /> A-level qualifications in Mathematics, Computer Science and
              Robotics.
            </div>
            <div className="text-[32px] font-bold text-center">2018-2020</div>
          </div>
        )}
      </div>

      <div
        id="university"
        className="rotate-border-wrapper p-10 hide flex flex-col justify-around hover:cursor-pointer"
        onClick={() => reveal(3)}
      >
        <div
          className={`w-full flex justify-center ${
            university && "animate-move justify-around"
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
            className={`space-y-4 italic ${
              university && `animate-text-appear`
            } flex flex-col justify-between`}
          >
            <div className="text-center">
              Successfully completed studies at Swansea University, earning a
              Bachelor's degree in Computer Science with First Class, Honors
              (1st), demonstrating a strong foundation in the field.
            </div>
            <div className="text-[32px] font-bold text-center">2020-2023</div>
          </div>
        )}
      </div>
    </div>
  );
}
