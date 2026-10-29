<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-29 03:42 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 3417
- **Enriched:** 647 (18%)
- **Taste-rated:** 646 (18%)
- **Researched:** 463 (13%)
- **Status (candidate / rejected / published / duplicate):** 1014 / 2403 / 0 / 0
- **Published bullets (all-time):** 3751 (last 7d: 186)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-29 | 301 | 44 (14%) | 44 (14%) | 24 (7%) |
| 2026-10-28 | 292 | 51 (17%) | 51 (17%) | 37 (12%) |
| 2026-10-27 | 332 | 64 (19%) | 64 (19%) | 50 (15%) |
| 2026-10-26 | 89 | 32 (35%) | 32 (35%) | 18 (20%) |
| 2026-10-25 | 99 | 32 (32%) | 32 (32%) | 22 (22%) |
| 2026-10-24 | 291 | 52 (17%) | 52 (17%) | 40 (13%) |
| 2026-10-23 | 300 | 60 (20%) | 60 (20%) | 45 (15%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-29 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-27 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-26 | 3 | 5 | 3 | 5 | 3 | 0 | 19 |
| 2026-10-25 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-10-24 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-23 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-22 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 2658 |
| arXiv cs.AI | `rss` | 2222 |
| arXiv cs.CL | `rss` | 1200 |
| The Rundown AI | `email` | 461 |
| TechCrunch AI | `rss` | 278 |
| The Decoder | `rss` | 212 |
| The Verge AI | `rss` | 174 |
| AlphaSignal | `email` | 152 |
| Hacker News (points) | `rss` | 148 |
| Hermes Agent releases | `rss` | 110 |
| Codex releases | `rss` | 93 |
| AINews | `email` | 92 |
| r/LocalLLaMA | `reddit` | 91 |
| Cline releases | `rss` | 75 |
| OpenClaw releases | `rss` | 73 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 67245 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
