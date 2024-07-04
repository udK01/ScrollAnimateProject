export default function AboutMe() {
  return (
    <section className="bg-midTone h-screen w-full">
      <div className="flex flex-col items-center">
        <div className="font-poppins text-center">
          <span className="text-white text-[100px]">Company Name</span>
          <span className="text-orange-500 text-[150px]">.</span>
        </div>
        <span className="text-white text-[30px] -translate-y-[30px]">
          "slogan slogan slogan."
        </span>
      </div>
    </section>
  );
}
