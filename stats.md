<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-15 02:34 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 5842
- **Enriched:** 604 (10%)
- **Taste-rated:** 604 (10%)
- **Researched:** 425 (7%)
- **Status (candidate / rejected / published / duplicate):** 1173 / 4669 / 0 / 0
- **Published bullets (all-time):** 3425 (last 7d: 155)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-15 | 299 | 32 (10%) | 32 (10%) | 19 (6%) |
| 2026-10-14 | 326 | 41 (12%) | 41 (12%) | 28 (8%) |
| 2026-10-13 | 315 | 49 (15%) | 49 (15%) | 32 (10%) |
| 2026-10-12 | 135 | 41 (30%) | 41 (30%) | 31 (22%) |
| 2026-10-11 | 98 | 29 (29%) | 29 (29%) | 19 (19%) |
| 2026-10-10 | 326 | 32 (9%) | 32 (9%) | 26 (7%) |
| 2026-10-09 | 337 | 45 (13%) | 45 (13%) | 39 (11%) |
| 2026-10-08 | 318 | 19 (5%) | 19 (5%) | 17 (5%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-15 | 3 | 5 | 3 | 5 | 2 | 0 | 18 |
| 2026-10-14 | 3 | 5 | 3 | 5 | 4 | 2 | 22 |
| 2026-10-13 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-10-12 | 3 | 5 | 3 | 5 | 0 | 2 | 18 |
| 2026-10-11 | 3 | 5 | 3 | 5 | 2 | 1 | 19 |
| 2026-10-10 | 3 | 5 | 3 | 5 | 4 | 1 | 21 |
| 2026-10-09 | 3 | 5 | 3 | 5 | 1 | 1 | 18 |
| 2026-10-08 | 3 | 5 | 3 | 1 | 1 | 3 | 16 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4224 |
| TLDR | `email` | 2713 |
| arXiv cs.CL | `rss` | 2512 |
| The Rundown AI | `email` | 483 |
| TechCrunch AI | `rss` | 320 |
| The Decoder | `rss` | 215 |
| The Verge AI | `rss` | 172 |
| AINews | `email` | 166 |
| Codex releases | `rss` | 146 |
| AlphaSignal | `email` | 133 |
| r/LocalLLaMA | `reddit` | 91 |
| Hermes Agent releases | `rss` | 87 |
| AI Hero (Matt Pocock) | `rss` | 78 |
| Cline releases | `rss` | 77 |
| Copilot CLI releases | `rss` | 72 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 63929 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
