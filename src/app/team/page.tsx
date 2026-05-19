const founders = [
  {
    initials: "CW",
    name: "Charlie Woodward",
    role: "CEO & Co-founder",
    bio: "Background at BBC and Uber. Founded Natter to level the playing field at work and make sure every voice counts.",
  },
  {
    initials: "JS",
    name: "James Stevens",
    role: "Co-founder, CFO & COO",
    bio: "Background in M&A and enterprise SaaS. Joined Charlie to build the operational and financial backbone of an enterprise AI company.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Founders */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
            The Founders
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            The people behind Natter.
          </h1>
          <p className="text-lg text-gray-500 mb-14 max-w-xl">
            Two people who believed that better conversations lead to better
            decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map(({ initials, name, role, bio }) => (
              <div
                key={name}
                className="rounded-2xl border border-gray-100 p-8 flex flex-col gap-5 hover:border-lilac hover:shadow-sm transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center">
                  <span className="text-white font-bold text-lg tracking-wide">
                    {initials}
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-ink">{name}</h2>
                  <p className="text-sm text-brand font-medium mt-0.5">{role}</p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gray-50 h-px" />

      {/* Your team */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Your Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            More great people await.
          </h2>
          <p className="text-base text-gray-500 mb-10">
            You&apos;ll be introduced to your teammates on Day One. Here&apos;s
            a sneak peek at the seats around you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-dashed border-gray-300 bg-white p-7 flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <span className="text-gray-300 text-xl">?</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400">
                    Name TBC
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Role TBC</p>
                  <p className="text-xs text-gray-400 mt-2 italic">
                    You&apos;ll meet them on Day One.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
