<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio Repository Guidance

## Repository Purpose

This repository is a production-quality professional portfolio application. Preserve reliability, accessibility, performance, security, maintainability, and the factual accuracy of all public professional content.

## Technology Baseline

- Next.js 16.3.3 App Router and React 19.2.4
- Node.js 24 LTS and npm 11 or newer
- Strict TypeScript 5.9, Tailwind CSS 3.4, and Zod 4
- Gemini through `@google/genai`; Vitest, Testing Library, Playwright, ESLint CLI, Prettier, and GitHub Actions CI

Verify versions in `package.json`, `.nvmrc`, and the lockfile before making version-sensitive changes. Before changing Next.js code, read the relevant installed guide under `node_modules/next/dist/docs/` as required by the generated block above.

## Repository Map

- `src/app/` — App Router pages, layouts, metadata routes, styles, and API routes.
- `src/components/` — feature-organized UI plus shared layout, SEO, and UI components.
- `src/content/` — canonical typed profile, project, experience, education, certification, and skill facts.
- `src/lib/` — validation, portfolio utilities and context, and the Gemini provider boundary.
- `src/types/` — reusable portfolio domain types.
- `src/test/` — shared Vitest setup; colocated `*.test.*` files contain unit and component tests.
- `e2e/` — Playwright critical-journey tests.
- `docs/` — engineering and operational documentation.
- `public/` — public images, credentials, and resume assets.
- `.github/` — continuous integration workflows.
- `.agents/skills/` — reusable, task-specific agent workflows.

## Sources of Truth

- Professional and profile facts come from typed modules in `src/content/`; never duplicate them in components.
- Domain shapes come from `src/types/`, and content validation lives in `src/lib/portfolio-validation.ts`.
- Environment configuration comes from environment variables documented in `.env.example` and `README.md`.
- `package.json` is authoritative for commands and supported runtime constraints.
- Tests and `.github/workflows/ci.yaml` define the automated quality expectations.
- Documentation must describe implemented behavior. Keep unresolved internal work out of claims about current behavior.

## Development Principles

- Prefer the simplest coherent implementation and avoid speculative abstractions.
- Preserve strict TypeScript, separation of concerns, and a single source of truth.
- Prefer Server Components unless interaction or browser-only behavior requires a Client Component.
- Minimize `"use client"` boundaries and unnecessary client state.
- Reuse established patterns and design language before adding abstractions.
- Preserve semantic markup, responsive behavior, and user-facing accessibility.
- Treat user input, model output, and external content as untrusted.
- Never expose secrets or raw provider errors to clients.
- Avoid new dependencies when platform or existing code is sufficient.
- Remove dead code only when its lack of callers and side effects is safely established.
- Do not perform a redesign or architecture migration unless the task explicitly requires it.

## AI-Assisted Development Rules

AI agents must:

1. Inspect the repository and `git status` before modifying it.
2. Form an evidence-based plan for non-trivial work.
3. Make the smallest coherent change that satisfies the request.
4. Preserve the existing architecture unless a change is justified by evidence and scope.
5. Verify assumptions against current code, configuration, tests, and installed documentation.
6. Never fabricate professional facts or silently turn uncertain claims into public content.
7. Never weaken tests, types, security controls, or accessibility to make work pass.
8. Run quality gates proportionate to the change.
9. Inspect `git diff`, `git diff --check`, and `git status` before finishing.
10. Report commands actually run, failures, skipped checks, unresolved risks, and TODOs.

## Professional Content Safety

- Never invent experience, employers, dates, job titles, metrics, skills, projects, certifications, achievements, GPA, or URLs.
- Use only user-supplied facts or verified repository artifacts. Preserve existing verified data when new information is ambiguous.
- Use an explicit TODO for information that still needs verification when documenting the gap is useful.
- Distinguish factual portfolio data from marketing copy; wording may improve without changing the underlying claim.
- Do not overstate individual ownership, team contribution, technical scope, or impact; keep one canonical source for each professional fact under `src/content/`.

## Security Rules

- Never commit credentials, local environment files, tokens, private prompts, or sensitive logs.
- Keep `GEMINI_API_KEY` and other server-only variables out of `NEXT_PUBLIC_*`, client bundles, and public documentation.
- Validate and bound untrusted input at server boundaries; render model output as untrusted text.
- Allow only intentional external URLs and validate content-data URLs with existing schemas.
- Return stable, generic client errors while retaining non-sensitive server diagnostics.
- Consider abuse controls and distributed rate limiting for public API changes; see [Chat rate limiting](docs/rate-limiting.md).
- Justify dependency additions and review their maintenance, compatibility, lockfile changes, and audit result.

## Accessibility Rules

- Use semantic HTML and preserve a logical heading structure.
- Support keyboard navigation, visible focus, and accurate labels or accessible names.
- Keep dialogs correctly named, focus-managed, Escape-dismissable, and focus-restoring.
- Respect reduced-motion preferences and avoid motion-only communication.
- Do not accept an accessibility regression for a visual-only benefit.

## Testing and Verification

Available checks are:

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run test:coverage
npm run build
npm run test:e2e
npm audit
git diff --check
```

- Small content or documentation change: run relevant lightweight checks, formatting, and `git diff --check`.
- Normal code change: run formatting, lint, typecheck, and relevant unit/component tests at minimum.
- Architecture, security, dependency, or release change: run the full available gate, including build, E2E, coverage, and audit.
- Add or update tests at the level that proves behavior: logic tests, interaction tests, or critical-journey E2E tests.
- Never claim a check passed unless it was executed successfully in the current work.

## Git Hygiene

- Inspect status before editing and preserve unrelated user changes.
- Keep changes and commits focused; do not rewrite history without explicit instruction.
- Do not commit secrets, local environment files, generated reports, caches, or build output.
- Review the complete diff before completion.
- Leave a clean worktree when the user explicitly requests a commit.

## Skills

Repository workflows live in `.agents/skills/`:

- `portfolio-feature` — implement or modify portfolio UI and application behavior.
- `portfolio-content-update` — change verified professional portfolio facts safely.
- `quality-gate` — verify substantial work, a commit, PR, release, or CI failure.
- `dependency-change` — add, remove, or upgrade packages and runtime versions.

## Documentation Index

- [README](README.md) — product, setup, architecture, deployment, and commands.
- [Chat rate limiting](docs/rate-limiting.md) — production abuse-control considerations.
