<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-23 14:42 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6583
- **Enriched:** 531 (8%)
- **Taste-rated:** 531 (8%)
- **Researched:** 346 (5%)
- **Status (candidate / rejected / published / duplicate):** 2516 / 4067 / 0 / 0
- **Published bullets (all-time):** 2323 (last 7d: 180)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-23 | 154 | 48 (31%) | 48 (31%) | 23 (14%) |
| 2026-08-22 | 377 | 47 (12%) | 47 (12%) | 27 (7%) |
| 2026-08-21 | 562 | 46 (8%) | 46 (8%) | 25 (4%) |
| 2026-08-20 | 586 | 42 (7%) | 42 (7%) | 23 (3%) |
| 2026-08-19 | 837 | 31 (3%) | 31 (3%) | 21 (2%) |
| 2026-08-18 | 565 | 38 (6%) | 38 (6%) | 27 (4%) |
| 2026-08-17 | 95 | 37 (38%) | 37 (38%) | 23 (24%) |
| 2026-08-16 | 354 | 38 (10%) | 38 (10%) | 21 (5%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-23 | 2 | 5 | 3 | 5 | 5 | 4 | 24 |
| 2026-08-22 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-21 | 3 | 5 | 3 | 5 | 4 | 3 | 23 |
| 2026-08-20 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-08-19 | 3 | 5 | 3 | 5 | 5 | 0 | 21 |
| 2026-08-18 | 3 | 5 | 3 | 5 | 5 | 0 | 21 |
| 2026-08-17 | 1 | 5 | 3 | 5 | 5 | 2 | 21 |
| 2026-08-16 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3860 |
| TLDR | `email` | 2396 |
| arXiv cs.CL | `rss` | 2314 |
| The Rundown AI | `email` | 571 |
| TechCrunch AI | `rss` | 219 |
| The Decoder | `rss` | 201 |
| AlphaSignal | `email` | 145 |
| Cline releases | `rss` | 112 |
| Qwen Code releases | `rss` | 109 |
| r/LocalLLaMA | `reddit` | 89 |
| The Verge AI | `rss` | 87 |
| Codex releases | `rss` | 85 |
| Hacker News (ai/llm/claude) | `rss` | 69 |
| r/LangChain | `reddit` | 59 |
| r/Artificial | `reddit` | 55 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 37025 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_
