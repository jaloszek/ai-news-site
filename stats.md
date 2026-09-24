<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-24 02:33 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 8509
- **Enriched:** 488 (5%)
- **Taste-rated:** 487 (5%)
- **Researched:** 360 (4%)
- **Status (candidate / rejected / published / duplicate):** 2516 / 5993 / 0 / 0
- **Published bullets (all-time):** 2968 (last 7d: 152)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-24 | 705 | 42 (5%) | 41 (5%) | 25 (3%) |
| 2026-09-23 | 504 | 43 (8%) | 43 (8%) | 31 (6%) |
| 2026-09-22 | 1092 | 67 (6%) | 67 (6%) | 56 (5%) |
| 2026-09-21 | 97 | 29 (29%) | 29 (29%) | 19 (19%) |
| 2026-09-20 | 118 | 22 (18%) | 22 (18%) | 18 (15%) |
| 2026-09-19 | 688 | 25 (3%) | 25 (3%) | 16 (2%) |
| 2026-09-18 | 648 | 21 (3%) | 21 (3%) | 15 (2%) |
| 2026-09-17 | 635 | 22 (3%) | 22 (3%) | 18 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-24 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-23 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-09-22 | 3 | 5 | 5 | 5 | 5 | 5 | 28 |
| 2026-09-21 | 1 | 5 | 3 | 5 | 3 | 1 | 18 |
| 2026-09-20 | 2 | 5 | 3 | 0 | 4 | 3 | 17 |
| 2026-09-19 | 1 | 5 | 3 | 0 | 2 | 0 | 11 |
| 2026-09-18 | 2 | 5 | 3 | 1 | 5 | 0 | 16 |
| 2026-09-17 | 1 | 5 | 3 | 1 | 5 | 0 | 15 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4638 |
| arXiv cs.CL | `rss` | 3709 |
| TLDR | `email` | 2806 |
| The Rundown AI | `email` | 564 |
| TechCrunch AI | `rss` | 277 |
| The Decoder | `rss` | 218 |
| Codex releases | `rss` | 145 |
| The Verge AI | `rss` | 135 |
| AlphaSignal | `email` | 125 |
| AINews | `email` | 93 |
| r/LocalLLaMA | `reddit` | 92 |
| OpenClaw releases | `rss` | 85 |
| OpenAI blog | `rss` | 74 |
| Qwen Code releases | `rss` | 73 |
| Ars Technica AI | `rss` | 69 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 53445 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
