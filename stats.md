<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-24 02:41 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 3803
- **Enriched:** 652 (17%)
- **Taste-rated:** 651 (17%)
- **Researched:** 470 (12%)
- **Status (candidate / rejected / published / duplicate):** 1492 / 2311 / 0 / 0
- **Published bullets (all-time):** 3637 (last 7d: 189)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-24 | 291 | 43 (14%) | 43 (14%) | 29 (9%) |
| 2026-10-23 | 300 | 54 (18%) | 54 (18%) | 40 (13%) |
| 2026-10-22 | 302 | 35 (11%) | 35 (11%) | 26 (8%) |
| 2026-10-21 | 298 | 46 (15%) | 46 (15%) | 32 (10%) |
| 2026-10-20 | 301 | 57 (18%) | 56 (18%) | 42 (13%) |
| 2026-10-19 | 63 | 30 (47%) | 30 (47%) | 20 (31%) |
| 2026-10-18 | 131 | 56 (42%) | 56 (42%) | 38 (29%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-24 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-23 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-22 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-21 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-20 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-10-19 | 3 | 5 | 3 | 5 | 4 | 3 | 23 |
| 2026-10-18 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-17 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 2696 |
| arXiv cs.AI | `rss` | 2445 |
| arXiv cs.CL | `rss` | 1317 |
| The Rundown AI | `email` | 442 |
| TechCrunch AI | `rss` | 284 |
| The Decoder | `rss` | 209 |
| The Verge AI | `rss` | 169 |
| AlphaSignal | `email` | 155 |
| AINews | `email` | 124 |
| Hacker News (points) | `rss` | 120 |
| Hermes Agent releases | `rss` | 117 |
| Codex releases | `rss` | 107 |
| r/LocalLLaMA | `reddit` | 88 |
| AI Hero (Matt Pocock) | `rss` | 78 |
| Copilot CLI releases | `rss` | 75 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 65914 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
