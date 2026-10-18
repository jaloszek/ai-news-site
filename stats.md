<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-18 17:10 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 3572
- **Enriched:** 497 (13%)
- **Taste-rated:** 497 (13%)
- **Researched:** 368 (10%)
- **Status (candidate / rejected / published / duplicate):** 1048 / 2524 / 0 / 0
- **Published bullets (all-time):** 3496 (last 7d: 171)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-18 | 131 | 38 (29%) | 38 (29%) | 24 (18%) |
| 2026-10-17 | 323 | 42 (13%) | 42 (13%) | 35 (10%) |
| 2026-10-16 | 295 | 46 (15%) | 46 (15%) | 33 (11%) |
| 2026-10-15 | 299 | 46 (15%) | 46 (15%) | 33 (11%) |
| 2026-10-14 | 326 | 46 (14%) | 46 (14%) | 34 (10%) |
| 2026-10-13 | 315 | 49 (15%) | 49 (15%) | 32 (10%) |
| 2026-10-12 | 135 | 41 (30%) | 41 (30%) | 31 (22%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-18 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-17 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-16 | 3 | 5 | 3 | 5 | 4 | 3 | 23 |
| 2026-10-15 | 3 | 5 | 3 | 5 | 2 | 0 | 18 |
| 2026-10-14 | 3 | 5 | 3 | 5 | 4 | 2 | 22 |
| 2026-10-13 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-10-12 | 3 | 5 | 3 | 5 | 0 | 2 | 18 |
| 2026-10-11 | 3 | 5 | 3 | 5 | 2 | 1 | 19 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3415 |
| TLDR | `email` | 2606 |
| arXiv cs.CL | `rss` | 1977 |
| The Rundown AI | `email` | 462 |
| TechCrunch AI | `rss` | 298 |
| The Decoder | `rss` | 217 |
| The Verge AI | `rss` | 170 |
| AINews | `email` | 152 |
| AlphaSignal | `email` | 140 |
| Codex releases | `rss` | 134 |
| Hermes Agent releases | `rss` | 95 |
| r/LocalLLaMA | `reddit` | 92 |
| Hacker News (points) | `rss` | 85 |
| OpenClaw releases | `rss` | 85 |
| Cline releases | `rss` | 80 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 64803 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
