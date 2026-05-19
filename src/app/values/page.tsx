const values = [
  {
    title: "Voice at Scale",
    body: "Every person's perspective matters, not just the loudest in the room.",
  },
  {
    title: "Conversation over Survey",
    body: "Depth beats checkbox. A 7-minute conversation yields 1,000 words. A survey yields 10.",
  },
  {
    title: "Insight to Action",
    body: "Data means nothing without a decision. We close the loop, every time.",
  },
  {
    title: "Radical Transparency",
    body: "Honest feedback, heard clearly, acted on quickly. No filters.",
  },
  {
    title: "Build with Curiosity",
    body: "We are always asking better questions. So should you.",
  },
];

export default function ValuesPage() {
  return (
    <>
      {/* Origin story */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">
            Our Story
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Natter was founded in 2021 by Charlie Woodward and James Stevens
            with a simple goal: give everyone a voice at work. What began as a
            way to create more meaningful, inclusive conversations in hybrid
            teams has evolved into an AI-native conversation intelligence
            platform used by enterprises globally.
          </p>
        </div>
      </section>

      {/* Mission callout */}
      <section className="bg-lilac py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-6">
            Our Mission
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-brand leading-tight">
            Give everyone a voice.
          </h2>
        </div>
      </section>

      {/* Value cards */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10 text-center">
            What we believe
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ title, body }, i) => (
              <div
                key={title}
                className={`bg-white rounded-2xl p-8 border-l-4 border-brand shadow-sm hover:shadow-md transition-shadow ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <h3 className="text-base font-bold text-ink mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark closing */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Too many people in organisations never get heard. Too many decisions
            are made from incomplete data.{" "}
            <span className="text-white font-semibold">Natter fixes that.</span>
          </p>
        </div>
      </section>
    </>
  );
}
