const tools = [
  {
    letter: "S",
    color: "bg-yellow-400",
    name: "Slack",
    description:
      "Team comms. Invite sent to your email before Day 1.",
  },
  {
    letter: "R",
    color: "bg-orange-500",
    name: "Rippling",
    description:
      "HR, payroll, and benefits. Login details in your welcome email.",
  },
  {
    letter: "A",
    color: "bg-blue-500",
    name: "Ashby",
    description: "Hiring and referrals. Ask People Ops for access.",
  },
  {
    letter: "N",
    color: "bg-brand",
    name: "Natter Platform",
    description:
      "Your main product. Setup guide in your welcome email.",
  },
];

const whoToAsk = [
  {
    topic: "IT issues",
    answer: "#it-help on Slack",
  },
  {
    topic: "HR & payroll",
    answer: "People Ops (name TBC)",
  },
  {
    topic: "Product questions",
    answer: "Your onboarding buddy or #product on Slack",
  },
  {
    topic: "Anything else",
    answer: "Your manager",
  },
];

export default function LogisticsPage() {
  return (
    <>
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
            Logistics
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Office & logistics.
          </h1>
          <p className="text-lg text-gray-500 mb-14">
            Everything you need to know before you walk through the door.
          </p>

          {/* First day card */}
          <div className="rounded-2xl border-2 border-brand bg-lilac/30 p-8 mb-14">
            <h2 className="text-lg font-bold text-brand mb-5">
              Your first day — quick reference
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand/60 mb-1">
                  Where
                </dt>
                <dd className="text-sm text-ink leading-relaxed">
                  <span className="block font-medium">London (UK)</span>
                  1 Lyric Square, London W6 0NB
                  <span className="block mt-2 font-medium">US / Remote</span>
                  Check with your manager
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand/60 mb-1">
                  Start time
                </dt>
                <dd className="text-sm text-ink font-medium">
                  9:00am unless told otherwise
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand/60 mb-1">
                  Contact on arrival
                </dt>
                <dd className="text-sm text-ink">
                  People Ops{" "}
                  <span className="text-gray-400">(name TBC)</span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Tool cards */}
          <h2 className="text-xl font-bold text-ink mb-6">Your tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {tools.map(({ letter, color, name, description }) => (
              <div
                key={name}
                className="rounded-2xl border border-gray-100 bg-white p-6 flex gap-4 items-start hover:border-lilac hover:shadow-sm transition-all"
              >
                <div
                  className={`${color} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}
                >
                  <span className="text-white font-bold text-sm">{letter}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink mb-1">{name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Who to ask */}
          <h2 className="text-xl font-bold text-ink mb-6">
            Who to ask for what
          </h2>
          <ul className="flex flex-col divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {whoToAsk.map(({ topic, answer }) => (
              <li
                key={topic}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-semibold text-ink w-36 shrink-0">
                  {topic}
                </span>
                <span className="text-sm text-gray-500">→ {answer}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
