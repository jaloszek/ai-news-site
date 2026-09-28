<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-28 02:58 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6821
- **Enriched:** 481 (7%)
- **Taste-rated:** 481 (7%)
- **Researched:** 356 (5%)
- **Status (candidate / rejected / published / duplicate):** 1522 / 5299 / 0 / 0
- **Published bullets (all-time):** 3063 (last 7d: 188)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-28 | 100 | 26 (26%) | 26 (26%) | 20 (20%) |
| 2026-09-27 | 84 | 29 (34%) | 29 (34%) | 23 (27%) |
| 2026-09-26 | 633 | 93 (14%) | 93 (14%) | 60 (9%) |
| 2026-09-24 | 705 | 47 (6%) | 47 (6%) | 33 (4%) |
| 2026-09-23 | 504 | 43 (8%) | 43 (8%) | 33 (6%) |
| 2026-09-22 | 1092 | 67 (6%) | 67 (6%) | 56 (5%) |
| 2026-09-21 | 97 | 29 (29%) | 29 (29%) | 19 (19%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-27 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-26 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-25 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-09-24 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-23 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-09-22 | 3 | 5 | 5 | 5 | 5 | 5 | 28 |
| 2026-09-21 | 1 | 5 | 3 | 5 | 3 | 1 | 18 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3809 |
| arXiv cs.CL | `rss` | 3090 |
| TLDR | `email` | 2574 |
| The Rundown AI | `email` | 505 |
| TechCrunch AI | `rss` | 262 |
| The Decoder | `rss` | 209 |
| Codex releases | `rss` | 148 |
| The Verge AI | `rss` | 136 |
| AINews | `email` | 114 |
| AlphaSignal | `email` | 112 |
| r/LocalLLaMA | `reddit` | 91 |
| OpenClaw releases | `rss` | 84 |
| Qwen Code releases | `rss` | 73 |
| AI Hero (Matt Pocock) | `rss` | 72 |
| OpenAI blog | `rss` | 64 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 55256 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
