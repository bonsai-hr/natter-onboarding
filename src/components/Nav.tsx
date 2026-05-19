"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Welcome" },
  { href: "/values", label: "Values" },
  { href: "/team", label: "Team" },
  { href: "/checklist", label: "Checklist" },
  { href: "/logistics", label: "Logistics" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/logoblack.png"
            alt="Natter"
            width={100}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <div className="flex items-center gap-1 sm:gap-4 overflow-x-auto">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`whitespace-nowrap px-2 py-1 text-sm font-medium transition-colors rounded-sm ${
                  active
                    ? "text-brand border-b-2 border-brand"
                    : "text-gray-500 hover:text-brand"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
