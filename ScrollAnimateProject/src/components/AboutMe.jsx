import TypeWriter from "./TypeWriter";

export default function AboutMe() {
  return (
    <section className="bg-blue-900">
      <div className="flex flex-col items-center justify-center mx-auto text-[70px] h-screen hide">
        <div className="flex">
          <div>Hi, I am</div>&nbsp;
          <div>Dom</div>
          <div className="text-orange-500">.</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex gap-4">
            I am a
            <p className="text-orange-500">
              <TypeWriter />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
