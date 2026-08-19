const TheProblem = () => {
  return (
    <section className="relative w-full px-[clamp(16px,40px)] my-[clamp(32px,84px)]">
      <div className="uppercase text-accent">The Problem</div>
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-12 md:col-span-6">
          <p className="h4">
            More range balls won't <br /> automatically make you <br /> better.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 space-y-4 pt-8 md:pt-0">
          <p className="p">
            Most golfers practice without a plan. They hit balls, chase
            different feels, and leave the range without knowing whether they
            actually improved.
          </p>
          <p className="p">
            This program gives you a clear progression: learn the movement,
            train the skill, test it, and take it to the course.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
