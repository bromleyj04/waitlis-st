import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Check,
  Clock3,
  GitPullRequestArrow,
  ShieldCheck,
  Sparkles,
  TerminalSquare
} from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { PromptCopyButtons } from "@/components/prompt-copy-buttons";
import {
  setupPrompt,
  setupPromptPreview,
  setupPromptVersion
} from "@/content/setup-prompt";

const screenshots = [
  {
    src: "/screenshots/green-gradient.png",
    alt: "waitlist landing page with green atmospheric theme",
    label: "Landing"
  },
  {
    src: "/screenshots/survey.png",
    alt: "multi-step validation survey",
    label: "Survey"
  },
  {
    src: "/screenshots/referral-success.png",
    alt: "referral success screen",
    label: "Referral"
  }
];

const pillars = [
  {
    icon: Clock3,
    title: "Live in an afternoon",
    body: "Copy the setup prompt into your coding agent, answer the product questions, deploy the generated waitlist, and start collecting evidence."
  },
  {
    icon: Bell,
    title: "Know when intent arrives",
    body: "Each new signup can trigger a founder notification, while completed surveys give you richer context than a plain email list."
  },
  {
    icon: GitPullRequestArrow,
    title: "Free, open, and flexible",
    body: "The runtime is open source. Change the template, theme, copy, storage, survey, and deployment path when your Validation needs it."
  }
];

const agents = ["ChatGPT", "Claude", "Grok", "Gemini", "Perplexity"];

const launchSteps = [
  {
    title: "Copy the prompt",
    body: "Paste the waitlis.st setup prompt into your preferred coding agent. It starts by understanding the idea, ICP, offer, survey, and proof needed.",
    detail: "Works with the agents founders already use."
  },
  {
    title: "Configure the kit",
    body: "The agent updates one typed project config: headline, offer, reasons, FAQ, survey, theme, referral copy, and temporary Validation mark.",
    detail: "No page-builder fiddling. No redesigning the flow."
  },
  {
    title: "Connect storage",
    body: "Use Notion for a founder-readable Validation CRM or Postgres when you want a more technical production database.",
    detail: "Project 2 will make Notion OAuth the polished path."
  },
  {
    title: "Deploy and get notified",
    body: "Ship to Vercel, collect signups, run the survey, generate referral links, and receive founder notifications when new intent arrives.",
    detail: "The open-source kit stays yours to customize."
  }
];

const roadmap = [
  "Connect Notion OAuth onboarding",
  "Hosted Notify service for delayed founder emails",
  "Polished project setup around the open-source kit"
];

