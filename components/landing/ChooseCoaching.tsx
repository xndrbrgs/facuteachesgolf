import CounterUp from "../anims/CounterUp";
import HoverTextButton from "../anims/HoverButton";

const ChooseCoaching = () => {
  const weeks = [
    {
      title: "Program",
      price: "149",
      subtitle:
        "For golfers who want the complete system and a structured plan.",
      list: [
        "6-week program",
        "Video lesson library",
        "Drill library",
        "Course-management guide",
      ],
      cta: "Join Now",
      href: "mailto:YOUR_EMAIL@example.com?subject=Program%20%2B%20Feedback",
    },
    {
      title: "Program + Feedback",
      price: "249",
      subtitle:
        "For golfers who want the system plus personalized swing guidance.",
      list: [
        "Everything in Program",
        "2 swing-video reviews",
        "Personalized priorities",
        "Drill recommendations",
      ],
      cta: "Get Coaching",
      href: "mailto:YOUR_EMAIL@example.com?subject=Program%20%2B%20Feedback",
    },
    {
      title: "Private Online",
      price: "399",
      subtitle:
        "For golfers who want more direct access and individualized coaching.",
      list: [
        "Everything above",
        "4 swing-video reviews",
        "Personalized practice plan",
        "30-minute Zoom session",
      ],
      cta: "Apply Now",
      href: "mailto:YOUR_EMAIL@example.com?subject=Private%20Online%20Coaching",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative w-full px-[clamp(16px,40px)] my-[clamp(64px,140px)] "
    >
      <style>{`
        @keyframes border-spin {
          to { transform: rotate(360deg); }
        }
        .glow-border {
          isolation: isolate; /* keeps ::before contained to its own stacking context */
        }
        .glow-border::before {
          content: "";
          position: absolute;
          inset: -150%;
          z-index: 0; /* explicitly pin below the card content */
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 300deg,
            #d9f36a 340deg,
            #ffffff 355deg,
            #d9f36a 360deg
          );
          animation: border-spin 8s linear infinite;
        }
      `}</style>

      <div className="uppercase text-accent">Choose Coaching</div>
      <div className="h4">Pick the level that fits you.</div>
      <div className="grid grid-cols-12 gap-6 w-full pt-[40px]">
        {weeks.map((week) => (
          <div
            key={week.title}
            className="col-span-12 md:col-span-4 relative rounded-xl p-[1px] overflow-hidden glow-border bg-background"
          >
            {/* rotating light layer sits behind via ::before, this div is just the positioning context */}

            <div className="relative z-10 price-card bg-background border-[#26302b] border rounded-[11px] p-6 text-center h-full">
              <div className="flex flex-col gap-2">
                <p className="text-accent uppercase">{week.title}</p>
                <p className="h1 py-[clamp(16px,24px)]">
                  $<CounterUp target={week.price} />
                </p>
                <p className="p">{week.subtitle}</p>
              </div>
              <div className="pt-4">
                <ol>
                  {week.list.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ol>
              </div>
              {week.cta && week.href && (
               <HoverTextButton text={week.cta} href={week.href} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseCoaching;
