<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-16 02:31 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 7126
- **Enriched:** 481 (6%)
- **Taste-rated:** 480 (6%)
- **Researched:** 327 (4%)
- **Status (candidate / rejected / published / duplicate):** 2288 / 4838 / 0 / 0
- **Published bullets (all-time):** 2816 (last 7d: 169)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-16 | 959 | 20 (2%) | 19 (1%) | 13 (1%) |
| 2026-09-15 | 558 | 37 (6%) | 37 (6%) | 29 (5%) |
| 2026-09-14 | 86 | 28 (32%) | 28 (32%) | 21 (24%) |
| 2026-09-13 | 285 | 36 (12%) | 36 (12%) | 25 (8%) |
| 2026-09-12 | 400 | 25 (6%) | 25 (6%) | 17 (4%) |
| 2026-09-11 | 53 | 15 (28%) | 15 (28%) | 13 (24%) |
| 2026-09-10 | 1756 | 71 (4%) | 71 (4%) | 55 (3%) |
| 2026-09-09 | 280 | 35 (12%) | 35 (12%) | 21 (7%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-16 | 1 | 5 | 3 | 5 | 4 | 3 | 21 |
| 2026-09-15 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-09-14 | 1 | 5 | 3 | 5 | 5 | 1 | 20 |
| 2026-09-13 | 2 | 5 | 3 | 0 | 5 | 3 | 18 |
| 2026-09-12 | 1 | 5 | 3 | 0 | 5 | 3 | 17 |
| 2026-09-11 | 1 | 5 | 3 | 5 | 4 | 3 | 21 |
| 2026-09-10 | 2 | 5 | 4 | 5 | 6 | 3 | 25 |
| 2026-09-09 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4565 |
| arXiv cs.CL | `rss` | 3290 |
| TLDR | `email` | 2643 |
| The Rundown AI | `email` | 557 |
| TechCrunch AI | `rss` | 232 |
| The Decoder | `rss` | 218 |
| AlphaSignal | `email` | 128 |
| Codex releases | `rss` | 116 |
| The Verge AI | `rss` | 109 |
| r/LocalLLaMA | `reddit` | 94 |
| Qwen Code releases | `rss` | 90 |
| OpenClaw releases | `rss` | 78 |
| Cline releases | `rss` | 69 |
| r/MachineLearning | `reddit` | 63 |
| OpenAI blog | `rss` | 62 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 49186 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
