---
name: portfolio-feature
description: Implement or modify Portfolio-Website UI and application features, including sections, navigation, components, project presentation, layout behavior, and frontend capabilities.
---

# Portfolio Feature

Use this workflow for a scoped UI or application behavior change. Do not use it for fact-only content edits or dependency-only work.

## Required inputs

- Requested behavior and acceptance criteria
- Relevant route, feature components, canonical content modules, and existing tests
- Current repository state and applicable installed Next.js documentation

## Workflow

1. Read `AGENTS.md` and inspect `git status`.
2. Read the relevant feature, content modules, tests, and installed Next.js guide before proposing changes.
3. Identify which work belongs in a Server Component and the smallest client boundary required for interaction.
4. Reuse current feature abstractions and design conventions when they fit.
5. Implement the requested behavior with semantic markup and accessible names, focus, and keyboard operation.
6. Verify responsive layouts and preserve reduced-motion behavior.
7. Keep state local and minimal; do not add a state library unless the task demonstrates a need.
8. Add or update behavior-focused unit, component, or E2E coverage at the appropriate layer.
9. Run formatting, lint, typecheck, and relevant tests; add build or E2E checks when risk warrants them.
10. Review the full diff and status for unrelated changes.

Do not perform a wholesale redesign, duplicate content facts, make arbitrary out-of-scope visual changes, add unnecessary state machinery, or trade away accessibility.

## Expected output

A focused feature change consistent with the existing architecture, with appropriate tests and a report of exact verification results.

## Failure and escalation

Do not guess when requirements conflict with verified content, privacy, security, or architecture. Preserve working behavior, document the evidence and tradeoff, and request a decision when it materially changes scope. Never mask a failing check or weaken a test to finish.

See the [AI-assisted development policy](../../../docs/ai-assisted-development.md) for the shared evidence-first workflow.
