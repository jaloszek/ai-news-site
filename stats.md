<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-17 02:34 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6949
- **Enriched:** 472 (6%)
- **Taste-rated:** 472 (6%)
- **Researched:** 322 (4%)
- **Status (candidate / rejected / published / duplicate):** 2523 / 4426 / 0 / 0
- **Published bullets (all-time):** 2831 (last 7d: 160)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-17 | 635 | 22 (3%) | 22 (3%) | 14 (2%) |
| 2026-09-16 | 959 | 20 (2%) | 20 (2%) | 14 (1%) |
| 2026-09-15 | 558 | 37 (6%) | 37 (6%) | 30 (5%) |
| 2026-09-14 | 86 | 28 (32%) | 28 (32%) | 21 (24%) |
| 2026-09-13 | 285 | 36 (12%) | 36 (12%) | 25 (8%) |
| 2026-09-12 | 400 | 25 (6%) | 25 (6%) | 17 (4%) |
| 2026-09-11 | 53 | 15 (28%) | 15 (28%) | 13 (24%) |
| 2026-09-10 | 1756 | 71 (4%) | 71 (4%) | 55 (3%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-17 | 1 | 5 | 3 | 1 | 5 | 0 | 15 |
| 2026-09-16 | 1 | 5 | 3 | 5 | 4 | 3 | 21 |
| 2026-09-15 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-09-14 | 1 | 5 | 3 | 5 | 5 | 1 | 20 |
| 2026-09-13 | 2 | 5 | 3 | 0 | 5 | 3 | 18 |
| 2026-09-12 | 1 | 5 | 3 | 0 | 5 | 3 | 17 |
| 2026-09-11 | 1 | 5 | 3 | 5 | 4 | 3 | 21 |
| 2026-09-10 | 2 | 5 | 4 | 5 | 6 | 3 | 25 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4759 |
| arXiv cs.CL | `rss` | 3422 |
| TLDR | `email` | 2772 |
| The Rundown AI | `email` | 588 |
| TechCrunch AI | `rss` | 241 |
| The Decoder | `rss` | 220 |
| AlphaSignal | `email` | 129 |
| Codex releases | `rss` | 125 |
| The Verge AI | `rss` | 115 |
| r/LocalLLaMA | `reddit` | 95 |
| Qwen Code releases | `rss` | 89 |
| OpenClaw releases | `rss` | 77 |
| Cline releases | `rss` | 71 |
| OpenAI blog | `rss` | 67 |
| r/MachineLearning | `reddit` | 63 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 49586 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
