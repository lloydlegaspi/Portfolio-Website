---
name: dependency-change
description: Safely add, remove, replace, or upgrade Portfolio-Website packages, lockfile entries, Node/npm constraints, framework versions, and build or production runtime dependencies.
---

# Dependency Change

Use this workflow only when dependency or runtime configuration is an intended part of the request.

## Required inputs

- The reason and desired outcome for the change
- Current manifest, lockfile, runtime constraints, imports, and relevant provider documentation
- Compatibility and security information from authoritative sources

## Workflow

1. Read `AGENTS.md`, inspect status, and determine why code or existing packages cannot meet the need.
2. Inspect peer dependencies, engine constraints, framework compatibility, release notes, and migration requirements.
3. Prefer maintained, supported packages and the smallest dependency surface.
4. Do not change a major version as incidental cleanup or add a library when a simple native implementation is sufficient.
5. Update `package.json` and `package-lock.json` with npm; never hand-edit lockfile resolution data.
6. Check for deprecated, redundant, duplicated, or now-unused packages and imports.
7. Review the manifest and lockfile diff for unexpected transitive or lifecycle-script changes.
8. Run formatting, lint, typecheck, tests, coverage, build, E2E, and `npm audit` when relevant to the changed dependency.
9. Update README, environment examples, CI, or operational docs only when actual usage or runtime requirements changed.

Framework upgrades, authentication or security packages, AI SDKs, build tooling, and production runtime changes require explicit scope, migration-guide review, and full validation.

## Expected output

A justified, minimal dependency change with a correct lockfile, compatible code and configuration, updated operational documentation where needed, and an audit/verification report.

## Failure and escalation

Do not force incompatible resolution, suppress an advisory without evidence, or hide a broken peer constraint. Explain the incompatibility and request a decision before adopting a risky replacement, major migration, or security tradeoff.

Consult the installed Next.js documentation and the [repository guidance](../../../AGENTS.md) before any Next.js upgrade or framework-sensitive code change.
