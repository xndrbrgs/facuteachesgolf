const TheSystem = () => {
  const weeks = [
    {
      title: "WEEK 01",
      subtitle: "Build Your Foundation",
      list: [
        "Setup & alignment",
        "Grip & ball position",
        "Posture & pressure",
        "Pre-shot routine",
      ],
    },
    {
      title: "WEEK 02",
      subtitle: "Build Your Backswing",
      list: [
        "Takeaway",
        "Rotation & space",
        "Arm structure",
        "Top position",
      ],
    },
    {
      title: "WEEK 03",
      subtitle: "Master the Transition",
      list: [
        "Pressure shift",
        "Sequencing",
        "Delivery position",
        "Early-extension drills",
      ],
    },
    {
      title: "WEEK 04",
      subtitle: "Control the Clubface",
      list: [
        "Face-to-path",
        "Starting direction",
        "Curvature",
        "Diagnose your miss",
      ],
    },
    {
      title: "WEEK 05",
      subtitle: "Lower Your Scores",
      list: [
        "Chipping",
        "Pitching & bunkers",
        "Putting speed",
        "Short-game practice",
      ],
    },
    {
      title: "WEEK 06",
      subtitle: "Take It To The Course",
      list: [
        "Random practice",
        "Course management",
        "Playing your miss",
        "Your personal practice plan",
      ],
    },
  ];
  return (
    <section id="program" className="relative w-full px-[clamp(16px,40px)] my-[clamp(64px,140px)] ">
      <div className="uppercase text-accent">The System</div>
      <div className="h4">Six weeks. One clear plan.</div>
      <div className="grid grid-cols-12 gap-6 w-full pt-[clamp(16px,40px)]">
        {weeks.map((week) => (
          <div className="col-span-4 bg-[#121916] border-[#26302b] border rounded-xl p-6" key={week.title}>
            <div className="flex flex-col gap-2">
              <p className="text-accent uppercase">{week.title}</p>
              <p className="p font-semibold">{week.subtitle}</p>
            </div>
            <div className="pt-4">
              <ul>
                {week.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheSystem;
