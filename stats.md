<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-23 02:41 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 7879
- **Enriched:** 461 (5%)
- **Taste-rated:** 461 (5%)
- **Researched:** 345 (4%)
- **Status (candidate / rejected / published / duplicate):** 2499 / 5380 / 0 / 0
- **Published bullets (all-time):** 2944 (last 7d: 149)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-23 | 504 | 43 (8%) | 43 (8%) | 29 (5%) |
| 2026-09-22 | 1092 | 67 (6%) | 67 (6%) | 54 (4%) |
| 2026-09-21 | 97 | 29 (29%) | 29 (29%) | 19 (19%) |
| 2026-09-20 | 118 | 22 (18%) | 22 (18%) | 18 (15%) |
| 2026-09-19 | 688 | 25 (3%) | 25 (3%) | 16 (2%) |
| 2026-09-18 | 648 | 21 (3%) | 21 (3%) | 15 (2%) |
| 2026-09-17 | 635 | 22 (3%) | 22 (3%) | 18 (2%) |
| 2026-09-16 | 959 | 20 (2%) | 20 (2%) | 14 (1%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-23 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-09-22 | 3 | 5 | 5 | 5 | 5 | 5 | 28 |
| 2026-09-21 | 1 | 5 | 3 | 5 | 3 | 1 | 18 |
| 2026-09-20 | 2 | 5 | 3 | 0 | 4 | 3 | 17 |
| 2026-09-19 | 1 | 5 | 3 | 0 | 2 | 0 | 11 |
| 2026-09-18 | 2 | 5 | 3 | 1 | 5 | 0 | 16 |
| 2026-09-17 | 1 | 5 | 3 | 1 | 5 | 0 | 15 |
| 2026-09-16 | 1 | 5 | 3 | 5 | 4 | 3 | 21 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4584 |
| arXiv cs.CL | `rss` | 3695 |
| TLDR | `email` | 2686 |
| The Rundown AI | `email` | 546 |
| TechCrunch AI | `rss` | 266 |
| The Decoder | `rss` | 210 |
| Codex releases | `rss` | 139 |
| The Verge AI | `rss` | 125 |
| AlphaSignal | `email` | 122 |
| r/LocalLLaMA | `reddit` | 94 |
| AINews | `email` | 86 |
| OpenClaw releases | `rss` | 82 |
| Qwen Code releases | `rss` | 74 |
| r/LocalLLM | `reddit` | 68 |
| Ars Technica AI | `rss` | 65 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 52757 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
