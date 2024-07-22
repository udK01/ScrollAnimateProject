import { FaStore } from "react-icons/fa";
import { SiMcdonalds } from "react-icons/si";
import { AiOutlineSchedule } from "react-icons/ai";

import TypeWriterTitle from "./TypeWriterTitle";

export default function Experiences() {
  const desc1 =
    "Gained hands-on experience through active observation of store management, proficiently assisting customers, implemnting precise price marking, ensuring seamless restocking operations, overseeing deliveries, and conducting meticulous stock inventory.";
  const desc2 =
    "Effectively coordinated and facilitated scheduled meetings across multiple locations, seamlessly accommodating diverse team members' availability through meticulous organisation and utilising a combination of virtual and physical settings.";
  const desc3 =
    "Gained hands-on experience by engaging with customers, processing orders and payments, and preparing beverages. Ensured prompt, accurate order delivery, resolved customer issues professionally, and maintained a clean, organized work environment. Proactively managed inventory and restocked supplies.";

  function box(icon, title1, title2, description, duration) {
    return (
      <div className="flex flex-col items-center border-[10px] border-white border-dashed p-10 size-[500px] justify-between hide">
        <div className="flex gap-5 w-full justify-around items-center">
          {icon}
          <h1 className="text-center font-bold text-[30px]">
            <div>{title1}</div>
            <div>{title2}</div>
          </h1>
        </div>
        <div className="text-justify">{description}</div>
        <div className="text-[24px] font-bold">Duration - {duration}</div>
      </div>
    );
  }

  return (
    <section className="bg-pink-500 space-y-20 p-10">
      <div className="flex justify-center">
        <div className="inline-block text-[70px]">
          <TypeWriterTitle text={"Experiences."} />
        </div>
      </div>
      <div className="flex justify-evenly w-[80%] mx-auto gap-16">
        {box(
          <FaStore className="size-24" />,
          "Curry's PC",
          "World",
          desc1,
          "14 Days."
        )}
        {box(
          <AiOutlineSchedule className="size-24" />,
          "Event",
          "Organiser",
          desc2,
          "6 Months."
        )}
        {box(
          <SiMcdonalds className="size-24" />,
          "Crew",
          "Member",
          desc3,
          "10 Months."
        )}
      </div>
    </section>
  );
}
