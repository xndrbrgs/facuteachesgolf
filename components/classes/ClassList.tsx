const ClassList = () => {
  return (
    <section className=" bg-[#ecece9] text-black">
      <h1 className="h1 pt-[clamp(56px,96px)] px-[clamp(16px,40px)]">
        Class List
      </h1>
      <div className="grid grid-cols-12 py-[clamp(56px,96px)] px-[clamp(16px,40px)] items-center">
        <div className="col-span-6 flex flex-col items-center">
          <h2 className="h2 uppercase mb-2">1-Hour Classes</h2>
          <p className="p mt-4 text-center max-w-md">
            Perfect your swing with personalized one-on-one instruction. These
            focused sessions cover fundamentals, technique refinement, and
            tailored practice drills to help you improve your game efficiently.
          </p>
          <div className="pt-12 flex flex-col gap-2 max-w-md w-full">
            <div className="flex items-center justify-between">
              <p className="p font-bold">PRICING:</p>
              <p>150$</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="p uppercase font-bold">Classes for:</p>
              <p>1 Person</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="p uppercase font-bold">Skill Level:</p>
              <p>All Levels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassList;