function GitHubMark({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-1.91c-3.13.68-3.79-1.35-3.79-1.35-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.51 2.64 3.28 1.91.1-.73.39-1.23.71-1.51-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.65 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

function AgentMark({ name, index }: { name: string; index: number }) {
  const symbols = ["✺", "✹", "◆", "◉", "✶"];

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-sm font-semibold text-white/72">
      <span className="grid size-6 place-items-center rounded-full bg-white/[0.08] text-[var(--accent)]">
        {symbols[index]}
      </span>
      {name}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3" aria-label="waitlis.st home">
            <BrandMark size={44} />
            <span className="text-lg font-semibold tracking-tight">waitlis.st</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-white/62 md:flex">
            <a href="#kit">Kit</a>
            <a href="#steps">Steps</a>
            <a href="#workflow">Workflow</a>
            <a href="#next">Next</a>
          </nav>
          <Link
            href="https://github.com/bromleyj04/exitos-waitlist"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 text-sm font-semibold text-white/86 transition hover:bg-white/[0.1]"
          >
            <GitHubMark size={17} />
            GitHub
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-12 py-18 lg:grid-cols-[1fr_0.92fr] lg:py-10">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="mb-8 flex justify-center lg:justify-start">
              <BrandMark size={88} />
            </div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/70">
              <Sparkles size={15} className="text-[var(--accent)]" />
              Validation waitlists for serious ideas
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Launch the waitlist before the product gets heavy.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl lg:mx-0">
              Copy a prompt, let your agent configure the open-source kit, and
              get a Validation waitlist live with signup, survey, referrals,
              notifications, and a founder-readable CRM.
            </p>
            <div className="mt-7 grid gap-3 text-left sm:grid-cols-3">
              {[
                "Prompt-led setup",
                "Email notifications",
                "Free open-source runtime"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-3 text-sm font-semibold text-white/68"
                >
                  <Check size={16} className="shrink-0 text-[var(--accent)]" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="https://github.com/bromleyj04/exitos-waitlist"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-base font-bold text-[var(--ink)] shadow-[0_18px_70px_rgba(185,255,114,0.22)] transition hover:bg-[var(--accent-strong)]"
              >
                Use the open-source kit
                <ArrowRight size={18} />
              </Link>
              <Link
                href="https://exitos-waitlist.vercel.app"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/14 bg-white/[0.06] px-6 text-base font-semibold text-white transition hover:bg-white/[0.1]"
              >
                View live demo
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-5 rounded-[36px] bg-[radial-gradient(circle_at_50%_20%,rgba(185,255,114,0.24),transparent_38rem)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-black/24 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <Image
                src="/screenshots/green-gradient.png"
                alt="ExitOS Waitlist Kit green-gradient landing page"
                width={1600}
                height={1200}
                priority
                className="h-auto w-full rounded-[20px] border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="kit" className="border-y border-white/10 bg-black/22 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1fr] lg:px-10">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Project 1 is live
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The runtime is open-source. The hosted layer comes next.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              The kit is already useful on its own: clone it, configure one
              project file, deploy to Vercel, and collect Validation evidence.
              waitlis.st will wrap that foundation with smoother onboarding.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {screenshots.map((screenshot) => (
              <figure
                key={screenshot.src}
                className="overflow-hidden rounded-[22px] border border-white/12 bg-white/[0.05] p-2"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={900}
                  height={700}
                  className="aspect-[4/3] w-full rounded-[16px] border border-white/10 object-cover object-top"
                />
                <figcaption className="px-2 py-3 text-sm font-semibold text-white/68">
                  {screenshot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              From prompt to live waitlist
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The setup path should feel linear.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              waitlis.st is designed around the way founders increasingly work:
              give an agent the right context, configure the existing system,
              and ship the smallest useful Validation surface.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {agents.map((agent, index) => (
                <AgentMark key={agent} name={agent} index={index} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-white/12 sm:block" />
            <div className="space-y-4">
              {launchSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-[24px] border border-white/12 bg-white/[0.055] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:pl-20"
                >
                  <div className="mb-5 grid size-11 place-items-center rounded-2xl border border-white/12 bg-black/45 text-sm font-bold text-[var(--accent)] sm:absolute sm:left-4 sm:top-6">
                    {index + 1}
                  </div>
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-2xl leading-7 text-white/62">
                        {step.body}
                      </p>
                      {index === 0 ? (
                        <>
                          <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                            <div className="mb-3 flex items-center justify-between gap-3">
                              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                                Prompt v{setupPromptVersion}
                              </span>
                              <span className="text-xs font-semibold text-white/42">
                                Full prompt copies to clipboard
                              </span>
                            </div>
                            <p className="font-mono text-sm leading-6 text-white/64">
                              {setupPromptPreview}
                            </p>
                          </div>
                          <PromptCopyButtons prompt={setupPrompt} />
                        </>
                      ) : null}
                    </div>
                    <p className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold text-white/58 lg:mt-1 lg:whitespace-nowrap">
                      {step.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Built for the Validate stage, not generic launch theatre.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/62">
            Not a generic landing page. Not a SaaS starter kit. A narrow system
            for testing whether a business idea is worth building.
          </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="rounded-[24px] border border-white/12 bg-white/[0.055] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl"
              >
                <div className="mb-9 inline-grid size-13 place-items-center rounded-2xl border border-white/12 bg-white/[0.07] text-[var(--accent)]">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-white/60">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="next" className="mx-auto max-w-5xl px-5 pb-24 sm:px-8 lg:px-10">
        <div className="rounded-[32px] border border-white/12 bg-[var(--surface)] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <div className="mb-7 inline-grid size-13 place-items-center rounded-2xl bg-[var(--accent)] text-[var(--ink)]">
                <TerminalSquare size={24} />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Next: hosted onboarding.
              </h2>
              <p className="mt-5 leading-8 text-white/62">
                Project 2 will add the managed pieces that do not belong in the
                open-source runtime: Notion OAuth, delayed Notify emails, and a
                simpler founder setup path.
              </p>
            </div>
            <div className="space-y-3">
              {roadmap.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-white/76"
                >
                  <ShieldCheck size={20} className="text-[var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-white/76">
                <Bell size={20} className="text-[var(--accent)]" />
                <span>
                  For now, use the open-source kit directly and deploy your own
                  waitlist.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center text-sm text-white/48 md:flex-row md:text-left">
          <Link href="/" className="flex items-center gap-3 text-white/80">
            <BrandMark size={34} />
            <span className="font-semibold">waitlis.st</span>
          </Link>
          <p>Built around the open-source ExitOS Waitlist Kit.</p>
          <div className="flex items-center gap-5">
            <Link href="https://github.com/bromleyj04/exitos-waitlist">GitHub</Link>
            <Link href="https://exitos-waitlist.vercel.app">Demo</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
