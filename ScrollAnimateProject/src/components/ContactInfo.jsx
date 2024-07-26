import { MdOutlineMailOutline } from "react-icons/md";
import { FaD, FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

import TypeWriterTitle from "./TypeWriterTitle";

export default function ContactInfo() {
  function box(icon, text) {
    return (
      <div className="flex text-[32px] items-center gap-2">
        {icon}
        <div>{text}</div>
      </div>
    );
  }

  return (
    <section className="bg-orange-500 h-[400px]">
      <div className="flex justify-center mb-[60px]">
        <div className="inline-block text-[70px]">
          <TypeWriterTitle text={"Contact Info."} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          {box(
            <MdOutlineMailOutline className="size-16" />,
            "dominik.muranyi@gmail.com"
          )}
          {box(<FaGithub className="size-16" />, "udK01")}
          {box(<FaDiscord className="size-16" />, "udKay")}
        </div>
      </div>
    </section>
  );
}
