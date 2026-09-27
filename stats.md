<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-27 02:50 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6807
- **Enriched:** 474 (6%)
- **Taste-rated:** 474 (6%)
- **Researched:** 351 (5%)
- **Status (candidate / rejected / published / duplicate):** 1926 / 4881 / 0 / 0
- **Published bullets (all-time):** 3039 (last 7d: 181)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-27 | 84 | 29 (34%) | 29 (34%) | 22 (26%) |
| 2026-09-26 | 633 | 84 (13%) | 84 (13%) | 55 (8%) |
| 2026-09-24 | 705 | 47 (6%) | 47 (6%) | 33 (4%) |
| 2026-09-23 | 504 | 43 (8%) | 43 (8%) | 33 (6%) |
| 2026-09-22 | 1092 | 67 (6%) | 67 (6%) | 56 (5%) |
| 2026-09-21 | 97 | 29 (29%) | 29 (29%) | 19 (19%) |
| 2026-09-20 | 118 | 22 (18%) | 22 (18%) | 18 (15%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-27 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-26 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-25 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-09-24 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-23 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-09-22 | 3 | 5 | 5 | 5 | 5 | 5 | 28 |
| 2026-09-21 | 1 | 5 | 3 | 5 | 3 | 1 | 18 |
| 2026-09-20 | 2 | 5 | 3 | 0 | 4 | 3 | 17 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3994 |
| arXiv cs.CL | `rss` | 3279 |
| TLDR | `email` | 2692 |
| The Rundown AI | `email` | 540 |
| TechCrunch AI | `rss` | 269 |
| The Decoder | `rss` | 212 |
| Codex releases | `rss` | 146 |
| The Verge AI | `rss` | 141 |
| AlphaSignal | `email` | 120 |
| AINews | `email` | 116 |
| r/LocalLLaMA | `reddit` | 90 |
| OpenClaw releases | `rss` | 85 |
| Qwen Code releases | `rss` | 74 |
| AI Hero (Matt Pocock) | `rss` | 72 |
| Ars Technica AI | `rss` | 70 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 54752 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
