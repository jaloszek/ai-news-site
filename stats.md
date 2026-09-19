<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-19 02:21 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 7118
- **Enriched:** 423 (5%)
- **Taste-rated:** 423 (5%)
- **Researched:** 289 (4%)
- **Status (candidate / rejected / published / duplicate):** 3488 / 3630 / 0 / 0
- **Published bullets (all-time):** 2858 (last 7d: 141)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-19 | 688 | 19 (2%) | 19 (2%) | 11 (1%) |
| 2026-09-18 | 648 | 21 (3%) | 21 (3%) | 15 (2%) |
| 2026-09-17 | 635 | 22 (3%) | 22 (3%) | 17 (2%) |
| 2026-09-16 | 959 | 20 (2%) | 20 (2%) | 14 (1%) |
| 2026-09-15 | 558 | 37 (6%) | 37 (6%) | 31 (5%) |
| 2026-09-14 | 86 | 28 (32%) | 28 (32%) | 21 (24%) |
| 2026-09-13 | 285 | 36 (12%) | 36 (12%) | 25 (8%) |
| 2026-09-12 | 400 | 25 (6%) | 25 (6%) | 17 (4%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-19 | 1 | 5 | 3 | 0 | 2 | 0 | 11 |
| 2026-09-18 | 2 | 5 | 3 | 1 | 5 | 0 | 16 |
| 2026-09-17 | 1 | 5 | 3 | 1 | 5 | 0 | 15 |
| 2026-09-16 | 1 | 5 | 3 | 5 | 4 | 3 | 21 |
| 2026-09-15 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-09-14 | 1 | 5 | 3 | 5 | 5 | 1 | 20 |
| 2026-09-13 | 2 | 5 | 3 | 0 | 5 | 3 | 18 |
| 2026-09-12 | 1 | 5 | 3 | 0 | 5 | 3 | 17 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4420 |
| arXiv cs.CL | `rss` | 3614 |
| TLDR | `email` | 2802 |
| The Rundown AI | `email` | 573 |
| TechCrunch AI | `rss` | 266 |
| The Decoder | `rss` | 219 |
| Codex releases | `rss` | 131 |
| AlphaSignal | `email` | 124 |
| The Verge AI | `rss` | 117 |
| r/LocalLLaMA | `reddit` | 95 |
| OpenClaw releases | `rss` | 84 |
| Qwen Code releases | `rss` | 78 |
| AINews | `email` | 76 |
| Cline releases | `rss` | 72 |
| r/LocalLLM | `reddit` | 63 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 49957 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
