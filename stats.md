<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-17 06:04 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 2625
- **Enriched:** 666 (25%)
- **Taste-rated:** 666 (25%)
- **Researched:** 435 (16%)
- **Status (candidate / rejected / published / duplicate):** 673 / 1952 / 0 / 0
- **Published bullets (all-time):** 4165 (last 7d: 178)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-17 | 247 | 48 (19%) | 48 (19%) | 28 (11%) |
| 2026-11-16 | 107 | 35 (32%) | 35 (32%) | 23 (21%) |
| 2026-11-15 | 111 | 36 (32%) | 36 (32%) | 20 (18%) |
| 2026-11-14 | 208 | 69 (33%) | 69 (33%) | 43 (20%) |
| 2026-11-13 | 225 | 71 (31%) | 71 (31%) | 53 (23%) |
| 2026-11-12 | 203 | 48 (23%) | 48 (23%) | 29 (14%) |
| 2026-11-11 | 242 | 53 (21%) | 53 (21%) | 35 (14%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-17 | 2 | 5 | 3 | 5 | 1 | 3 | 19 |
| 2026-11-16 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-11-15 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-14 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-13 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-12 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-11-11 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-11-10 | 3 | 5 | 3 | 4 | 3 | 1 | 19 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 1544 |
| The Rundown AI | `email` | 389 |
| TechCrunch AI | `rss` | 283 |
| The Decoder | `rss` | 215 |
| Hacker News (points) | `rss` | 198 |
| The Verge AI | `rss` | 184 |
| AlphaSignal | `email` | 155 |
| OpenAI blog | `rss` | 92 |
| Hermes Agent releases | `rss` | 91 |
| OpenClaw releases | `rss` | 90 |
| r/LocalLLaMA | `reddit` | 84 |
| HF Daily Papers | `rss` | 83 |
| Codex releases | `rss` | 79 |
| Qwen Code releases | `rss` | 71 |
| Help Net Security AI | `rss` | 69 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 69199 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
