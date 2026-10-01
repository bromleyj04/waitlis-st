import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Code2,
  Database,
  GitPullRequestArrow,
  NotebookTabs,
  Rocket,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

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
    icon: NotebookTabs,
    title: "Validate more than email",
    body: "Capture intent, survey context, referral pull, and founder-readable evidence in one focused flow."
  },
  {
    icon: Database,
    title: "Bring your own storage",
    body: "Use Notion for a simple Validation CRM, Postgres for production control, or local JSON during development."
  },
  {
    icon: GitPullRequestArrow,
    title: "Configure, don’t redesign",
    body: "Project copy, survey questions, themes, marks, referrals, and reasons live in typed config."
  }
];

const roadmap = [
  "Connect Notion OAuth onboarding",
  "Hosted Notify service for delayed founder emails",
  "Polished project setup around the open-source kit"
];

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
            <a href="#workflow">Workflow</a>
            <a href="#next">Next</a>
          </nav>
          <Link
            href="https://github.com/bromleyj04/exitos-waitlist"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 text-sm font-semibold text-white/86 transition hover:bg-white/[0.1]"
          >
            <Code2 size={16} />
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
              waitlis.st turns the open-source ExitOS Waitlist Kit into the
              fastest path from idea to demand evidence: signup, survey,
              referral, and Validation CRM.
            </p>
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

      <section id="workflow" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Built for the Validate stage.
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
                <Rocket size={24} />
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
