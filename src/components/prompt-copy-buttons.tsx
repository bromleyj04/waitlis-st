"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type PromptCopyButtonsProps = {
  prompt: string;
};

const agents = [
  {
    name: "ChatGPT",
    mark: "✺",
    accent: "text-white"
  },
  {
    name: "Claude",
    mark: "✹",
    accent: "text-[#ff8a5c]"
  },
  {
    name: "Perplexity",
    mark: "✶",
    accent: "text-white"
  }
];

export function PromptCopyButtons({ prompt }: PromptCopyButtonsProps) {
  const [copiedAgent, setCopiedAgent] = useState<string | null>(null);

  async function copyPrompt(agentName: string) {
    await navigator.clipboard.writeText(prompt);
    setCopiedAgent(agentName);
    window.setTimeout(() => setCopiedAgent(null), 1800);
  }

  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-3">
      {agents.map((agent) => {
        const copied = copiedAgent === agent.name;

        return (
          <button
            key={agent.name}
            type="button"
            onClick={() => void copyPrompt(agent.name)}
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/14 bg-white/[0.08] px-4 text-base font-bold text-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[#06110d]"
            aria-label={`Copy setup prompt for ${agent.name}`}
          >
            <span
              className={`grid size-8 shrink-0 place-items-center rounded-xl border border-white/12 bg-black/35 text-xl ${agent.accent}`}
            >
              {agent.mark}
            </span>
            <span>{copied ? "Copied" : `Ask ${agent.name}`}</span>
            <span className="text-white/54 transition group-hover:text-white/78">
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </span>
          </button>
        );
      })}
    </div>
  );
}
