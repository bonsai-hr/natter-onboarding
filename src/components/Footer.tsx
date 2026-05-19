export default function Footer() {
  return (
    <footer className="bg-ink py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src="/logowhite.svg" alt="Natter" className="h-7" />
        <p className="text-gray-400 text-sm text-center">
          © 2026 Natter · Give Everyone a Voice ·{" "}
          <a
            href="mailto:team@natter.co"
            className="hover:text-white transition-colors"
          >
            team@natter.co
          </a>
        </p>
      </div>
    </footer>
  );
}
