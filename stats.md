<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-13 02:11 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 7051
- **Enriched:** 511 (7%)
- **Taste-rated:** 511 (7%)
- **Researched:** 347 (4%)
- **Status (candidate / rejected / published / duplicate):** 2774 / 4277 / 0 / 0
- **Published bullets (all-time):** 2752 (last 7d: 163)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-13 | 285 | 29 (10%) | 29 (10%) | 18 (6%) |
| 2026-09-12 | 400 | 25 (6%) | 25 (6%) | 16 (4%) |
| 2026-09-11 | 53 | 15 (28%) | 15 (28%) | 11 (20%) |
| 2026-09-10 | 1756 | 71 (4%) | 71 (4%) | 55 (3%) |
| 2026-09-09 | 280 | 35 (12%) | 35 (12%) | 21 (7%) |
| 2026-09-08 | 588 | 39 (6%) | 39 (6%) | 20 (3%) |
| 2026-09-07 | 96 | 30 (31%) | 30 (31%) | 15 (15%) |
| 2026-09-06 | 86 | 25 (29%) | 25 (29%) | 14 (16%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-13 | 2 | 5 | 3 | 0 | 5 | 3 | 18 |
| 2026-09-12 | 1 | 5 | 3 | 0 | 5 | 3 | 17 |
| 2026-09-11 | 1 | 5 | 3 | 5 | 4 | 3 | 21 |
| 2026-09-10 | 2 | 5 | 4 | 5 | 6 | 3 | 25 |
| 2026-09-09 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-08 | 0 | 3 | 3 | 5 | 5 | 3 | 19 |
| 2026-09-07 | 0 | 5 | 3 | 5 | 5 | 1 | 19 |
| 2026-09-06 | 2 | 5 | 3 | 5 | 5 | 0 | 20 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4450 |
| arXiv cs.CL | `rss` | 3067 |
| TLDR | `email` | 2619 |
| The Rundown AI | `email` | 553 |
| TechCrunch AI | `rss` | 222 |
| The Decoder | `rss` | 221 |
| AlphaSignal | `email` | 130 |
| Codex releases | `rss` | 119 |
| The Verge AI | `rss` | 111 |
| Qwen Code releases | `rss` | 102 |
| r/LocalLLaMA | `reddit` | 95 |
| OpenClaw releases | `rss` | 80 |
| Cline releases | `rss` | 76 |
| OpenAI blog | `rss` | 64 |
| r/LocalLLM | `reddit` | 57 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 47097 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
