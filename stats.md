<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-12 02:21 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 7025
- **Enriched:** 520 (7%)
- **Taste-rated:** 510 (7%)
- **Researched:** 351 (4%)
- **Status (candidate / rejected / published / duplicate):** 3077 / 3948 / 0 / 0
- **Published bullets (all-time):** 2734 (last 7d: 166)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-12 | 400 | 24 (6%) | 14 (3%) | 13 (3%) |
| 2026-09-11 | 53 | 14 (26%) | 14 (26%) | 10 (18%) |
| 2026-09-10 | 1756 | 71 (4%) | 71 (4%) | 53 (3%) |
| 2026-09-09 | 280 | 35 (12%) | 35 (12%) | 21 (7%) |
| 2026-09-08 | 588 | 39 (6%) | 39 (6%) | 20 (3%) |
| 2026-09-07 | 96 | 30 (31%) | 30 (31%) | 15 (15%) |
| 2026-09-06 | 86 | 25 (29%) | 25 (29%) | 14 (16%) |
| 2026-09-05 | 600 | 45 (7%) | 45 (7%) | 26 (4%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-12 | 1 | 5 | 3 | 0 | 5 | 3 | 17 |
| 2026-09-11 | 1 | 5 | 3 | 5 | 4 | 3 | 21 |
| 2026-09-10 | 2 | 5 | 4 | 5 | 6 | 3 | 25 |
| 2026-09-09 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-08 | 0 | 3 | 3 | 5 | 5 | 3 | 19 |
| 2026-09-07 | 0 | 5 | 3 | 5 | 5 | 1 | 19 |
| 2026-09-06 | 2 | 5 | 3 | 5 | 5 | 0 | 20 |
| 2026-09-05 | 3 | 5 | 1 | 5 | 5 | 2 | 21 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4275 |
| arXiv cs.CL | `rss` | 3198 |
| TLDR | `email` | 2745 |
| The Rundown AI | `email` | 584 |
| TechCrunch AI | `rss` | 232 |
| The Decoder | `rss` | 222 |
| AlphaSignal | `email` | 133 |
| Codex releases | `rss` | 120 |
| The Verge AI | `rss` | 111 |
| Qwen Code releases | `rss` | 101 |
| r/LocalLLaMA | `reddit` | 95 |
| OpenClaw releases | `rss` | 81 |
| Cline releases | `rss` | 76 |
| OpenAI blog | `rss` | 66 |
| r/LocalLLM | `reddit` | 60 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 46509 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
