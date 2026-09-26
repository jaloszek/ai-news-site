<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-26 08:59 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6973
- **Enriched:** 428 (6%)
- **Taste-rated:** 427 (6%)
- **Researched:** 310 (4%)
- **Status (candidate / rejected / published / duplicate):** 2899 / 4074 / 0 / 0
- **Published bullets (all-time):** 2992 (last 7d: 145)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-26 | 598 | 34 (5%) | 33 (5%) | 17 (2%) |
| 2026-09-24 | 705 | 44 (6%) | 44 (6%) | 28 (3%) |
| 2026-09-23 | 504 | 43 (8%) | 43 (8%) | 32 (6%) |
| 2026-09-22 | 1092 | 67 (6%) | 67 (6%) | 56 (5%) |
| 2026-09-21 | 97 | 29 (29%) | 29 (29%) | 19 (19%) |
| 2026-09-20 | 118 | 22 (18%) | 22 (18%) | 18 (15%) |
| 2026-09-19 | 688 | 25 (3%) | 25 (3%) | 16 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-26 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-24 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-23 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-09-22 | 3 | 5 | 5 | 5 | 5 | 5 | 28 |
| 2026-09-21 | 1 | 5 | 3 | 5 | 3 | 1 | 18 |
| 2026-09-20 | 2 | 5 | 3 | 0 | 4 | 3 | 17 |
| 2026-09-19 | 1 | 5 | 3 | 0 | 2 | 0 | 11 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4280 |
| arXiv cs.CL | `rss` | 3434 |
| TLDR | `email` | 2814 |
| The Rundown AI | `email` | 554 |
| TechCrunch AI | `rss` | 282 |
| The Decoder | `rss` | 214 |
| Codex releases | `rss` | 151 |
| The Verge AI | `rss` | 143 |
| AlphaSignal | `email` | 128 |
| AINews | `email` | 106 |
| r/LocalLLaMA | `reddit` | 90 |
| OpenClaw releases | `rss` | 84 |
| Qwen Code releases | `rss` | 78 |
| Ars Technica AI | `rss` | 73 |
| AI Hero (Matt Pocock) | `rss` | 72 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 53660 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
