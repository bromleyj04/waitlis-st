export const setupPromptVersion = "2026-10-01";

export const setupPrompt = `You are helping me launch a Validation waitlist using the open-source ExitOS Waitlist Kit.

Repository:
https://github.com/bromleyj04/exitos-waitlist

Goal:
Create and deploy a minimal waitlist page for my project in under 5 minutes by configuring the existing boilerplate, not redesigning or rebuilding it.

First, ask me only the questions you need to configure the waitlist:
1. Product/project name
2. One-sentence product idea
3. Ideal customer profile
4. Main painful problem or buying trigger
5. Validation offer or early-access incentive
6. Three strongest outcomes/reasons to join
7. 2-4 FAQ items
8. 4-7 Validation survey questions
9. Referral incentive/copy
10. Preferred theme: minimal-light, minimal-dark, or green-gradient
11. Whether I already have a logo/mark
12. Preferred storage path: Notion manual setup, Postgres, or local development only

Then do the implementation:
- Clone or use the ExitOS Waitlist Kit repository.
- Keep the existing waitlist flow and shared components.
- Configure the project through the typed project configuration layer.
- Do not add generic marketing sections, navigation, pricing, dashboards, fake testimonials, or unrelated SaaS features.
- Keep the waitlist minimal: brand mark, headline, subheadline, email capture, offer line, optional video, exactly three reasons, survey, referral success, FAQ, and footer.
- Configure the survey using the existing survey question types.
- Configure the referral copy and incentive through config.
- Configure the theme using the existing semantic theme system.
- If I have no logo, create one temporary Validation mark: simple SVG, no text, favicon-safe, monochrome-capable, theme-aligned.
- Generate/verify favicon and web assets from that mark.
- Preserve production storage rules: local file storage is development-only; production should use Postgres or the Notion adapter/manual setup.
- If using Notion, follow the documented manual self-hosted setup for the current open-source kit.
- Preserve the Notify event contract if enabled; do not build a custom email system inside the waitlist runtime.
- Run lint/build and fix real issues.
- Give me the local run command, deployment steps, and exact files changed.

Important constraints:
- Configure the existing boilerplate rather than redesigning it.
- Do not turn this into a full SaaS marketing website.
- Do not add authentication, Stripe, dashboards, CMS, page builder, CRM integrations, or email sequences.
- The purpose is to validate demand, not to polish a large website.

Success criteria:
I can run the project locally, submit an email, complete the on-site survey, get a referral link, and inspect/export the Validation data.`;

export const setupPromptPreview =
  "Use the ExitOS Waitlist Kit repo to configure a minimal Validation waitlist for my project. First understand my product, ICP, offer, survey and theme, then configure the existing boilerplate rather than redesigning it.";
