<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-13 04:41 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 7017
- **Enriched:** 575 (8%)
- **Taste-rated:** 575 (8%)
- **Researched:** 413 (5%)
- **Status (candidate / rejected / published / duplicate):** 874 / 6143 / 0 / 0
- **Published bullets (all-time):** 3385 (last 7d: 156)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-13 | 315 | 49 (15%) | 49 (15%) | 31 (9%) |
| 2026-10-12 | 135 | 41 (30%) | 41 (30%) | 29 (21%) |
| 2026-10-11 | 98 | 29 (29%) | 29 (29%) | 19 (19%) |
| 2026-10-10 | 326 | 32 (9%) | 32 (9%) | 26 (7%) |
| 2026-10-09 | 337 | 45 (13%) | 45 (13%) | 39 (11%) |
| 2026-10-08 | 318 | 19 (5%) | 19 (5%) | 17 (5%) |
| 2026-10-07 | 259 | 18 (6%) | 18 (6%) | 14 (5%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-13 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-10-12 | 3 | 5 | 3 | 5 | 0 | 2 | 18 |
| 2026-10-11 | 3 | 5 | 3 | 5 | 2 | 1 | 19 |
| 2026-10-10 | 3 | 5 | 3 | 5 | 4 | 1 | 21 |
| 2026-10-09 | 3 | 5 | 3 | 5 | 1 | 1 | 18 |
| 2026-10-08 | 3 | 5 | 3 | 1 | 1 | 3 | 16 |
| 2026-10-07 | 3 | 5 | 3 | 1 | 2 | 3 | 17 |
| 2026-10-06 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4398 |
| TLDR | `email` | 2635 |
| arXiv cs.CL | `rss` | 2594 |
| The Rundown AI | `email` | 457 |
| TechCrunch AI | `rss` | 306 |
| The Decoder | `rss` | 213 |
| The Verge AI | `rss` | 157 |
| AINews | `email` | 155 |
| Codex releases | `rss` | 143 |
| AlphaSignal | `email` | 124 |
| r/LocalLLaMA | `reddit` | 91 |
| AI Hero (Matt Pocock) | `rss` | 78 |
| Hermes Agent releases | `rss` | 73 |
| r/LocalLLM | `reddit` | 71 |
| Cline releases | `rss` | 69 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 63603 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
