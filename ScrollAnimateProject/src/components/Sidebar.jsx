import Separator from "./utils/Separator";

export default function Sidebar() {
  const SIZE = 24;

  return (
    <section className="bg-lowTone h-screen">
      <div
        className={`flex justify-center items-center size-${SIZE} text-[32px]`}
      >
        <span className="text-white">NC</span>
        <span className="text-highTone">.</span>
      </div>
      <Separator />
    </section>
  );
}
