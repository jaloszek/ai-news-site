<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-31 03:21 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 3298
- **Enriched:** 648 (19%)
- **Taste-rated:** 647 (19%)
- **Researched:** 456 (13%)
- **Status (candidate / rejected / published / duplicate):** 1092 / 2206 / 0 / 0
- **Published bullets (all-time):** 3797 (last 7d: 184)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-31 | 243 | 40 (16%) | 40 (16%) | 25 (10%) |
| 2026-10-30 | 256 | 47 (18%) | 47 (18%) | 30 (11%) |
| 2026-10-29 | 301 | 46 (15%) | 46 (15%) | 29 (9%) |
| 2026-10-28 | 292 | 51 (17%) | 51 (17%) | 38 (13%) |
| 2026-10-27 | 332 | 64 (19%) | 64 (19%) | 50 (15%) |
| 2026-10-26 | 89 | 32 (35%) | 32 (35%) | 18 (20%) |
| 2026-10-25 | 99 | 32 (32%) | 32 (32%) | 22 (22%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-31 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-10-30 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-29 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-27 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-26 | 3 | 5 | 3 | 5 | 3 | 0 | 19 |
| 2026-10-25 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-10-24 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 2620 |
| arXiv cs.AI | `rss` | 748 |
| The Rundown AI | `email` | 468 |
| arXiv cs.CL | `rss` | 435 |
| TechCrunch AI | `rss` | 272 |
| The Decoder | `rss` | 205 |
| The Verge AI | `rss` | 172 |
| Hacker News (points) | `rss` | 157 |
| AlphaSignal | `email` | 155 |
| Hermes Agent releases | `rss` | 101 |
| r/LocalLLaMA | `reddit` | 90 |
| AINews | `email` | 84 |
| OpenClaw releases | `rss` | 82 |
| Codex releases | `rss` | 79 |
| HF Daily Papers | `rss` | 70 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 67437 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
