<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-29 03:36 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6945
- **Enriched:** 483 (6%)
- **Taste-rated:** 483 (6%)
- **Researched:** 356 (5%)
- **Status (candidate / rejected / published / duplicate):** 1499 / 5446 / 0 / 0
- **Published bullets (all-time):** 3087 (last 7d: 194)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-29 | 682 | 39 (5%) | 39 (5%) | 28 (4%) |
| 2026-09-28 | 100 | 26 (26%) | 26 (26%) | 21 (21%) |
| 2026-09-27 | 84 | 29 (34%) | 29 (34%) | 23 (27%) |
| 2026-09-26 | 633 | 93 (14%) | 93 (14%) | 62 (9%) |
| 2026-09-24 | 705 | 47 (6%) | 47 (6%) | 33 (4%) |
| 2026-09-23 | 504 | 43 (8%) | 43 (8%) | 33 (6%) |
| 2026-09-22 | 1092 | 67 (6%) | 67 (6%) | 56 (5%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-29 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-27 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-26 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-25 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-09-24 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-23 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-09-22 | 3 | 5 | 5 | 5 | 5 | 5 | 28 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4032 |
| arXiv cs.CL | `rss` | 3207 |
| TLDR | `email` | 2604 |
| The Rundown AI | `email` | 503 |
| TechCrunch AI | `rss` | 275 |
| The Decoder | `rss` | 212 |
| Codex releases | `rss` | 148 |
| The Verge AI | `rss` | 143 |
| AINews | `email` | 118 |
| AlphaSignal | `email` | 117 |
| r/LocalLLaMA | `reddit` | 92 |
| OpenClaw releases | `rss` | 76 |
| AI Hero (Matt Pocock) | `rss` | 72 |
| Qwen Code releases | `rss` | 70 |
| OpenAI blog | `rss` | 66 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 55961 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
