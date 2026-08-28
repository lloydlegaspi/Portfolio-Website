---
name: quality-gate
description: Verify Portfolio-Website changes before completion, commit, PR, deployment, or release, and investigate CI or local validation failures.
---

# Quality Gate

Use this workflow for final review, production checks, substantial changes, or CI failure investigation.

## Required inputs

- Intended change scope and acceptance criteria
- Current diff and worktree status
- Current `package.json` scripts and `.github/workflows/ci.yaml`

## Workflow

1. Read `AGENTS.md`, `package.json`, CI configuration, `git status`, and the complete diff.
2. Select checks based on scope instead of assuming scripts from memory.
3. For a full production-quality gate, run the current repository equivalents of:

   ```bash
   npm run format:check
   npm run lint
   npm run typecheck
   npm test
   npm run test:coverage
   npm run build
   npm run test:e2e
   npm audit --json
   git diff --check
   ```

4. Run independent checks in a sensible order and stop only when later results would be misleading or unsafe.
5. Investigate failures and distinguish product regressions, environmental blockers, and pre-existing problems.
6. Never delete, skip, loosen, or rewrite tests merely to obtain green output.
7. Review the diff for scope creep, secrets, generated artifacts, accidental deletions, duplicated logic, and documentation drift.
8. Recheck `git status` and summarize exact commands, pass/fail results, available counts, and unexecuted checks.

## Expected output

An evidence-based readiness report, plus in-scope fixes when the user requested implementation rather than review only.

## Failure and escalation

Fail clearly when a check fails. Do not describe the gate as passing if any required check failed or was skipped. Report environmental blockers and the next reproducible action; request user input only when repository evidence cannot resolve the issue.

See [Quality gates](../../../README.md#quality-gates) and [AI and Testing](../../../docs/ai-assisted-development.md#ai-and-testing).
