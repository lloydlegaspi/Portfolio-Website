# Chat rate limiting

The chat route intentionally does not use an in-memory request counter. Process-local counters are inconsistent across serverless instances and disappear whenever an instance is recycled.

Before enabling the assistant on a high-traffic public deployment, protect `/api/chat` with a distributed limiter at the edge or route level. On Vercel, suitable choices include a WAF rate-limit rule or a durable Redis-compatible store such as Vercel Marketplace's Upstash integration. Key limits by a privacy-conscious client identifier, keep the window modest, and return `429 Too Many Requests` with a `Retry-After` header.

The route already limits prompt size, validates JSON, applies an upstream timeout, and returns generic provider failures. Rate limiting is a deployment control because its correct implementation depends on the selected hosting account and durable store.
