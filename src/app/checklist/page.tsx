"use client";

import { useState, useEffect } from "react";

type ChecklistItem = {
  id: string;
  label: string;
  tag?: string;
};

type ChecklistGroup = {
  day: string;
  items: ChecklistItem[];
};

const CHECKLIST: ChecklistGroup[] = [
  {
    day: "Day 1",
    items: [
      {
        id: "d1-1",
        label: "Complete HR paperwork on Rippling",
        tag: "Rippling",
      },
      {
        id: "d1-2",
        label: "Set up your Natter platform account",
        tag: "Natter",
      },
      {
        id: "d1-3",
        label:
          "Join Slack channels: #general, #team-announcements, #your-team",
        tag: "Slack",
      },
      {
        id: "d1-4",
        label: "Meet your onboarding buddy (30 min, no agenda)",
      },
      {
        id: "d1-5",
        label:
          "1:1 with your manager — ask: what does success look like at 30 days?",
      },
    ],
  },
  {
    day: "Days 2–3",
    items: [
      {
        id: "d2-1",
        label: "Watch the Natter product walkthrough",
        tag: "Natter",
      },
      { id: "d2-2", label: "Shadow at least one customer call" },
      {
        id: "d2-3",
        label:
          "Set up tools: Rippling (HR & payroll), Ashby (hiring), Natter platform admin view",
      },
      { id: "d2-4", label: "Read the company handbook" },
      {
        id: "d2-5",
        label: "Introduce yourself in #introductions on Slack",
        tag: "Slack",
      },
    ],
  },
  {
    day: "Days 4–5",
    items: [
      { id: "d3-1", label: "Attend your first team standup" },
      { id: "d3-2", label: "Write your top 3 questions about the role" },
      {
        id: "d3-3",
        label: "Agree your first real deliverable with your manager",
      },
      { id: "d3-4", label: "Post your intro in the All Hands doc" },
    ],
  },
];

const TAG_STYLES: Record<string, string> = {
  Rippling: "bg-orange-50 text-orange-600 border border-orange-200",
  Natter: "bg-lilac text-brand border border-brand/20",
  Slack: "bg-yellow-50 text-yellow-700 border border-yellow-200",
  Ashby: "bg-blue-50 text-blue-600 border border-blue-200",
};

const ALL_IDS = CHECKLIST.flatMap((g) => g.items.map((i) => i.id));
const STORAGE_KEY = "natter-checklist-v1";

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(new Set(JSON.parse(saved) as string[]));
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        // ignore
      }
      return next;
    });
  }

  const total = ALL_IDS.length;
  const done = checked.size;
  const progress = mounted ? Math.round((done / total) * 100) : 0;

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
          First Week
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-3">
          Your onboarding checklist.
        </h1>
        <p className="text-base text-gray-500 mb-10">
          Tick things off as you go. Your progress is saved automatically.
        </p>

        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              {done} of {total} complete
            </span>
            <span className="text-sm font-semibold text-brand">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-brand h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-10">
          {CHECKLIST.map(({ day, items }) => (
            <div key={day}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-200 pb-2">
                {day}
              </h2>
              <ul className="flex flex-col gap-3">
                {items.map(({ id, label, tag }) => {
                  const isChecked = checked.has(id);
                  return (
                    <li key={id}>
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(id)}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-brand cursor-pointer"
                        />
                        <div className="flex flex-1 flex-wrap items-center gap-2 min-w-0">
                          <span
                            className={`text-sm leading-relaxed transition-colors ${
                              isChecked
                                ? "line-through text-gray-300"
                                : "text-gray-700 group-hover:text-ink"
                            }`}
                          >
                            {label}
                          </span>
                          {tag && (
                            <span
                              className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${
                                TAG_STYLES[tag] ??
                                "bg-gray-100 text-gray-500 border border-gray-200"
                              } ${isChecked ? "opacity-30" : ""}`}
                            >
                              {tag}
                            </span>
                          )}
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Completion message */}
        {done === total && total > 0 && (
          <div className="mt-12 rounded-2xl bg-lilac border border-brand/20 p-8 text-center">
            <p className="text-2xl font-bold text-brand mb-2">
              Week one, done. 🎉
            </p>
            <p className="text-sm text-brand/70">
              You&apos;re officially up and running at Natter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
