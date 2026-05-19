import Link from "next/link";

const stats = [
  { value: "4×", label: "growth in 2024" },
  { value: "5×", label: "growth in 2025" },
  { value: "$23M", label: "raised April 2026" },
  { value: "20,000+", label: "participants per session" },
];

const customers = [
  "Accenture",
  "PwC",
  "Deloitte",
  "ServiceNow",
  "Mondelez",
  "Miro",
];

export default function WelcomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink flex flex-col items-center justify-center text-center px-6 py-28 md:py-36">
        <img src="/logowhite.svg" alt="Natter" className="h-10 mb-12" />
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Welcome to Natter.
        </h1>
        <p className="text-xl md:text-2xl text-lilac mb-8 max-w-xl leading-snug">
          You&apos;re joining a team that gives everyone a voice.
        </p>
        <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Natter is an AI-native conversation intelligence platform that runs
          thousands of simultaneous conversations and turns them into
          decision-ready insights in hours. We help the world&apos;s leading
          organisations hear the real story from the people closest to the work.
        </p>
        <Link
          href="/values"
          className="inline-block bg-brand text-white px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
        >
          Start your journey →
        </Link>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-brand mb-1">
                {value}
              </p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {customers.map((name) => (
              <span
                key={name}
                className="text-lg md:text-xl font-semibold text-gray-400 hover:text-gray-600 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
