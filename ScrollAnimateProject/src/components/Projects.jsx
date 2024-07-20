import Card from "./Card";
import TypeWriterTitle from "./TypeWriterTitle";

export default function Projects() {
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
