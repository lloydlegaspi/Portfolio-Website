---
name: portfolio-content-update
description: Update verified professional portfolio facts such as experience, education, certifications, projects, skills, resume information, and homepage career copy without fabrication.
---

# Portfolio Content Update

Use this workflow whenever a change could alter a public professional or personal claim.

## Required inputs

- The user's verified facts or a trusted repository artifact containing them
- The canonical module in `src/content/` and its type or validation schema
- Intended ordering, visibility, and links when applicable

## Workflow

1. Read `AGENTS.md`, inspect status, and locate the canonical typed content module.
2. Establish which facts were directly supplied or are supported by a trusted repository artifact.
3. Preserve current data where new facts are missing or ambiguous; never infer plausible metrics, dates, roles, achievements, or URLs.
4. Update only verified facts while preserving the schema in `src/types/`.
5. Use ISO dates internally wherever the current content architecture expects them, with separate display text only where the schema supports it.
6. Check external URLs and local asset paths. Do not silently substitute an unverified destination.
7. Keep featured-project selection and ordering intentional.
8. Do not repeat facts in components, metadata, or chatbot context; allow them to consume the canonical module.
9. Add a precise TODO when recording an unresolved fact is useful, without changing the current verified value.
10. Run formatting, typecheck, canonical content validation tests, and any affected rendering tests.

## Expected output

A minimal canonical content update with unchanged facts outside scope, valid types and schemas, working references, and reported checks.

## Failure and escalation

If sources conflict or a public claim cannot be verified, stop that factual change, explain the conflict, and ask the user to resolve it. Do not fabricate, average, extrapolate, or rewrite the claim as if confirmed.

See [AI and Professional Content](../../../docs/ai-assisted-development.md#ai-and-professional-content) for the repository policy.
