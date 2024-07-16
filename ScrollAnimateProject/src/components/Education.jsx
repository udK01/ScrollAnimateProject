import { FaBook } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";

import "./utils/css/education.css";

export default function Education() {
  return (
    <div className="flex justify-evenly w-[60%] mx-auto gap-16">
      <div className="rotate-border-wrapper p-10 hide">
        <FaBook className="size-24" />
      </div>
      <div className="rotate-border-wrapper p-10 hide">
        <FaGraduationCap className="size-24" />
      </div>
      <div className="rotate-border-wrapper p-10 hide">
        <GiDiploma className="size-24" />
      </div>
    </div>
  );
}
