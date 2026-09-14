<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-14 02:31 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 7004
- **Enriched:** 508 (7%)
- **Taste-rated:** 508 (7%)
- **Researched:** 343 (4%)
- **Status (candidate / rejected / published / duplicate):** 2580 / 4424 / 0 / 0
- **Published bullets (all-time):** 2772 (last 7d: 163)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-14 | 86 | 27 (31%) | 27 (31%) | 19 (22%) |
| 2026-09-13 | 285 | 36 (12%) | 36 (12%) | 25 (8%) |
| 2026-09-12 | 400 | 25 (6%) | 25 (6%) | 17 (4%) |
| 2026-09-11 | 53 | 15 (28%) | 15 (28%) | 13 (24%) |
| 2026-09-10 | 1756 | 71 (4%) | 71 (4%) | 55 (3%) |
| 2026-09-09 | 280 | 35 (12%) | 35 (12%) | 21 (7%) |
| 2026-09-08 | 588 | 39 (6%) | 39 (6%) | 20 (3%) |
| 2026-09-07 | 96 | 30 (31%) | 30 (31%) | 15 (15%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-14 | 1 | 5 | 3 | 5 | 5 | 1 | 20 |
| 2026-09-13 | 2 | 5 | 3 | 0 | 5 | 3 | 18 |
| 2026-09-12 | 1 | 5 | 3 | 0 | 5 | 3 | 17 |
| 2026-09-11 | 1 | 5 | 3 | 5 | 4 | 3 | 21 |
| 2026-09-10 | 2 | 5 | 4 | 5 | 6 | 3 | 25 |
| 2026-09-09 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-08 | 0 | 3 | 3 | 5 | 5 | 3 | 19 |
| 2026-09-07 | 0 | 5 | 3 | 5 | 5 | 1 | 19 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4234 |
| arXiv cs.CL | `rss` | 2955 |
| TLDR | `email` | 2515 |
| The Rundown AI | `email` | 533 |
| The Decoder | `rss` | 219 |
| TechCrunch AI | `rss` | 215 |
| AlphaSignal | `email` | 123 |
| Codex releases | `rss` | 115 |
| The Verge AI | `rss` | 106 |
| Qwen Code releases | `rss` | 99 |
| r/LocalLLaMA | `reddit` | 95 |
| OpenClaw releases | `rss` | 77 |
| Cline releases | `rss` | 69 |
| OpenAI blog | `rss` | 61 |
| r/LocalLLM | `reddit` | 60 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 47377 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
